<?php

namespace App\Http\Controllers\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TutorDashboardController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Bienvenido Tutor']);
    }

    public function obtenerEstudiantes(){
        $tutorId = Auth::id();
        $inscripciones = DB::table('inscripciones')
    ->join('estudiantes', 'inscripciones.estudiante_id', '=', 'estudiantes.id')
    ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
    ->join('area_categoria', 'competencias.area_categoria_id', '=', 'area_categoria.id')
    ->join('areas', 'area_categoria.area_id', '=', 'areas.id')
    ->join('categorias', 'area_categoria.categoria_id', '=', 'categorias.id')
    ->join('users as tutores', 'inscripciones.tutor_id', '=', 'tutores.id')
    ->where('tutores.id',$tutorId)
    ->select(
        //'inscripciones.estudiante_id',
        DB::raw('MIN(inscripciones.id) as id_Inscripcion'),
        'estudiantes.nombres',
        'estudiantes.apellidos',
        'areas.nombre as area',
        'categorias.nombre as categoria',
        'inscripciones.created_at'
    )
    ->groupBy(
        //'inscripciones.estudiante_id',
        'inscripciones.competencia_id',
        'estudiantes.nombres',
        'estudiantes.apellidos',
        'areas.nombre',
        'categorias.nombre',
        'inscripciones.created_at'
    )
    ->get();



        return response()->json([
            'success' => true,
            'data' => $inscripciones,
        ]);

    }
}
