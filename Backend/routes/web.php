<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscripcionController;
use App\Http\Controllers\ConfiguracionController;
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

Route::get('/registro', function () {
    return view('RegistrationPage');
});

Route::get('/registroArea', function () {
    return view('RegistrarArea');
});

Route::get('/config', function () {
    return view('ConfigurationPage');
});

Route::get('/showAreas', function () {
    return view('showAreas');
});

Route::post('/inscripcion', [InscripcionController::class, 'inscribir']);

Route::post('/registrar', [ConfiguracionController::class, 'saveConfig']);
Route::get('/getAreas', [ConfiguracionController::class, 'getAreas']);
Route::delete('/deleteArea/{id}', [ConfiguracionController::class, 'deleteArea']);
