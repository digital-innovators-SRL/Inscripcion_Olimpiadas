<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Tutor\TutorDashboardController;
use App\Http\Controllers\Tutor\TutorInscripcionController;
use App\Http\Controllers\Organizador\OrganizadorDashboardController;

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

Route::middleware(['auth:api', 'role:Tutor'])->prefix('tutor')->group(function () {
    Route::get('/dashboard', [TutorDashboardController::class, 'index']);
    Route::get('/inscripciones', [TutorInscripcionController::class, 'index']);
    Route::get('/boleta/{id}/pdf', [TutorInscripcionController::class, 'generarBoletaPagoPDF']);
});

Route::middleware(['auth:api', 'role:Organizador'])->get('/organizador/dashboard', [OrganizadorDashboardController::class, 'index']);
