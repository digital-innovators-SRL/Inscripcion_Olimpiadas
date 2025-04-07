<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscripcionController;
use App\Http\Controllers\RequiredFieldController;
use App\Http\Controllers\CostConfigurationController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\LevelController;

// Campos requeridos
Route::get('/required-fields', [RequiredFieldController::class, 'index']);
Route::post('/required-fields', [RequiredFieldController::class, 'store']);
Route::put('/required-fields/{id}', [RequiredFieldController::class, 'update']);
Route::delete('/required-fields/{id}', [RequiredFieldController::class, 'destroy']);

// Inscripciones
Route::get('/inscriptions', [InscriptionController::class, 'index']);
Route::post('/inscriptions', [InscriptionController::class, 'store']);
Route::get('/inscriptions/{id}', [InscriptionController::class, 'show']);
Route::put('/inscriptions/{id}', [InscriptionController::class, 'update']);

// Áreas
Route::get('/areas', [AreaController::class, 'index']);
Route::post('/areas', [AreaController::class, 'store']);

// Niveles
Route::get('/levels', [LevelController::class, 'index']);
Route::post('/levels', [LevelController::class, 'store']);

// Configuración de costos
Route::get('/cost-configurations', [CostConfigurationController::class, 'index']);
Route::post('/cost-configurations', [CostConfigurationController::class, 'store']);
Route::delete('/cost-configurations/{id}', [CostConfigurationController::class, 'destroy']);
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


