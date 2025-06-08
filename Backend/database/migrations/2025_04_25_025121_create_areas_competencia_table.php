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
            $table->string('nivel');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('areas_competencia');
    }
}
