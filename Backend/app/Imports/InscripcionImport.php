<?php

namespace App\Imports;
use Illuminate\Support\Facades\DB;
use App\Models\Estudiante;
use App\Models\Inscripcion;
use App\Models\Competencia;
use App\Models\User;
use App\Models\Area;
use App\Models\Categoria;
use App\Models\AreaCategoria;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class InscripcionImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    public function model(array $row)
    {
        // 1. Crear o buscar estudiante
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

        // 2. Crear o buscar tutor
        $tutor = User::firstOrCreate(
            ['name' => $row['tutor']],
            [
                'email' => Str::slug($row['tutor']) . '@default.com',
                'password' => bcrypt('password123'),
                'celular' => $row['contacto_celular'],
                'role' => 'tutor',
            ]
        );

        // 3. Crear o buscar área
        $area = Area::firstOrCreate(['nombre' => $row['area']]);

        // 4. Crear o buscar categoría
        $categoria = Categoria::firstOrCreate(['nombre' => $row['categoria']]);

        // 5. Crear o buscar area_categoria
        $areaCategoria = AreaCategoria::firstOrCreate(
            [
                'area_id' => $area->id,
                'categoria_id' => $categoria->id
            ],
            [
                'grado' => $row['curso']
            ]
        );

        // 6. Crear o buscar competencia
        $competencia = Competencia::firstOrCreate(
            [
                'nombre' => $row['competencia'],
                'area_categoria_id' => $areaCategoria->id
            ],
            [
                'tutor_id' => $tutor->id,
                'fecha_competencia' => now()->addDays(30),
                'fecha_fin_inscripcion' => now()->addDays(15),
                'max_competidores' => 50
            ]
        );

        // 7. Crear inscripción
        return new Inscripcion([
            'estudiante_id' => $estudiante->id,
            'competencia_id' => $competencia->id,
            'tutor_id' => $tutor->id,
            'contacto_email' => $row['contacto_email'],
            'contacto_celular' => $row['contacto_celular'],
            'nombre_tutor' => $tutor->name,
            'comprobante_pago' => '',
            'habilitado' => 0,
        ]);
    }

    public function batchSize(): int
    {
        return 4000;
    }

    public function chunkSize(): int
    {
        return 4000;
    }
}
