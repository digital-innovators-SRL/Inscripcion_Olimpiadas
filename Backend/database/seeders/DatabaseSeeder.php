<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Crear usuarios principales
        User::insert([
            [
                'name' => 'Administrador General',
                'email' => 'admin@example.com',
                'password' => Hash::make('admin123'),
                'celular' => '70000001',
                'role' => 'Administrador',
            ],
            [
                'name' => 'Organizador Regional',
                'email' => 'organizador@example.com',
                'password' => Hash::make('organizador123'),
                'celular' => '70000002',
                'role' => 'Organizador',
            ],
            [
                'name' => 'Tutor Juan Pérez',
                'email' => 'tutor@example.com',
                'password' => Hash::make('tutor123'),
                'celular' => '70000003',
                'role' => 'Tutor',
            ]
        ]);

        // Ejecutar seeder de áreas, categorías, relaciones y competencias
        $this->call([
            AreasCategoriasGradosSeeder::class,
        ]);
    }
}
