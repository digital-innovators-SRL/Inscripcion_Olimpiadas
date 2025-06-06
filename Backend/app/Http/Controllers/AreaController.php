<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Area;
use App\Models\Categoria;


class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
{
    $areas = Area::with(['categorias'])->get();

    $areas->transform(function ($area) {
        // Agrupar grados por categoría
        $categorias = [];

        foreach ($area->categorias as $categoria) {
            $catId = $categoria->id;
            if (!isset($categorias[$catId])) {
                $categorias[$catId] = [
                    'id' => $catId,
                    'nombre' => $categoria->nombre,
                    'grados' => [],
                ];
            }
            // Agregar grado del pivote sin repetir
            if (!in_array($categoria->pivot->grado, $categorias[$catId]['grados'])) {
                $categorias[$catId]['grados'][] = $categoria->pivot->grado;
            }
        }

        return [
            'id' => $area->id,
            'nombre' => $area->nombre,
            'descripcion' => $area->descripcion,
            'costo' => $area->costo,
            'max_estudiantes' => $area->max_estudiantes,
            'categorias' => array_values($categorias), // Para resetear keys numéricos
        ];
    });

    return response()->json($areas);
}


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'nombre' => 'required|string',
        'descripcion' => 'nullable|string',
        'costo' => 'required|numeric',
        'max_estudiantes' => 'required|integer',
        'categorias' => 'required|array',
        'categorias.*.id' => 'required|exists:categorias,id',
        'categorias.*.grados' => 'required|array|min:1',
        'categorias.*.grados.*' => 'required|string', // o integer si tus grados son numéricos
    ]);

    // Crear el área
    $area = Area::create([
        'nombre' => $validated['nombre'],
        'descripcion' => $validated['descripcion'],
        'costo' => $validated['costo'],
        'max_estudiantes' => $validated['max_estudiantes'],
    ]);

    // Registrar en la tabla pivote area_categoria
    foreach ($validated['categorias'] as $cat) {
        foreach ($cat['grados'] as $grado) {
            $area->categorias()->attach($cat['id'], ['grado' => $grado]);
        }
    }

    return response()->json([
        'message' => 'Área registrada correctamente con sus categorías y grados.',
        'area_id' => $area->id,
    ], 201);
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    $validated = $request->validate([
        'nombre' => 'required|string',
        'descripcion' => 'nullable|string',
        'costo' => 'required|numeric',
        'max_estudiantes' => 'required|integer',
        'categorias' => 'required|array',
        'categorias.*.id' => 'required|exists:categorias,id',
        'categorias.*.grados' => 'required|array|min:1',
        'categorias.*.grados.*' => 'required|string',
    ]);

    $area = Area::findOrFail($id);

    // Actualizar datos básicos
    $area->update([
        'nombre' => $validated['nombre'],
        'descripcion' => $validated['descripcion'],
        'costo' => $validated['costo'],
        'max_estudiantes' => $validated['max_estudiantes'],
    ]);

    // Preparar array para sync
    // Ejemplo de $syncData:
    // [
    //    categoria_id => ['grado' => 'valor'],
    //    ...
    // ]
    $syncData = [];

    foreach ($validated['categorias'] as $cat) {
        foreach ($cat['grados'] as $grado) {
            // Si hay varios grados para la misma categoría, no podemos pasar repetidos,
            // así que debemos hacer una entrada por cada grado, pero sync espera un array plana.
            // Por eso, se hace un key compuesto con categoria_id + grado para no perder info.
            // Pero Laravel no soporta ese caso, entonces para múltiples grados por categoría
            // debemos usar detach + attach manualmente.

            // Para simplificar: eliminamos la relación y hacemos attach manualmente después
        }
    }

    // Eliminar todas las relaciones previas
    $area->categorias()->detach();

    // Insertar las nuevas relaciones
    foreach ($validated['categorias'] as $cat) {
        foreach ($cat['grados'] as $grado) {
            $area->categorias()->attach($cat['id'], ['grado' => $grado]);
        }
    }

    return response()->json([
        'message' => 'Área actualizada correctamente con sus categorías y grados.',
        'area_id' => $area->id,
    ]);
}


public function indexForTutor()
{
    $areas = Area::with(['categorias'])->get();

    $areas->transform(function ($area) {
        $categorias = [];

        foreach ($area->categorias as $categoria) {
            $catId = $categoria->id;
            if (!isset($categorias[$catId])) {
                $categorias[$catId] = [
                    'id' => $catId,
                    'nombre' => $categoria->nombre,
                    'grados' => [],
                ];
            }

            if (!in_array($categoria->pivot->grado, $categorias[$catId]['grados'])) {
                $categorias[$catId]['grados'][] = $categoria->pivot->grado;
            }
        }

        return [
            'id' => $area->id,
            'nombre' => $area->nombre,
            'descripcion' => $area->descripcion,
            'costo' => $area->costo,
            'max_estudiantes' => $area->max_estudiantes,
            'categorias' => array_values($categorias),
        ];
    });

    return response()->json($areas);
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $area = Area::findOrFail($id);
        $area->delete();

        return response()->json(['mensaje' => 'Área eliminada con éxito.']);
    }
}
