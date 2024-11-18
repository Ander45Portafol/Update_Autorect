<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/employees',EmpleadoController::class);
Route::resource('/categories',CategoriaController::class);
Route::resource('/users',UsuarioController::class);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::resource('/marcas',MarcaController::class);

Route::post('login',[AuthController::class,'login']);

Route::middleware('jwt.auth')->group(function(){

});
