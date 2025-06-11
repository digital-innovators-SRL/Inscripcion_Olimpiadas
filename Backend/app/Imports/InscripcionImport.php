<?php

namespace App\Imports;

use App\Models\Estudiante;
use App\Models\Inscripcion;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class InscripcionImport implements ToCollection, WithHeadingRow
{
    protected $competencia_id;
    protected $tutor_id;
    protected $contacto_email;
    protected $contacto_celular;
    protected $nombre_tutor;

    public function __construct($competencia_id, $tutor_id, $contacto_email, $contacto_celular, $nombre_tutor)
    {
        $this->competencia_id = $competencia_id;
        $this->tutor_id = $tutor_id;
        $this->contacto_email = $contacto_email;
        $this->contacto_celular = $contacto_celular;
        $this->nombre_tutor = $nombre_tutor;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // Validar campos requeridos
            if (
                empty($row['nombres']) ||
                empty($row['apellidos']) ||
                empty($row['ci']) ||
                empty($row['fecha_de_nacimiento']) ||
                empty($row['email']) ||
                empty($row['colegio']) ||
                empty($row['curso']) ||
                empty($row['departamento']) ||
                empty($row['provincia'])
            ) {
                continue; // Saltar fila incompleta
            }

            // Crear o buscar estudiante
            $estudiante = Estudiante::firstOrCreate(
                ['ci' => $row['ci']],
                [
                    'nombres' => $row['nombres'],
                    'apellidos' => $row['apellidos'],
                    'email' => $row['email'],
                    'fecha_nacimiento' => Carbon::parse($row['fecha_de_nacimiento'])->format('Y-m-d'),
                    'colegio' => $row['colegio'],
                    'curso' => $row['curso'],
                    'departamento' => $row['departamento'],
                    'provincia' => $row['provincia'],
                ]
            );

            // Verificar si ya está inscrito en esta competencia
            $yaInscrito = Inscripcion::where('estudiante_id', $estudiante->id)
                ->where('competencia_id', $this->competencia_id)
                ->exists();

            if ($yaInscrito) {
                continue; // Saltar duplicado
            }

            // Crear inscripción
            Inscripcion::create([
                'estudiante_id' => $estudiante->id,
                'competencia_id' => $this->competencia_id,
                'tutor_id' => $this->tutor_id,
                'contacto_email' => $this->contacto_email,
                'contacto_celular' => $this->contacto_celular,
                'nombre_tutor' => $this->nombre_tutor,
                'comprobante_pago' => '',
                'habilitado' => false,
                'created_at' => now(),
            ]);
        }
    }
}
