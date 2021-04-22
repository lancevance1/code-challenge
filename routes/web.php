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

use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\MediaController;
use App\Http\Controllers\Web\SearchController;

// header('Access-Control-Allow-Headers: *');


// Auth::routes();
Route::get('/', function () {
    return redirect('/home');
});


Route::get('search', [SearchController::class, 'index'])->name('search');;
Route::get('home', [HomeController::class, 'index'])->name('home.index');
// Route::get('media', [MediaController::class, 'index']);
Route::resource('media', 'Web\MediaController');
// Route::get('media', [MediaController::class, 'show'])->name('media.show');
