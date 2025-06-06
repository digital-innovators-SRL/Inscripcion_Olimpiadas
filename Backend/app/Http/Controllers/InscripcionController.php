<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\Categoria;
use App\Models\Estudiante;
use App\Models\Inscripcion;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InscripcionController extends Controller
{
    public function index()
    {
        return Inscripcion::with(['estudiante', 'competencia', 'tutor'])->get();
    }

    public function store(Request $request)
    {
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

        DB::beginTransaction();

        try {
            // Crear o buscar tutor por email para evitar duplicados
            $tutor = User::firstOrCreate(
                ['email' => $request->tutor['email']],
                [
                    'name' => $request->tutor['nombre'],
                    'telefono' => $request->tutor['telefono'],
                    'relacion' => $request->tutor['relacion'],
                    'password' => bcrypt('temporal123'), // Puedes mejorar aquí el password
                    'rol' => 'Tutor',
                ]
            );

            // Crear estudiante
            $estudiante = Estudiante::create($request->estudiante);

            $costoTotal = 0;

            foreach ($request->grados as $grado) {
                $areaCategoria = DB::table('area_categoria')
                    ->where('area_id', $grado['area_id'])
                    ->where('categoria_id', $grado['categoria_id'])
                    ->first();

                if (!$areaCategoria) {
                    DB::rollBack();
                    return response()->json(['error' => 'Área y categoría no válidas.'], 422);
                }

                $costoTotal += $areaCategoria->costo;

                $competencia = DB::table('competencias')
                    ->where('area_categoria_id', $areaCategoria->id)
                    ->first();

                if (!$competencia) {
                    DB::rollBack();
                    return response()->json(['error' => 'No se encontró una competencia para esta área y categoría.'], 404);
                }

                // Validar inscripción duplicada
                $existe = Inscripcion::where('estudiante_id', $estudiante->id)
                    ->where('competencia_id', $competencia->id)
                    ->first();

                if ($existe) {
                    DB::rollBack();
                    return response()->json(['message' => 'Inscripción ya existe para este estudiante y competencia'], 409);
                }

                // Crear inscripción
                Inscripcion::create([
                    'estudiante_id' => $estudiante->id,
                    'competencia_id' => $competencia->id,
                    'tutor_id' => $tutor->id,
                    'contacto_email' => $request->contacto_email,
                    'contacto_celular' => $request->contacto_celular,
                    'nombre_tutor' => $request->nombre_tutor,
                    'comprobante_pago' => null,
                    'habilitado' => false,
                    'created_at' => now(),
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Inscripción completada',
                'costo_total' => $costoTotal,
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Error al registrar la inscripción',
                'details' => $e->getMessage()
            ], 500);
        }
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
