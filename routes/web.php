<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

header('Access-Control-Allow-Headers: *');


Auth::routes();
Route::get('/', function () {
    return view('welcome');
});


Route::get('/search', 'SearchController@index');
Route::get('/home', 'HomeController@index')->name('home.index');
Route::resources([
    'media' => 'MediaController',
]);
