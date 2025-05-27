<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposToAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::table('areas', function (Blueprint $table) {
        if (!Schema::hasColumn('areas', 'descripcion')) {
            $table->text('descripcion')->nullable();
        }

        if (!Schema::hasColumn('areas', 'costo')) {
            $table->decimal('costo', 8, 2);
        }

        if (!Schema::hasColumn('areas', 'max_estudiantes')) {
            $table->integer('max_estudiantes');
        }
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('areas', function (Blueprint $table) {
            //
        });
    }
}
