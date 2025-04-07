<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInscriptionsTable extends Migration
{
    public function up()
    {
        Schema::create('inscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique(); // Registro único
            $table->json('additional_data')->nullable(); // Datos dinámicos
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inscriptions');
    }
}
