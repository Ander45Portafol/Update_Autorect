<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Resources\EmpleadoResource;
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

Route::resource('/empleados',EmpleadoController::class);
Route::get('/empleado/carnet/{nombre}',[EmpleadoController::class,'createCarnet']);
Route::resource('/categorias',CategoriaController::class);
Route::resource('/usuarios',UsuarioController::class);
Route::post('/empleado', [EmpleadoController::class, 'store']);
Route::resource('/marcas',MarcaController::class);
Route::get('/password_link/{password}',[UsuarioController::class,'hashPasword']);

Route::post('login',[AuthController::class,'login']);
Route::get('/connection',[ConnectionController::class,'validateConnection']);

Route::middleware('jwt.auth')->group(function(){

});
