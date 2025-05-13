<?php

use App\Http\Controllers\InscripcionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscripcionController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/importar-inscripciones', [InscripcionController::class, 'mostrarFormulario']);
Route::post('/importar-inscripciones', [InscripcionController::class, 'importarExcel']);

Route::get('/inscripciones', [InscripcionController::class, 'index1']);


Route::get('/registro', function () {
    return view('RegistrationPage');
});

Route::get('/registroArea', function () {
    return view('RegistrarArea');
});

Route::post('/inscripcion', [InscripcionController::class, 'inscribir']);

