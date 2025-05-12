<?php

namespace App\Http\Controllers;
use App\Models\Area;
use App\Models\Categoria;
use App\Models\Estudiante;
use App\Models\Inscripcion;
use App\Models\User;
use Illuminate\Http\Request;

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
            $areaCategoria = \DB::table('area_categoria')
                ->where('area_id', $grado['area_id'])
                ->where('categoria_id', $grado['categoria_id'])
                ->first();

            if (!$areaCategoria) {
                return response()->json(['error' => 'Área y categoría no válidas.'], 422);
            }

            $costoTotal += $areaCategoria->costo;

            // Buscar competencia correspondiente
            $competencia = \DB::table('competencias')
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
}
