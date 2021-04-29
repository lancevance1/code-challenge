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

use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\Web\UserController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\MediaController;
use App\Http\Controllers\Web\SearchController;

// header('Access-Control-Allow-Headers: *');


Route::get('login', [LoginController::class, 'showLoginForm'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [LoginController::class, 'login'])
    ->name('login.attempt')
    ->middleware('guest');

Route::post('logout', [LoginController::class, 'logout'])
    ->name('logout');

Route::get('/', function () {
    return redirect('/home');
});


Route::get('search', [SearchController::class, 'index'])->name('search');
Route::get('home', [HomeController::class, 'index'])->name('home.index');
 Route::get('media', [MediaController::class, 'index'])->middleware('auth');;
Route::get('media/create', [MediaController::class, 'create'])->name('media.create');
Route::get('media/{medium}/edit', [MediaController::class, 'edit'])->name('media.edit')->middleware('auth');;
Route::get('users/{user}/edit', [UserController::class, 'edit'])->name('user.edit')->middleware('auth');;

