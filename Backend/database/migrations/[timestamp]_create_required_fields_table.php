<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequiredFieldsTable extends Migration
{
    public function up()
    {
        Schema::create('required_fields', function (Blueprint $table) {
            $table->id();
            $table->string('field_name'); // Ejemplo: "Nombre", "Email"
            $table->string('field_type'); // Ejemplo: text, number, date
            $table->boolean('is_required')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('required_fields');
    }
}
