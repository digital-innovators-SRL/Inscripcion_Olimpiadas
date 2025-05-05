<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGradosToAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::table('areas', function (Blueprint $table) {
        $table->json('grados')->nullable();
    });
}

public function down()
{
    Schema::table('areas', function (Blueprint $table) {
        $table->dropColumn('grados');
    });
}

}
