<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AreasCategoriasGradosSeeder extends Seeder
{
    public function run()
    {
        $now = Carbon::now();

        // === CATEGORÍAS ===
        $categorias = [
            '3P', '4P', '5P', '6P',
            '1S', '2S', '3S', '4S', '5S', '6S',
            'Guacamayo', 'Guanaco', 'Londra', 'Jucumari', 'Bufo', 'Puma',
            'Primer Nivel', 'Segundo Nivel', 'Tercer Nivel', 'Cuarto Nivel', 'Quinto Nivel', 'Sexto Nivel',
            'Builders P', 'Builders S', 'Lego P', 'Lego S'
        ];

        foreach ($categorias as $cat) {
            DB::table('categorias')->updateOrInsert(
                ['nombre' => $cat],
                ['created_at' => $now, 'updated_at' => $now]
            );
        }

        // === ÁREAS ===
        $areas = [
            ['nombre' => 'ASTRONOMÍA - ASTROFÍSICA', 'descripcion' => 'Área de Astronomía', 'costo' => 50, 'max_estudiantes' => 100],
            ['nombre' => 'BIOLOGÍA', 'descripcion' => 'Área de Biología', 'costo' => 40, 'max_estudiantes' => 80],
            ['nombre' => 'FÍSICA', 'descripcion' => 'Área de Física', 'costo' => 45, 'max_estudiantes' => 80],
            ['nombre' => 'INFORMÁTICA', 'descripcion' => 'Área de Informática', 'costo' => 60, 'max_estudiantes' => 90],
            ['nombre' => 'MATEMÁTICAS', 'descripcion' => 'Área de Matemáticas', 'costo' => 55, 'max_estudiantes' => 100],
            ['nombre' => 'QUÍMICA', 'descripcion' => 'Área de Química', 'costo' => 50, 'max_estudiantes' => 70],
            ['nombre' => 'ROBÓTICA', 'descripcion' => 'Área de Robótica', 'costo' => 70, 'max_estudiantes' => 50],
        ];

        foreach ($areas as $area) {
            DB::table('areas')->updateOrInsert(
                ['nombre' => $area['nombre']],
                [...$area, 'created_at' => $now, 'updated_at' => $now]
            );
        }

        // Obtener IDs
        $areaMap = DB::table('areas')->pluck('id', 'nombre');
        $categoriaMap = DB::table('categorias')->pluck('id', 'nombre');

        // === ÁREA - CATEGORÍA ===
        $areaCategoria = [
            'ASTRONOMÍA - ASTROFÍSICA' => ['3P', '4P', '5P', '6P', '1S', '2S', '3S', '4S', '5S', '6S'],
            'BIOLOGÍA' => ['2S', '3S', '4S', '5S', '6S'],
            'FÍSICA' => ['4S', '5S', '6S'],
            'INFORMÁTICA' => ['Guacamayo', 'Guanaco', 'Londra', 'Jucumari', 'Bufo', 'Puma'],
            'MATEMÁTICAS' => ['Primer Nivel', 'Segundo Nivel', 'Tercer Nivel', 'Cuarto Nivel', 'Quinto Nivel', 'Sexto Nivel'],
            'QUÍMICA' => ['2S', '3S', '4S', '5S', '6S'],
            'ROBÓTICA' => ['Builders P', 'Builders S', 'Lego P', 'Lego S'],
        ];

        foreach ($areaCategoria as $area => $categoriasAsociadas) {
            foreach ($categoriasAsociadas as $cat) {
                DB::table('area_categoria')->updateOrInsert([
                    'area_id' => $areaMap[$area],
                    'categoria_id' => $categoriaMap[$cat],
                ], [
                    'grado' => $cat,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        // === COMPETENCIAS ===
        $areaCategoriaIds = DB::table('area_categoria')->get();
        foreach ($areaCategoriaIds as $ac) {
            DB::table('competencias')->insert([
                'tutor_id' => 3, // Asegúrate que el usuario con ID 1 sea un tutor válido
                'area_categoria_id' => $ac->id,
                'nombre' => 'Competencia de ' . $ac->id,
                'fecha_competencia' => now()->addWeeks(2),
                'fecha_fin_inscripcion' => now()->addWeek(),
                'max_competidores' => 100,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}
