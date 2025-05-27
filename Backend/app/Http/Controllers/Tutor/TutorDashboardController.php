<?php

namespace App\Http\Controllers\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AreaCategoria;
use App\Models\AreasCompetencia;
use App\Models\Inscripcion;

class TutorDashboardController extends Controller
{
    public function getFiltros(Request $request)
    {
        // Código para obtener filtros
        $categorias = AreaCategoria::select('categoria_id')->distinct()->get();
        $areas = AreaCategoria::select('area_id')->distinct()->get();
        $grados = AreaCategoria::select('grado')->distinct()->orderBy('grado')->get();
        $niveles = AreasCompetencia::select('nivel')->distinct()->get();

        return response()->json([
            'categorias' => $categorias,
            'areas' => $areas,
            'grados' => $grados,
            'niveles' => $niveles
        ]);
    }

    public function filtrarInscripciones(Request $request)
    {
        $query = Inscripcion::with(['estudiante', 'areaCategoria', 'areasCompetencia']);

        if ($request->filled('categoria_id')) {
            $query->whereHas('areaCategoria', function ($q) use ($request) {
                $q->where('categoria_id', $request->categoria_id);
            });
        }

        if ($request->filled('area_id')) {
            $query->where('area_id', $request->area_id);
        }

        if ($request->filled('grado')) {
            $query->whereHas('areaCategoria', function ($q) use ($request) {
                $q->where('grado', $request->grado);
            });
        }

        if ($request->filled('nivel')) {
            $query->whereHas('areasCompetencia', function ($q) use ($request) {
                $q->where('nivel', $request->nivel);
            });
        }

        if ($request->filled('estado')) {
            $query->where('estado_pago', $request->estado);
        }

        if ($request->filled('fecha')) {
            $query->whereDate('created_at', $request->fecha);
        }

        $inscripciones = $query->get();

        return response()->json($inscripciones);
    }
}
