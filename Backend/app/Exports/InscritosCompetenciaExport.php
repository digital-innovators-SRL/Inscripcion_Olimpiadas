<?php

namespace App\Exports;

use App\Models\Inscripcion;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class InscritosCompetenciaExport implements FromCollection, WithHeadings
{
    protected $competencia_id;

    public function __construct($competencia_id)
    {
        $this->competencia_id = $competencia_id;
    }

    public function collection()
    {
        return Inscripcion::with(['estudiante', 'competencia.areaCategoria.area', 'competencia.areaCategoria.categoria', 'tutor'])
            ->where('competencia_id', $this->competencia_id)
            ->get()
            ->map(function ($inscripcion) {
                return [
                    'ID' => $inscripcion->id,
                    'Estudiante' => $inscripcion->estudiante->nombres . ' ' . $inscripcion->estudiante->apellidos,
                    'CI' => $inscripcion->estudiante->ci,
                    'Email' => $inscripcion->estudiante->email,
                    'Curso' => $inscripcion->estudiante->curso,
                    'Colegio' => $inscripcion->estudiante->colegio,
                    'Departamento' => $inscripcion->estudiante->departamento,
                    'Provincia' => $inscripcion->estudiante->provincia,
                    'Competencia' => $inscripcion->competencia->nombre,
                    'Área' => $inscripcion->competencia->areaCategoria->area->nombre ?? '',
                    'Categoría' => $inscripcion->competencia->areaCategoria->categoria->nombre ?? '',
                    'Fecha competencia' => $inscripcion->competencia->fecha_competencia,
                    'Tutor' => $inscripcion->tutor->name,
                    'Celular' => $inscripcion->contacto_celular,
                    'Email Contacto' => $inscripcion->contacto_email,
                    'Habilitado' => $inscripcion->habilitado ? 'Sí' : 'No',
                ];
            });
    }

    public function headings(): array
    {
        return [
            'ID', 'Estudiante', 'CI', 'Email', 'Curso', 'Colegio', 'Departamento', 'Provincia',
            'Competencia', 'Área', 'Categoría', 'Fecha competencia', 'Tutor', 'Celular', 'Email Contacto', 'Habilitado'
        ];
    }
}
