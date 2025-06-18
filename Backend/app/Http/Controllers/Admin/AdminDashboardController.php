<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Bienvenido Administrador']);
    }

    public function getDashboardData()
    {
        $id = auth()->user()->id;
        $inscripciones = DB::table('inscripciones')
            ->join('estudiante', 'estudiante.id', '=', 'inscripciones.estudiante_id')
            ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
            ->join('users', 'inscripciones.tutor_id', '=', 'users.id')
            ->join('area_categoria as ac', 'competencias.area_gategoria_id', '=', 'ac.id')
            ->join('areas', 'categorias.area_id', '=', 'areas.id')
            ->join('categorias', 'ac.categoria_id', '=', 'categorias.id')
            ->select(
                'inscripciones.id',
                'estudiante.nombre as estudiante_nombre',
                'estudiante.apellido as estudiante_apellido',
                'competencias.nombre as competencia_nombre',
                'users.name as tutor_nombre',
                'areas.nombre as area_nombre',
                'categorias.nombre as categoria_nombre',
                'inscripciones.estado'
            )
            ->where('inscripciobes.tutor_id', '=', $id)
            ->get();
        return response()->json([
            'inscripciones' => $inscripciones]);

    }
}
