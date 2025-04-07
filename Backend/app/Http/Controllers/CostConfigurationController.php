<?php

namespace App\Http\Controllers;

use App\Models\CostConfiguration;
use App\Models\Area;
use App\Models\Level;
use Illuminate\Http\Request;

class CostConfigurationController extends Controller
{
    public function index()
    {
        $configs = CostConfiguration::with(['area', 'level'])->get();
        return response()->json($configs);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'area_id' => 'required|exists:areas,id',
            'level_id' => 'required|exists:levels,id',
            'cost' => 'required|numeric|min:0'
        ]);

        // Actualizar o crear configuración
        $config = CostConfiguration::updateOrCreate(
            [
                'area_id' => $data['area_id'],
                'level_id' => $data['level_id'],
            ],
            ['cost' => $data['cost']]
        );

        return response()->json($config->load(['area', 'level']), 201);
    }

    public function destroy($id)
    {
        $config = CostConfiguration::findOrFail($id);
        $config->delete();
        return response()->json(null, 204);
    }
}