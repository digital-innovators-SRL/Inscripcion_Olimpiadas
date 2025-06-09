<?php

namespace App\Http\Controllers\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TutorDashboardController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Bienvenido Tutor']);
    }

       public function getDashboardData()
    {
        $id = auth()->user()->id;
        $inscripciones = DB::table('inscripciones')
            ->join('estudiantes', 'estudiantes.id', '=', 'inscripciones.estudiante_id')
            ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
            ->join('users', 'inscripciones.tutor_id', '=', 'users.id')
            ->join('area_categoria as ac', 'competencias.area_categoria_id', '=', 'ac.id')
            ->join('areas', 'ac.area_id', '=', 'areas.id')
            ->join('categorias', 'ac.categoria_id', '=', 'categorias.id')
            ->select(
                'inscripciones.id',
                'estudiantes.nombres as estudiante_nombre',
                'estudiantes.apellidos as estudiante_apellido',
                //'competencias.nombre as competencia_nombre',
                //'users.name as tutor_nombre',
                'areas.nombre as area_nombre',
               'categorias.nombre as categoria_nombre',
                'inscripciones.habilitado'
            )
            ->where('inscripciones.tutor_id', '=', $id)
            ->get();
        return response()->json([
            'inscripciones' => $inscripciones]);

    }

           public function getAreas()
    {
        $id = auth()->user()->id;
        $inscripciones = DB::table('inscripciones')
            ->join('estudiantes', 'estudiantes.id', '=', 'inscripciones.estudiante_id')
            ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
            ->join('users', 'inscripciones.tutor_id', '=', 'users.id')
            ->join('area_categoria as ac', 'competencias.area_categoria_id', '=', 'ac.id')
            ->join('areas', 'ac.area_id', '=', 'areas.id')
            ->join('categorias', 'ac.categoria_id', '=', 'categorias.id')
            ->select(
                'areas.nombre as area_nombre',
            )
                    ->select('areas.id as area_id', 'areas.nombre')
            ->where('inscripciones.tutor_id', '=', $id)
            ->get();
        return response()->json([
            'inscripciones' => $inscripciones]);

    }

    public function getCategorias()
    {
        $id = auth()->user()->id;
        $inscripciones = DB::table('inscripciones')
            ->join('estudiantes', 'estudiantes.id', '=', 'inscripciones.estudiante_id')
            ->join('competencias', 'inscripciones.competencia_id', '=', 'competencias.id')
            ->join('users', 'inscripciones.tutor_id', '=', 'users.id')
            ->join('area_categoria as ac', 'competencias.area_categoria_id', '=', 'ac.id')
            ->join('areas', 'ac.area_id', '=', 'areas.id')
            ->join('categorias', 'ac.categoria_id', '=', 'categorias.id')
            ->select(
                
                'categorias.nombre as categoria_nombre',
            )
                    ->select('categorias.id as categoria_id', 'categorias.nombre')
            ->where('inscripciones.tutor_id', '=', $id)
            ->get();
        return response()->json([
            'inscripciones' => $inscripciones]);

    }
}
