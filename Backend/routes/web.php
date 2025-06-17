<?php

use App\Http\Controllers\InscripcionController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

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
    return view('index');
}); 

//Route::get('/importar-inscripciones', [InscripcionController::class, 'mostrarFormulario']);
//Route::post('/importar-inscripciones', [InscripcionController::class, 'importarExcel']);




Route::get('/registro', function () {
    return view('RegistrationPage');
});

Route::get('/registroArea', function () {
    return view('RegistrarArea');
});

Route::post('/inscripcion', [InscripcionController::class, 'inscribir']);



Route::get('/clear-cache-secret-123', function () {
    try {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('route:clear');
        Artisan::call('view:clear');
        return "Cache limpio, todo fresh. ✅";
    } catch (\Exception $e) {
        return "Error limpiando cache: " . $e->getMessage();
    }
});


Route::get('/link-storage', function () {
    $target = storage_path('app/public');
    $link = public_path('storage');

    if (file_exists($link)) {
        return '🟡 Ya existe el enlace simbólico o una carpeta con ese nombre.';
    }

    try {
        symlink($target, $link);
        return '✅ Enlace simbólico creado correctamente: public/storage → storage/app/public';
    } catch (\Exception $e) {
        return '❌ Error al crear el enlace simbólico: ' . $e->getMessage();
    }
});

