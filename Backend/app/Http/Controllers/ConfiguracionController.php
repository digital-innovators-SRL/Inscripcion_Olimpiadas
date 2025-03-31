<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use App\Models\Area;
use App\Models\AreaCompetencia;

class ConfiguracionController extends Controller
{
    public function saveConfig(Request $request)
    {
        $data = $request->validate([
            'areas' => 'required|array',
            'areas.*.name' => 'required|string|max:255',
            'areas.*.cost' => 'required|numeric|min:0',
            'areas.*.levels' => 'required|string|max:255', // Cambiado a string, no array
            'requiredFields' => 'required|array',
            'requiredFields.*' => 'boolean',
        ]);

        try {
            foreach ($data['areas'] as $areaData) {
                $area = AreaCompetencia::updateOrCreate(
                    ['area' => $areaData['name']],
                    [
                        'estudiante_id' => 1,
                        'costo' => $areaData['cost'],
                        'nivel' => $areaData['levels'], // Solo un nivel, no un array
                        'cedula_identidad' => $data['requiredFields']['cedula_identidad'] ?? false,
                        'fecha_nacimiento' => $data['requiredFields']['fecha_nacimiento'] ?? false,
                        'tutor_responsable' => $data['requiredFields']['tutor_responsable'] ?? false,
                        'informacion_colegio' => $data['requiredFields']['informacion_colegio'] ?? false,
                    ]
                );
            }

            return response()->json(['message' => 'Configuración guardada correctamente'], 200);
        } catch (\Exception $e) {
            return response()->json([
                $e->getMessage() // El mensaje de error de la excepción
                , // El traza de la excepción
            ], 500);
        }
    }

    public function getAreas()
    {
        
        $areas = AreaCompetencia::all();

        
        $areasFormatted = $areas->map(function($area) {
            return [
                'id' => $area->id,
                'name' => $area->area,
                'cost' => $area->costo,
                'levels' => $area->nivel
            ];
        });

        
        return response()->json([
            'areas' => $areasFormatted
        ]);
    }

    public function deleteArea($id)
    {
        $area = AreaCompetencia::find($id);
        if ($area) {
            $area->delete();
            return response()->json(['success' => true], 200);
        }
        return response()->json(['success' => false, 'message' => 'Área no encontrada.'], 404);
    }
}
