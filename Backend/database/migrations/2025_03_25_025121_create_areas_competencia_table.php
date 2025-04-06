<?php
// database/migrations/2024_XX_XX_create_areas_competencia_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAreasCompetenciaTable extends Migration
{
    public function up()
    {
        Schema::create('areas_competencia', function (Blueprint $table) {
            $table->id();
            $table->foreignId('estudiante_id')->constrained('estudiantes')->onDelete('cascade');
            $table->string('area');
            $table->string('nivel'); // Asegúrate de que este campo acepte un solo nivel
            $table->integer('costo')->nullable(); // Añadido: Costo
            $table->boolean('cedula_identidad')->default(false); // Añadido: Cédula de Identidad
            $table->boolean('fecha_nacimiento')->default(false); // Añadido: Fecha de Nacimiento
            $table->boolean('tutor_responsable')->default(false); // Añadido: Tutor Responsable
            $table->boolean('informacion_colegio')->default(false); // Añadido: Información del Colegio
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('areas_competencia');
    }
}
