<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::group(['middleware' => ['auth:api'], 'as' => 'api.'], function () {
//     Route::apiResource('media', 'Api\MediaController');
// });
// Route::apiResource('media', 'Api\MediaController');
Route::group(['middleware' => ['api'], 'as' => 'api.'], function () {
    Route::apiResource('media', 'Api\MediaController');
});
