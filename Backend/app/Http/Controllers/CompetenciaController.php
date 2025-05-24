<?php

namespace App\Http\Controllers;

use App\Models\Competencia;
use Illuminate\Http\Request;

class CompetenciaController extends Controller
{
    // === Para TUTOR ===
    public function index()
    {
        // Devuelve todas las competencias disponibles para inscripción
        $competencias = Competencia::with(['areaCategoria.area', 'areaCategoria.categoria'])->get();
        return response()->json($competencias);
    }

    // === Para ORGANIZADOR ===

    public function store(Request $request)
    {
        $validated = $request->validate([
            'tutor_id' => 'required|exists:users,id',
            'area_categoria_id' => 'required|exists:area_categoria,id',
            'nombre' => 'required|string|max:150',
            'fecha_competencia' => 'required|date',
            'fecha_fin_inscripcion' => 'required|date|before_or_equal:fecha_competencia',
            'max_competidores' => 'required|integer|min:1',
            'monto' => 'required|numeric|min:0',
        ]);

        $competencia = Competencia::create($validated);
        return response()->json($competencia, 201);
    }

    public function show($id)
    {
        $competencia = Competencia::with(['areaCategoria.area', 'areaCategoria.categoria'])->findOrFail($id);
        return response()->json($competencia);
    }

    public function update(Request $request, $id)
    {
        $competencia = Competencia::findOrFail($id);

        $validated = $request->validate([
            'tutor_id' => 'required|exists:users,id',
            'area_categoria_id' => 'required|exists:area_categoria,id',
            'nombre' => 'required|string|max:150',
            'fecha_competencia' => 'required|date',
            'fecha_fin_inscripcion' => 'required|date|before_or_equal:fecha_competencia',
            'max_competidores' => 'required|integer|min:1',
            'monto' => 'required|numeric|min:0',
        ]);

        $competencia->update($validated);
        return response()->json($competencia);
    }
    
    public function destroy($id)
    {
        $competencia = Competencia::findOrFail($id);
        $competencia->delete();

        return response()->json(['message' => 'Competencia eliminada con éxito']);
    }
}
