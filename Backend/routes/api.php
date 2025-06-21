<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Tutor\TutorDashboardController;
use App\Http\Controllers\Tutor\TutorInscripcionController;
use App\Http\Controllers\Organizador\OrganizadorDashboardController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CompetenciaController;
use App\Http\Controllers\AreaCategoriaController;

use App\Http\Controllers\UserController;
use App\Http\Controllers\InscripcionController;
use App\Models\Categoria;

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
Route::post('/login-estudiante', [AuthController::class, 'loginEstudiante']);
Route::post('/register-estudiante', [AuthController::class, 'registerEstudiante']);

Route::middleware(['jwt.exceptions', 'auth:api'])->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::middleware(['jwt.exceptions', 'auth:estudiante'])->group(function () {
    Route::get('/me-estudiante', [AuthController::class, 'meEstudiante']);
    Route::get('/competencias-estudiante', [CompetenciaController::class, 'competenciasEstudiante']);
    Route::post('/inscribirse', [InscripcionController::class, 'inscribirEstudiante']);
});

Route::middleware(['auth:api', 'role:Administrador'])->get('/admin/dashboard', [AdminDashboardController::class, 'index']);

Route::middleware(['auth:api', 'role:Tutor'])->prefix('tutor')->group(function () {
    Route::get('/dashboard', [TutorDashboardController::class, 'index']);
    Route::get('/inscripciones', [TutorInscripcionController::class, 'index']);
    Route::get('/boleta/{id}/pdf', [TutorInscripcionController::class, 'generarBoletaPagoPDF']);
    Route::get('/competencias', [CompetenciaController::class, 'index']);
    Route::get('/categorias', [CategoriaController::class, 'index']);
    Route::get('/areas', [AreaController::class, 'index']);
    Route::post('/ordenPago', [InscripcionController::class, 'obtenerOrdenPago']);
    Route::post('/confirmar-comprobante', [InscripcionController::class, 'confirmarComprobante']);

    Route::get('/importar-inscripciones', [InscripcionController::class, 'mostrarFormulario']);
    Route::post('/importar-inscripciones', [InscripcionController::class, 'importarExcel']);
    Route::get('/ordenes-masivas/{competencia_id}', [InscripcionController::class, 'generarPDFMasivo']);

    Route::get('/getAreas', [TutorDashboardController::class, 'getAreas']);
    Route::get('/getCategorias', [TutorDashboardController::class, 'getCategorias']);
    Route::get('/getDashboardData', [TutorDashboardController::class, 'getDashboardData']);

    Route::get('/getAreas', [TutorDashboardController::class, 'getAreas']);
    Route::get('/getCategorias', [TutorDashboardController::class, 'getCategorias']);
    Route::get('/getDashboardData', [TutorDashboardController::class, 'getDashboardData']);

    Route::get('/importar-inscripciones', [InscripcionController::class, 'mostrarFormulario']);
    Route::post('/importar-inscripciones', [InscripcionController::class, 'importarExcel']);


});

Route::middleware(['auth:api', 'role:Organizador'])->get('/organizador/dashboard', [OrganizadorDashboardController::class, 'index']);

Route::middleware(['jwt.exceptions', 'auth:api', 'role:Administrador'])->prefix('admin')->group(function () {
        Route::get('/areas', [AreaController::class, 'index']);
        Route::get('/categorias', [AreaController::class, 'categorias']);
        Route::get('/grados', [AreaController::class, 'grados']);

});

Route::middleware(['jwt.exceptions', 'auth:api', 'role:Tutor'])->group(function () {
    Route::apiResource('inscripciones', InscripcionController::class);
    Route::apiResource('categorias', CategoriaController::class);
    Route::apiResource('competencias', CompetenciaController::class);
});

Route::get('/tutores', [UserController::class, 'indexTutores']);
Route::get('/competencias', [CompetenciaController::class, 'index']);

Route::get('/getCategorias', [CategoriaController::class, 'index']);
Route::post('/crearCompetencia', [CompetenciaController::class, 'crearCompetencia']);

Route::post('/register', [AuthController::class, 'register']);

        Route::get('/areas', [AreaController::class, 'index']);
        Route::get('/categorias', [AreaController::class, 'categorias']);
        Route::get('/grados', [AreaController::class, 'grados']);
        Route::delete('/areasDelete/{id}', [AreaController::class, 'destroy']);

        Route::delete('/gradosDelete/{id}', [AreaCategoriaController::class, 'destroy']);
        Route::get('/exportar-inscritos/{competencia_id}', [InscripcionController::class, 'exportarInscritosExcel']);

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::delete('categoriasDelete/{id}', [CategoriaController::class, 'destroy']);

// Rutas para editar y borrar competencias (RESTful)
Route::put('/competenciasUpdate/{id}', [CompetenciaController::class, 'update']);
Route::delete('/competenciasDestroy/{id}', [CompetenciaController::class, 'destroy']);

// Obtener perfil del usuario autenticado
Route::middleware(['jwt.exceptions', 'auth:api'])->get('/profile', function (Request $request) {
    return response()->json($request->user());
});

Route::middleware(['jwt.exceptions', 'auth:estudiante'])->get('/profile-estudiante', function (Request $request) {
    return response()->json(Auth::guard('estudiante')->user());
});

// Actualizar perfil del usuario autenticado
Route::middleware(['jwt.exceptions', 'auth:api'])->put('/profile', [UserController::class, 'updateProfile']);