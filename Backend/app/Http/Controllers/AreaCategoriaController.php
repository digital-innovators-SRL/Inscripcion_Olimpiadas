<?php

namespace App\Http\Controllers;

use App\Models\AreaCategoria;
use Illuminate\Http\Request;

class AreaCategoriaController extends Controller
{
    // Obtener todas las relaciones
    public function index()
{
    $areas = Area::with(['categorias'])->get();

    return $areas->map(function ($area) {
        return [
            'id' => $area->id,
            'nombre' => $area->nombre,
            'descripcion' => $area->descripcion,
            'costo' => $area->costo,
            'max_estudiantes' => $area->max_estudiantes,
            'categorias' => $area->categorias->map(function ($cat) {
                return [
                    'id' => $cat->id,
                    'nombre' => $cat->nombre,
                    'grado' => $cat->pivot->grado,
                ];
            }),
        ];
    });
}

    // Registrar una nueva relación
    public function store(Request $request)
{
    $request->validate([
        'area_id' => 'required|exists:areas,id',
        'categoria_id' => 'required|exists:categorias,id',
        'grado' => 'required|string',
    ]);

    return DB::table('area_categoria')->insert([
        'area_id' => $request->area_id,
        'categoria_id' => $request->categoria_id,
        'grado' => $request->grado,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
}



    // Mostrar una relación específica
    public function show($id)
    {
        $relacion = AreaCategoria::with(['area', 'categoria'])->findOrFail($id);
        return response()->json($relacion);
    }

    // Actualizar una relación existente
    public function update(Request $request, $id)
    {
        $relacion = AreaCategoria::findOrFail($id);

        $validated = $request->validate([
            'area_id' => 'sometimes|exists:areas,id',
            'categoria_id' => 'sometimes|exists:categorias,id',
            'grado' => 'sometimes|string|max:255',
        ]);

        $relacion->update($validated);

        return response()->json([
            'mensaje' => 'Relación actualizada correctamente.',
            'data' => $relacion,
        ]);
    }

    // Eliminar una relación
    public function destroy($id)
    {
        $relacion = AreaCategoria::findOrFail($id);
        $relacion->delete();

        return response()->json(['mensaje' => 'Relación eliminada correctamente.']);
    }
    
}
