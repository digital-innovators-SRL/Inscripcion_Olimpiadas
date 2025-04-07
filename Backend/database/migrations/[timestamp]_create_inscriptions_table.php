<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('inscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->json('additional_data')->nullable(); // Datos dinámicos
            $table->unsignedBigInteger('area_id')->nullable();
            $table->unsignedBigInteger('level_id')->nullable();
            $table->decimal('cost', 10, 2)->default(0);
            $table->string('status')->default('pending'); // pending, approved, rejected
            $table->timestamps();
            
            // Si tienes tablas de áreas y niveles, podrías agregar foreign keys
            // $table->foreign('area_id')->references('id')->on('areas');
            // $table->foreign('level_id')->references('id')->on('levels');
        });
    }

    public function down()
    {
        Schema::dropIfExists('inscriptions');
    }
};
