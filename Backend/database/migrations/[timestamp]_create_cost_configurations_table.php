<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostConfigurationsTable extends Migration
{
    public function up()
    {
        Schema::create('cost_configurations', function (Blueprint $table) {
            $table->id();
            $table->string('area'); // O "nivel"
            $table->decimal('cost', 8, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cost_configurations');
    }
}
