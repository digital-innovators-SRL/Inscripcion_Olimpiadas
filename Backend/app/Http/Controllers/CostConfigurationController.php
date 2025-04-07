<?php

namespace App\Http\Controllers;

use App\Models\CostConfiguration;
use Illuminate\Http\Request;

class CostConfigurationController extends Controller
{
    public function index()
    {
        $configs = CostConfiguration::all();
        return response()->json($configs);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'area' => 'required|string',
            'cost' => 'required|numeric'
        ]);

        $config = CostConfiguration::updateOrCreate(
            ['area' => $data['area']],
            ['cost' => $data['cost']]
        );

        return response()->json($config, 201);
    }
}
