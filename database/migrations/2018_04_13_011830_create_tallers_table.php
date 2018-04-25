<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTallersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('tallers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->nullable(true);
            $table->double('fiscal')->nullable(true);
            $table->string('telefono')->nullable(true);
            $table->string('tarjeta')->nullable(true);
            $table->date('fcaducidad')->nullable(true);
            $table->integer('codigo')->nullable(true);
            $table->integer('pin')->nullable(true);
            $table->date('fnacimiento')->nullable(true);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('tallers');
    }

}
