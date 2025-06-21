<?php

use App\Http\Controllers\InscripcionController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Barryvdh\DomPDF\Facade\Pdf;

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

/*Route::get('/', function () {
    return view('index');
}); *//*
Route::get('/{any}', function () {
return view('index');
})->where('any', '.*');
*/
// ...existing code...

Route::get('/{any}', function () {
    return view('index');
})->where('any', '^(?!api).*$');
//Route::get('/importar-inscripciones', [InscripcionController::class, 'mostrarFormulario']);
//Route::post('/importar-inscripciones', [InscripcionController::class, 'importarExcel']);

//Route::post('/inscripcion', [InscripcionController::class, 'inscribir']);

