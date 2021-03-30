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
    return redirect('/home');
});


Route::get('search', 'SearchController@index');
Route::get('/home', 'HomeController@index')->name('home.index');
Route::get('/media', 'MediaController@index');
Route::get('media/{media}', 'MediaController@show')->name('media.show');
//Route::get('users/{user}', 'UserController@show')->name('user.show');
//
//Route::resources([
//    'users' => 'UserController',
//
//]);
