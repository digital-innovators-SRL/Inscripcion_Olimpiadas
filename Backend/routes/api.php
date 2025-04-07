<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscripcionController;
use App\Http\Controllers\RequiredFieldController;
use App\Http\Controllers\CostConfigurationController;

Route::get('/required-fields', [RequiredFieldController::class, 'index']);
Route::post('/required-fields', [RequiredFieldController::class, 'store']);
Route::put('/required-fields/{id}', [RequiredFieldController::class, 'update']);

Route::post('/inscriptions', [InscriptionController::class, 'store']);

Route::get('/cost-configurations', [CostConfigurationController::class, 'index']);
Route::post('/cost-configurations', [CostConfigurationController::class, 'store']);

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


