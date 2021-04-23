<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            // $table->bigIncrements('id');
            $table->uuid('id');
            $table->string('imageId');
            $table->string('title')->nullable();
            $table->string('altText')->nullable();
             $table->unsignedBigInteger('user_id')->nullable();
             $table->foreign('user_id')
             ->references('id')->on('users');

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
}
