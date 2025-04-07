<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('required_fields', function (Blueprint $table) {
            $table->id();
            $table->string('field_name');
            $table->string('field_type'); // text, number, email, date, etc.
            $table->boolean('is_required')->default(true);
            $table->integer('order')->default(0); // Para ordenar campos
            $table->string('category')->nullable(); // Categoría del campo (personal, académico, etc.)
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('required_fields');
    }
};