<?php

namespace App\Http\Controllers;

use App\Models\AreaCategoria;
use Illuminate\Http\Request;

class AreaCategoriaController extends Controller
{
    // Obtener todas las relaciones
    public function index()
    {
        return response()->json(AreaCategoria::with(['area', 'categoria'])->get());
    }

    // Registrar una nueva relación
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'area_id' => 'required|exists:areas,id',
                'categoria_id' => 'required|exists:categorias,id',
                'nombre_grado' => 'required|string|max:255',
            ]);

            $areaCategoria = AreaCategoria::create($validated);

            return response()->json($areaCategoria, 201);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error interno',
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ], 500);
        }
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
