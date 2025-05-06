<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use  App\Models\Area;
use App\Models\AreaCategoria;
use App\Models\Categoria;
use App\Models\Competencia;
class CompetenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->validate([
            'areas' => 'required|array',
            'areas.*.name' => 'required|string|max:255',
            'categorias'=> 'required|array',
            'categorias.*.name'=> 'required|string',
        ]);

        try {
            foreach ($data['areas'] as $areaData) {
                $area = Area::updateOrCreate(
                    ['nombre' => $areaData['name']],
                    [
                        'created_at' => now(),
                        'updated_at' => now(), 
                    ]
                );
            }

            foreach ($data['categorias'] as $categoriaData) {
                $categoria = Categoria::updateOrCreate(
                    ['nombre' => $areaData['name']],
                    [
                        'created_at' => now(),
                        'updated_at' => now(), 
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(): JsonResponse
    {  
        $datos = DB::table('areas')
    ->join('area_categoria', 'areas.id', '=', 'area_categoria.area_id')
    ->join('categorias', 'area_categoria.categoria_id', '=', 'categorias.id')
    ->join('competencias', 'area_categoria.id', '=', 'competencias.area_categoria_id')
    ->leftJoin('inscripciones', 'competencias.id', '=', 'inscripciones.competencia_id')
    ->select(
        'areas.nombre as area',
        'categorias.nombre as categoria',
        'competencias.nombre as competencia',
        DB::raw('COUNT(inscripciones.id) as cantidad_inscritos')
    )
    ->groupBy(
        'areas.nombre',
        'categorias.nombre',
        'competencias.nombre'
    )
    ->get();

        return response()->json($datos);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
