<?php

namespace App\Http\Controllers;

use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    public function index()
    {
        $areas = Area::all();
        return response()->json($areas);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|unique:areas',
        ]);

        $area = Area::create($data);
        return response()->json($area, 201);
    }
}
