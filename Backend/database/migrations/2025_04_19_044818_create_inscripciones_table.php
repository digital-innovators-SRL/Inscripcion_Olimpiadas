<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInscripcionesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('inscripciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('estudiante_id');
            $table->unsignedBigInteger('competencia_id');
            $table->unsignedBigInteger('tutor_id');
            $table->string('contacto_email', 150);
            $table->string('contacto_celular', 20)->nullable();
            $table->string('nombre_tutor', 100);
            $table->text('comprobante_pago'); // puede ser base64 o URL
            $table->boolean('habilitado')->default(false);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('estudiante_id')->references('id')->on('estudiantes')->onDelete('cascade');
            $table->foreign('competencia_id')->references('id')->on('competencias')->onDelete('cascade');
            $table->foreign('tutor_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('inscripciones');
    }
}
