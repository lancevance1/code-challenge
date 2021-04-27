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
            $table->longText('url_raw');
            $table->longText('url_full');
            $table->longText('url_regular');
            $table->longText('url_small');
            $table->longText('url_thumb');
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
        // Schema::table('media', function (Blueprint $table) {

        //     $table->dropForeign('media_user_id_foreign');
        // });
        Schema::drop('media');
    }
}
