<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('cost_configurations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('area_id');
            $table->unsignedBigInteger('level_id')->nullable();
            $table->decimal('cost', 10, 2);
            $table->timestamps();
            
            $table->foreign('area_id')->references('id')->on('areas');
            $table->foreign('level_id')->references('id')->on('levels');
        });
    }

    public function down()
    {
        Schema::dropIfExists('cost_configurations');
        Schema::dropIfExists('levels');
        Schema::dropIfExists('areas');
    }
};
