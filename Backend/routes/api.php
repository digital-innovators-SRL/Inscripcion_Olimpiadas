<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Tutor\TutorDashboardController;
use App\Http\Controllers\Organizador\OrganizadorDashboardController;
use App\Http\Controllers\AreaController;


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



Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['jwt.exceptions', 'auth:api'])->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::middleware(['auth:api', 'role:Administrador'])->get('/admin/dashboard', [AdminDashboardController::class, 'index']);
Route::middleware(['auth:api', 'role:Tutor'])->get('/tutor/dashboard', [TutorDashboardController::class, 'index']);
Route::middleware(['auth:api', 'role:Organizador'])->get('/organizador/dashboard', [OrganizadorDashboardController::class, 'index']);

Route::apiResource('areas', AreaController::class);