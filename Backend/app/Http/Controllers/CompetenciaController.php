<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\AreaCategoria;
use App\Models\Categoria;
use App\Models\Competencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function crearCompetencia(Request $request)
    {
         $request->validate([
            'areas' => 'required|array',
            'areas.*.name' => 'required|string',
            'areas.*.cost' => 'required|numeric',
            'areas.*.category' => 'required|string',
            'areas.*.grade_level' => 'required|string',
            'areas.*.max_students' => 'nullable|integer',
            //'areas.*.description' => 'nullable|string',
        ]);
        DB::transaction(function () use ($request) {
    foreach ($request->areas as $data) {
        // 1. Buscar o crear el área
        $area = Area::firstOrCreate([
            'nombre' => $data['name'],
        ]);

        // 2. Buscar o crear la categoría
        $categoria = Categoria::firstOrCreate([
            'nombre' => $data['category'],
        ]);

        // 3. Buscar o crear el registro en area_categoria
        $areaCategoria = AreaCategoria::firstOrCreate([
            'area_id' => $area->id,
            'categoria_id' => $categoria->id,
            'grado' => $data['grade_level'],
        ]);

        // 4. Crear la competencia (si estás registrando también desde acá)
        $competencia = new Competencia();
        $competencia->tutor_id = 1; // o como estés obteniendo el tutor
        $competencia->area_categoria_id = $areaCategoria->id;
        $competencia->nombre = $data['name']. ' - ' . $data['category'] . ' - ' . $data['grade_level'];
        $competencia->fecha_competencia = $data['competition_date'] ?? now();
        $competencia->fecha_fin_inscripcion = $data['end_registration'] ?? now()->addDays(7);
        $competencia->max_competidores = $data['max_students'];
        $competencia->monto = $data['cost'];
        $competencia->save();
    }
});
        return response()->json(['message' => 'Competencias creadas con éxito'], 201);
    }
}
