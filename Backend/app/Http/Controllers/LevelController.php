<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    public function index()
    {
        $levels = Level::all();
        return response()->json($levels);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|unique:levels',
        ]);

        $level = Level::create($data);
        return response()->json($level, 201);
    }
}
