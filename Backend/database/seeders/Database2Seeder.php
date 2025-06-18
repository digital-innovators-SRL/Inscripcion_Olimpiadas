<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Database2Seeder extends Seeder
{
public function run()
    {
        
        // Crear usuarios (tutores)
        for ($i = 1; $i <= 3; $i++) {
            DB::table('users')->insert([
                'name' => "Tutor $i",
                'email' => "tutor$i@example.com",
                'password' => bcrypt('password'),
                'celular' => '777888999',
                'role' => 'tutor',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Crear estudiantes
        $estudianteIds = [];
        for ($i = 1; $i <= 10; $i++) {
            $estudianteIds[] = DB::table('estudiantes')->insertGetId([
                'email' => "estudiante$i@example.com",
                'apellidos' => 'Apellido' . $i,
                'nombres' => 'Nombre' . $i,
                'ci' => 'CI' . str_pad($i, 4, '0', STR_PAD_LEFT),
                'fecha_nacimiento' => Carbon::now()->subYears(10 + $i)->toDateString(),
                'colegio' => 'Colegio X',
                'curso' => 'Curso ' . $i,
                'departamento' => 'Departamento Y',
                'provincia' => 'Provincia Z',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        
        // Crear áreas
        $areaIds = [];
        foreach (['Matemáticas', 'Ciencias', 'Tecnología'] as $area) {
            $areaIds[] = DB::table('areas')->insertGetId([
                'nombre' => $area,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Crear categorías
        $categoriaIds = [];
        foreach (['Primaria', 'Secundaria', 'Preparatoria'] as $categoria) {
            $categoriaIds[] = DB::table('categorias')->insertGetId([
                'nombre' => $categoria,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Crear área_categoria (pivote)
        $areaCategoriaIds = [];
        foreach ($areaIds as $areaId) {
            foreach ($categoriaIds as $categoriaId) {
                $areaCategoriaIds[] = DB::table('area_categoria')->insertGetId([
                    'area_id' => $areaId,
                    'categoria_id' => $categoriaId,
                    'grado' => 'A',
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // Crear competencias
        foreach ($areaCategoriaIds as $areaCategoriaId) {
            DB::table('competencias')->insert([
                'tutor_id' => rand(4, 3),
                'area_categoria_id' => $areaCategoriaId,
                'nombre' => 'Competencia ' . Str::random(5),
                'fecha_competencia' => Carbon::now()->addDays(30),
                'fecha_fin_inscripcion' => Carbon::now()->addDays(20),
                'max_competidores' => 100,
                'monto' => rand(20, 100),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Crear inscripciones
        foreach ($estudianteIds as $estudianteId) {
            DB::table('inscripciones')->insert([
                'estudiante_id' => $estudianteId,
                'competencia_id' => rand(1, count($areaCategoriaIds)),
                'tutor_id' => 3,
                'contacto_email' => "contacto$estudianteId@example.com",
                'contacto_celular' => '666555444',
                'nombre_tutor' => 'Tutor Apellido',
                'comprobante_pago' => 'Pago realizado',
                'habilitado' => 1,
                'created_at' => now(),
            ]);
        }
    }
}
