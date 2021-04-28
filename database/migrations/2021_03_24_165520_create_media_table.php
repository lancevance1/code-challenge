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
            $table->bigIncrements('id');
            // $table->uuid('id');
            $table->string('imageId');
            $table->json('urls');
            $table->string('title')->nullable();
            $table->string('altText')->nullable();
            $table->integer('width');
            $table->integer('height');
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
        // Schema::table('media', function (Blueprint $table) {

        //     $table->dropForeign('media_user_id_foreign');
        // });
        Schema::drop('media');
    }
}
