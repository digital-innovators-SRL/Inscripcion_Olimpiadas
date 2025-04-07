<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use App\Models\CostConfiguration;
use Illuminate\Http\Request;

class InscriptionController extends Controller
{
    public function index()
    {
        $inscriptions = Inscription::with(['area', 'level'])->get();
        return response()->json($inscriptions);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:inscriptions',
            'phone' => 'nullable|string',
            'additional_data' => 'nullable|array',
            'area_id' => 'nullable|exists:areas,id',
            'level_id' => 'nullable|exists:levels,id',
        ]);

        // Calcular costo basado en área y nivel
        if (isset($data['area_id']) && isset($data['level_id'])) {
            $costConfig = CostConfiguration::where('area_id', $data['area_id'])
                ->where('level_id', $data['level_id'])
                ->first();
                
            if ($costConfig) {
                $data['cost'] = $costConfig->cost;
            }
        }

        $inscription = Inscription::create($data);
        return response()->json($inscription, 201);
    }

    public function show($id)
    {
        $inscription = Inscription::with(['area', 'level'])->findOrFail($id);
        return response()->json($inscription);
    }

    public function update(Request $request, $id)
    {
        $inscription = Inscription::findOrFail($id);
        
        $data = $request->validate([
            'name' => 'sometimes|required|string',
            'email' => 'sometimes|required|email|unique:inscriptions,email,'.$id,
            'phone' => 'nullable|string',
            'additional_data' => 'nullable|array',
            'area_id' => 'nullable|exists:areas,id',
            'level_id' => 'nullable|exists:levels,id',
            'status' => 'sometimes|in:pending,approved,rejected',
        ]);

        // Recalcular costo si cambia área o nivel
        if ((isset($data['area_id']) && $data['area_id'] != $inscription->area_id) || 
            (isset($data['level_id']) && $data['level_id'] != $inscription->level_id)) {
            
            $costConfig = CostConfiguration::where('area_id', $data['area_id'] ?? $inscription->area_id)
                ->where('level_id', $data['level_id'] ?? $inscription->level_id)
                ->first();
                
            if ($costConfig) {
                $data['cost'] = $costConfig->cost;
            }
        }

        $inscription->update($data);
        return response()->json($inscription);
    }
}