<?php

namespace App\Http\Controllers\Tutor;

use App\Http\Controllers\Controller;
use App\Models\Inscripcion;
use Illuminate\Support\Facades\Auth;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Str;


class TutorInscripcionController extends Controller
{
    public function index()
    {
        $tutorId = Auth::id();

        $inscripciones = Inscripcion::with([
            'estudiante',
            'competencia.areaCategoria.area',
            'competencia.areaCategoria.categoria',
        ])
        ->where('tutor_id', $tutorId)
        ->get();

        return response()->json([
            'success' => true,
            'data' => $inscripciones,
        ]);
    }

    public function generarBoletaPagoPDF($id)
    {
        $tutorId = Auth::id();

        $inscripcion = Inscripcion::with([
            'estudiante',
            'competencia.areaCategoria.area',
            'competencia.areaCategoria.categoria',
        ])->where('id', $id)
        ->where('tutor_id', $tutorId)
        ->firstOrFail();

        $pdf = Pdf::loadView('pdf.boleta', compact('inscripcion'));
        return $pdf->download('boleta_de_pago_ORD-' . str_pad($inscripcion->id, 4, '0', STR_PAD_LEFT) . '.pdf');
    }
}
