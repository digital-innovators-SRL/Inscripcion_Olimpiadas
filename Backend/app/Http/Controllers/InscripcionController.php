<?php


namespace App\Http\Controllers;

use App\Imports\InscripcionImport;
use App\Models\Area;
use App\Models\Categoria;
use App\Models\Estudiante;
use App\Models\Tutor;
use App\Models\Inscripcion;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\AreaCompetencia;
use App\Models\Competencia;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use ZipArchive;


class InscripcionController extends Controller
{
    public function index()
    {
        return Inscripcion::with(['estudiante', 'competencia', 'tutor'])->get();
    }

    public function store(Request $request)
    {
        // Validar estructura general
        $request->validate([
            'estudiante' => 'required|array',
            'tutor' => 'required|array',
            'grados' => 'required|array|min:1',
            'grados.*.area_id' => 'required|exists:areas,id',
            'grados.*.categoria_id' => 'required|exists:categorias,id',
            'contacto_email' => 'required|email',
            'contacto_celular' => 'required|string|max:20',
            'nombre_tutor' => 'required|string|max:255',
        ]);

        // Crear estudiante
        $estudiante = Estudiante::create($request->estudiante);

        // Crear tutor
        $tutor = User::create([
            'name' => $request->tutor['nombre'],
            'email' => $request->tutor['email'],
            'telefono' => $request->tutor['telefono'],
            'relacion' => $request->tutor['relacion'],
            'password' => bcrypt('temporal123'), // o autogenerado
            'rol' => 'Tutor'
        ]);

        $costoTotal = 0;
        $competencia_id = null;

        // Asumimos una inscripción por estudiante por tutor (pero puede tener múltiples grados)
        foreach ($request->grados as $grado) {
            $areaCategoria = DB::table('area_categoria')
                ->where('area_id', $grado['area_id'])
                ->where('categoria_id', $grado['categoria_id'])
                ->first();

            if (!$areaCategoria) {
                return response()->json(['error' => 'Área y categoría no válidas.'], 422);
            }

            $costoTotal += $areaCategoria->costo;

            // Buscar competencia correspondiente
            $competencia = DB::table('competencias')
                ->where('area_categoria_id', $areaCategoria->id)
                ->first();

            if (!$competencia) {
                return response()->json(['error' => 'No se encontró una competencia para esta área y categoría.'], 404);
            }

            $competencia_id = $competencia->id;

            // Crear inscripción por cada grado
            $inscripcion = Inscripcion::create([
                'estudiante_id' => $estudiante->id,
                'competencia_id' => $competencia_id,
                'tutor_id' => $tutor->id,
                'contacto_email' => $request->contacto_email,
                'contacto_celular' => $request->contacto_celular,
                'nombre_tutor' => $request->nombre_tutor,
                'comprobante_pago' => null,
                'habilitado' => false,
                'created_at' => now(),
            ]);

            // (Opcional) Insertar en tabla pivote si deseas registrar la selección exacta de grado
            // DB::table('inscripcion_grado')->insert([
            //     'inscripcion_id' => $inscripcion->id,
            //     'area_id' => $grado['area_id'],
            //     'categoria_id' => $grado['categoria_id'],
            // ]);
        }

        return response()->json([
            'message' => 'Inscripción completada',
            'costo_total' => $costoTotal,
        ]);
    }
    public function show($id)
    {
        return Inscripcion::with(['estudiante', 'competencia', 'tutor'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $inscripcion = Inscripcion::findOrFail($id);

        $inscripcion->update($request->only([
            'contacto_email',
            'contacto_celular',
            'nombre_tutor',
            'comprobante_pago',
            'habilitado',
        ]));

        return response()->json($inscripcion);
    }

    public function destroy($id)
    {
        $inscripcion = Inscripcion::findOrFail($id);
        $inscripcion->delete();

        return response()->json(['message' => 'Inscripción eliminada.']);
    }

    /*public function excelStore(Request $request){
        try{
        $file = $request->file("import_file");
        Excel::import(new InscripcionImport, $file);
        return response()->json(['message' => 'importacion correcta']);
        }catch(\Exception){
            return response()->json(['message' => 'importacion incorrecta']);
        }
    }*/

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

        try {
            Excel::import(
                new InscripcionImport(
                    $request->competencia_id,
                    auth()->id(),
                    $request->user()->email,
                    $request->user()->celular,
                    $request->user()->name
                ),
                $request->file('archivo')
            );

            return response()->json(['message' => 'Importación completada exitosamente.']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error durante la importación',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function generarPDFMasivo($competencia_id)
    {
        $tutor_id = auth()->id();

        // Buscar inscripciones del tutor para esa competencia
        $inscripciones = Inscripcion::with(['estudiante', 'competencia.areaCategoria.area', 'competencia.areaCategoria.categoria'])
            ->where('tutor_id', $tutor_id)
            ->where('competencia_id', $competencia_id)
            ->get();

        if ($inscripciones->isEmpty()) {
            return response()->json(['message' => 'No hay inscripciones registradas.'], 404);
        }

        // Crear carpeta temporal
        $zipFileName = "ordenes_pago_{$competencia_id}.zip";
        $zipPath = storage_path("app/public/tmp/$zipFileName");
        $tmpDir = storage_path("app/public/tmp/ordenes_$competencia_id");

        if (!file_exists($tmpDir)) {
            mkdir($tmpDir, 0777, true);
        }

        // Generar PDFs
        foreach ($inscripciones as $inscripcion) {
            $pdf = Pdf::loadView('pdf.orden_pago', [
                'inscripcion' => $inscripcion,
                'estudiante' => $inscripcion->estudiante,
                'competencia' => $inscripcion->competencia,
            ]);

            $pdf->save("$tmpDir/orden_pago_{$inscripcion->id}.pdf");
        }

        // Crear ZIP
        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE) === TRUE) {
            foreach (glob("$tmpDir/*.pdf") as $file) {
                $zip->addFile($file, basename($file));
            }
            $zip->close();
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
            $request->validate([
                'estudiante' => 'required|array',
                'estudiante.nombres' => 'required|string',
                'estudiante.apellidos' => 'required|string',
                'estudiante.ci' => 'required|string',
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

            // Crear inscripción (sin comprobante y deshabilitado)
            $inscripcion = Inscripcion::create([
                'estudiante_id' => $estudiante->id,
                'competencia_id' => $request->competencia_id,
                'tutor_id' => Auth::id(),
                'contacto_email' => $request->contacto_email,
                'contacto_celular' => $request->contacto_celular,
                'nombre_tutor' => $request->nombre_tutor,
                'comprobante_pago' => '',
                'habilitado' => false,
                'created_at' => now(),
            ]);

            // ✅ Cargar competencia correctamente con relaciones
            $competencia = Competencia::with('areaCategoria.area', 'areaCategoria.categoria')->find($request->competencia_id);

            // Generar PDF
            $pdf = Pdf::loadView('pdf.orden_pago', [
                'inscripcion' => $inscripcion,
                'estudiante' => $estudiante,
                'competencia' => $competencia,
            ]);

            return $pdf->download("orden_pago_{$inscripcion->id}.pdf");
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
}

