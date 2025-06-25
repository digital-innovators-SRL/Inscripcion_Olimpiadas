<?php


namespace App\Http\Controllers;

use App\Imports\InscripcionImport;
use App\Exports\InscritosCompetenciaExport;
use App\Models\Area;
use App\Models\Categoria;
use App\Models\Estudiante;
use App\Models\Tutor;
use App\Models\Inscripcion;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\AreaCompetencia;
use App\Models\Competencia;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use ZipArchive;
use Illuminate\Support\Facades\Log;


class InscripcionController extends Controller
{
    public function index()
    {
        return Inscripcion::with(['estudiante', 'competencia', 'tutor'])->get();
    }


    public function mostrarFormulario()
    {
        return view('inscripciones.importar'); // Asegúrate de crear esta vista
    }

    public function importarExcel(Request $request)
    {
        $request->validate([
            'archivo' => 'required|file|mimes:xlsx,xls,csv',
            'competencia_id' => 'required|exists:competencias,id',
        ]);

        $batch_id = (string) Str::uuid();

        try {
            Excel::import(
                new InscripcionImport(
                    $request->competencia_id,
                    auth()->id(),
                    $request->user()->email,
                    $request->user()->celular,
                    $request->user()->name,
                    $batch_id
                ),
                $request->file('archivo')
            );

            return response()->json(['message' => 'Importación completada exitosamente.', 'batch-id' => $batch_id]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error durante la importación',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function generarPDFMasivo(Request $request, $competencia_id)
    {
        $tutor_id = auth()->id();
        $batch_id = $request->header('X-Batch-Id');
        if (!$batch_id) {
            return response()->json(['message' => 'Falta el batch_id en el header.'], 400);
        }

        // Buscar inscripciones del tutor para esa competencia
        $inscripciones = Inscripcion::with(['estudiante', 'competencia.areaCategoria.area', 'competencia.areaCategoria.categoria'])
            ->where('tutor_id', $tutor_id)
            ->where('competencia_id', $competencia_id)
            ->where('batch_id', $batch_id)
            ->get();

        if ($inscripciones->isEmpty()) {
            $yaInscritos = Inscripcion::where('tutor_id', $tutor_id)
                ->where('competencia_id', $competencia_id)
                ->exists();

            if ($yaInscritos) {
                return response()->json([
                    'message' => 'Los estudiantes ya están inscritos en esta competencia o fueron subidos previamente.'
                ], 409);
            }

            return response()->json(['message' => 'No hay inscripciones registradas.'], 404);
        }

        // Crear carpeta temporal
        $zipFileName = "ordenes_pago_{$competencia_id}.zip";
        $zipPath = storage_path("app/public/tmp/$zipFileName");
        $tmpDir = storage_path("app/public/tmp/ordenes_$competencia_id");

        if (!file_exists($tmpDir)) {
            mkdir($tmpDir, 0777, true);
        }

        if (is_dir($tmpDir)) {
            foreach (glob("$tmpDir/*.pdf") as $file) {
                unlink($file);
            }
        } else {
            mkdir($tmpDir, 0777, true);
        }

        if (file_exists($zipPath)) {
            unlink($zipPath);
        }

        // Generar PDFs
        foreach ($inscripciones as $inscripcion) {
            $estudiante = $inscripcion->estudiante;
            $competencia = $inscripcion->competencia;

            // Orden de pago
            $ordenPdf = Pdf::loadView('pdf.orden_pago', compact('inscripcion', 'estudiante', 'competencia'));
            $ordenPath = "$tmpDir/orden_pago_{$inscripcion->id}.pdf";
            $ordenPdf->save($ordenPath);

            // Comprobante de pago
            $comprobantePdf = Pdf::loadView('pdf.comprobante_pago', compact('inscripcion', 'competencia'));
            $comprobantePath = "$tmpDir/comprobante_pago_{$inscripcion->id}.pdf";
            $comprobantePdf->save($comprobantePath);
        }

        // Crear ZIP
        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
            foreach (glob("$tmpDir/*.pdf") as $file) {
                $zip->addFile($file, basename($file));
            }
            $zip->close();
        } else {
            return response()->json(['error' => 'No se pudo crear el archivo ZIP'], 500);
        }

        // Descargar ZIP
        return response()->download($zipPath)->deleteFileAfterSend(true);
    }

    public function index1()
    {
        $inscripciones = DB::table('inscripciones')
            ->join('estudiantes', 'inscripciones.estudiante_id', '=', 'estudiantes.id')
            ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
            ->join('area_categoria', 'competencias.area_categoria_id', '=', 'area_categoria.id')
            ->join('areas', 'area_categoria.area_id', '=', 'areas.id')
            ->join('categorias', 'area_categoria.categoria_id', '=', 'categorias.id')
            ->join('users as tutores', 'inscripciones.tutor_id', '=', 'tutores.id')
            ->select(
                'inscripciones.estudiante_id',
                'inscripciones.competencia_id',
                DB::raw('MIN(inscripciones.id) as id'),
                'estudiantes.nombres',
                'estudiantes.apellidos',
                'estudiantes.ci',
                'estudiantes.email',
                'estudiantes.curso',
                'competencias.nombre as competencia',
                'areas.nombre as area',
                'categorias.nombre as categoria',
                'tutores.name as tutor',
                'inscripciones.contacto_celular',
                'inscripciones.contacto_email'
            )
            ->groupBy(
                'inscripciones.estudiante_id',
                'inscripciones.competencia_id',
                'estudiantes.nombres',
                'estudiantes.apellidos',
                'estudiantes.ci',
                'estudiantes.email',
                'estudiantes.curso',
                'competencias.nombre',
                'areas.nombre',
                'categorias.nombre',
                'tutores.name',
                'inscripciones.contacto_celular',
                'inscripciones.contacto_email'
            )
            ->get();

        return view('inscripciones.index', compact('inscripciones'));
    }

    public function obtenerOrdenPago(Request $request)
    {
        Log::info($request->all());
        $request->validate([
            'estudiante' => 'required|array',
            'estudiante.nombres' => 'required|string',
            'estudiante.apellidos' => 'required|string',
            'estudiante.ci' => 'required|regex:/^\d{5,8}$/',
            'estudiante.fecha_nacimiento' => 'required|date',
            'estudiante.email' => 'required|email',
            'contacto_email' => 'required|email',
            'contacto_celular' => 'nullable|string',
            'nombre_tutor' => 'required|string',
            'competencia_id' => 'required|exists:competencias,id',
        ]);
        
        // Buscar o crear estudiante
        $est = $request->estudiante;
        $estudiante = Estudiante::where('nombres', $est['nombres'])
            ->where('apellidos', $est['apellidos'])
            ->where('ci', $est['ci'])
            ->first();

        if (!$estudiante) {
            $estudiante = Estudiante::create($est);
        }

        $competenciaNueva = Competencia::find($request->competencia_id);
        if (!$competenciaNueva) {
            return response()->json(['message' => 'Competencia no encontrada.'], 404);
        }

        $yaInscrito = Inscripcion::where('estudiante_id', $estudiante->id)
            ->whereHas('competencia', function ($q) use ($competenciaNueva) {
                $q->where('fecha_competencia', $competenciaNueva->fecha_competencia);
            })->exists();

        if ($yaInscrito) {
            return response()->json([
                'message' => 'El estudiante ya está inscrito en otra competencia para la fecha ' . $competenciaNueva->fecha_competencia
            ], 409);
        }

        // Crear inscripción (sin comprobante y deshabilitado)
        $batch_id = (string) Str::uuid();

        $inscripcion = Inscripcion::create([
            'estudiante_id' => $estudiante->id,
            'competencia_id' => $request->competencia_id,
            'tutor_id' => Auth::id(),
            'contacto_email' => $request->contacto_email,
            'contacto_celular' => $request->contacto_celular,
            'nombre_tutor' => $request->nombre_tutor,
            'batch_id' => $batch_id,
            'comprobante_pago' => '',
            'habilitado' => false,
            'created_at' => now(),
        ]);

        // ✅ Cargar competencia correctamente con relaciones
        $competencia = Competencia::with('areaCategoria.area', 'areaCategoria.categoria')->find($request->competencia_id);

        // Generar PDF
        $ordenPdf = Pdf::loadView('pdf.orden_pago', [
            'inscripcion' => $inscripcion,
            'estudiante' => $estudiante,
            'competencia' => $competencia,
        ])->output();

        $comprobantePdf = Pdf::loadView('pdf.comprobante_pago', [
            'inscripcion' => $inscripcion,
            'competencia' => $competencia,
        ])->output();

        $tempDir = storage_path("app/public/tmp/orden_pago_{$inscripcion->id}");
        if (!file_exists($tempDir)) {
            mkdir($tempDir, 0777, true);
        }

        $ordenPath = $tempDir . "/orden_pago_{$inscripcion->id}.pdf";
        $comprobantePath = $tempDir . "/comprobante_pago_{$inscripcion->id}.pdf";

        file_put_contents($ordenPath, $ordenPdf);
        file_put_contents($comprobantePath, $comprobantePdf);

        $zipFileName = "documentos_inscripcion_{$inscripcion->id}.zip";
        $zipPath = storage_path("app/$zipFileName");

        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            $zip->addFile($ordenPath, basename($ordenPath));
            $zip->addFile($comprobantePath, basename($comprobantePath));
            $zip->close();
        }

        unlink($ordenPath);
        unlink($comprobantePath);
        rmdir($tempDir);

            //return $pdf->download("orden_pago_{$inscripcion->id}.pdf");
        return response()->download($zipPath)->deleteFileAfterSend(true);
    }

    public function inscribir(Request $request)
    {
        // Validación del JSON recibido
        $validated = $request->validate([
            'name' => 'required|string|max:255', // Cambié 'student.name' por 'name'
            'id' => 'required|string|max:50|unique:estudiantes,cedula',
            'birthdate' => 'required|date',
            'areas' => 'array',
            'areas.*.competencia' => 'required|string|max:100', // Cambié 'areas.*.area' por 'areas.*.competencia'
            'areas.*.nivel' => 'required|string|max:50',
            'tutors' => 'array',
            'tutors.*.nombre' => 'required|string|max:255', // Cambié 'tutors.*.name' por 'tutors.*.nombre'
            'tutors.*.parentesco' => 'required|string|max:100',
            'tutors.*.telefono' => 'required|string|max:20',
        ]);

        try {
            DB::beginTransaction();

            // Guardar el estudiante
            $estudiante = Estudiante::create([
                'nombre' => $validated['name'], // Usé 'name' en lugar de 'student.name'
                'cedula' => $validated['id'], // Usé 'id' en lugar de 'student.id'
                'fecha_nacimiento' => $validated['birthdate'],
            ]);

            // Guardar las áreas de competencia
            if (isset($validated['areas'])) {
                foreach ($validated['areas'] as $area) {
                    AreaCompetencia::create([
                        'estudiante_id' => $estudiante->id,
                        'area' => $area['competencia'], // Usé 'competencia' en lugar de 'area'
                        'nivel' => $area['nivel'],
                    ]);
                }
            }

            // Guardar los tutores
            if (isset($validated['tutors'])) {
                foreach ($validated['tutors'] as $tutor) {
                    Tutor::create([
                        'estudiante_id' => $estudiante->id,
                        'nombre' => $tutor['nombre'], // Usé 'nombre' en lugar de 'name'
                        'parentesco' => $tutor['parentesco'],
                        'telefono' => $tutor['telefono'],
                    ]);
                }
            }

            DB::commit();
            return response()->json(['message' => 'Inscripción realizada con éxito'], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            // Devolver error si algo sale mal
            return response()->json(['message' => 'Error en la inscripción', 'error' => $e->getMessage()], 500);
        }
    }

    public function confirmarComprobante(Request $request)
    {
        $request->validate([
            'numero' => 'required|string',
            'inscripcion_id' => 'required|integer|exists:inscripciones,id',
            'tutor' => 'nullable|string',
            'monto' => 'nullable|string',
        ]);

        $inscripcion = Inscripcion::find($request->inscripcion_id);
        $inscripcion->comprobante_pago = $request->numero;
        $inscripcion->habilitado = true;
        $inscripcion->save();

        return response()->json([
            'message' => 'Comprobante actualizado correctamente',
            'inscripcion' => $inscripcion,
        ]);
    }

    public function exportarInscritosExcel($competencia_id)
    {
        $count = \App\Models\Inscripcion::where('competencia_id', $competencia_id)->count();
        if ($count === 0) {
            return response()->json(['message' => 'No hay inscritos en esta competencia.'], 404);
        }
        $competencia = \App\Models\Competencia::findOrFail($competencia_id);
        $filename = 'inscritos_' . $competencia->nombre . '.xlsx';
        return Excel::download(new InscritosCompetenciaExport($competencia_id), $filename);
    }

    public function inscribirEstudiante(Request $request)
    {
        Log::info($request->all());
        $request->validate([
            'estudiante' => 'required|array',
            'estudiante.nombres' => 'required|string',
            'estudiante.apellidos' => 'required|string',
            'estudiante.ci' => 'required|regex:/^\d{5,8}$/',
            'estudiante.fecha_nacimiento' => 'required|date',
            'estudiante.email' => 'required|email',
            'contacto_email' => 'required|email',
            'contacto_celular' => 'nullable|string',
            'tutor_id' => 'required|exists:users,id',
            'nombre_tutor' => 'required|string',
            'competencia_id' => 'required|exists:competencias,id',
        ]);
        
        // Buscar o crear estudiante
        $est = $request->estudiante;
        $estudiante = Estudiante::where('nombres', $est['nombres'])
            ->where('apellidos', $est['apellidos'])
            ->where('ci', $est['ci'])
            ->first();

        if (!$estudiante) {
            $estudiante = Estudiante::create($est);
        }

        $competenciaNueva = Competencia::find($request->competencia_id);
        if (!$competenciaNueva) {
            return response()->json(['message' => 'Competencia no encontrada.'], 404);
        }

        $yaInscrito = Inscripcion::where('estudiante_id', $estudiante->id)
            ->whereHas('competencia', function ($q) use ($competenciaNueva) {
                $q->where('fecha_competencia', $competenciaNueva->fecha_competencia);
            })->exists();

        if ($yaInscrito) {
            return response()->json([
                'message' => 'El estudiante ya está inscrito en otra competencia para la fecha ' . $competenciaNueva->fecha_competencia
            ], 409);
        }

        // Crear inscripción (sin comprobante y deshabilitado)
        $batch_id = (string) Str::uuid();

        $inscripcion = Inscripcion::create([
            'estudiante_id' => $estudiante->id,
            'competencia_id' => $request->competencia_id,
            'tutor_id' => $request->tutor_id,
            'contacto_email' => $request->contacto_email,
            'contacto_celular' => $request->contacto_celular,
            'nombre_tutor' => $request->nombre_tutor,
            'batch_id' => $batch_id,
            'comprobante_pago' => '',
            'habilitado' => false,
            'created_at' => now(),
        ]);

        $competencia = Competencia::with('areaCategoria.area', 'areaCategoria.categoria')->find($request->competencia_id);

        // Generar PDF
        $ordenPdf = Pdf::loadView('pdf.orden_pago', [
            'inscripcion' => $inscripcion,
            'estudiante' => $estudiante,
            'competencia' => $competencia,
        ])->output();

        $comprobantePdf = Pdf::loadView('pdf.comprobante_pago', [
            'inscripcion' => $inscripcion,
            'competencia' => $competencia,
        ])->output();

        $tempDir = storage_path("app/public/tmp/orden_pago_{$inscripcion->id}");
        if (!file_exists($tempDir)) {
            mkdir($tempDir, 0777, true);
        }

        $ordenPath = $tempDir . "/orden_pago_{$inscripcion->id}.pdf";
        $comprobantePath = $tempDir . "/comprobante_pago_{$inscripcion->id}.pdf";

        file_put_contents($ordenPath, $ordenPdf);
        file_put_contents($comprobantePath, $comprobantePdf);

        $zipFileName = "documentos_inscripcion_{$inscripcion->id}.zip";
        $zipPath = storage_path("app/$zipFileName");

        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            $zip->addFile($ordenPath, basename($ordenPath));
            $zip->addFile($comprobantePath, basename($comprobantePath));
            $zip->close();
        }

        unlink($ordenPath);
        unlink($comprobantePath);
        rmdir($tempDir);

        return response()->download($zipPath)->deleteFileAfterSend(true);
    }
}
