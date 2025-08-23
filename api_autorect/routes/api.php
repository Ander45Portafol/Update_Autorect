<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\ProductoController;
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
//Ruta para empleados
Route::resource('/empleados',EmpleadoController::class);
//Ruta para crear el carnet
Route::get('/empleado/carnet/{nombre}',[EmpleadoController::class,'createCarne']);
//Ruta para categorias
Route::resource('/categorias',CategoriaController::class);
//Ruta para usuarios
Route::resource('/usuarios',UsuarioController::class);
//Route::post('/empleado', [EmpleadoController::class, 'store']);
//Ruta para marcas
Route::resource('/marcas',MarcaController::class);
//Ruta para Modelos
Route::resource('/modelos',ModeloController::class);
//Ruta para productos
Route::resource('/productos',ProductoController::class);
//Ruta para clientes
Route::resource('/clientes',ClienteController::class);
//Ruta para obtener constraseñas encriptadas
Route::get('/password_link/{password}',[UsuarioController::class,'hashPasword']);

Route::post('login',[AuthController::class,'login']);
//Ruta solo para verificar la conexion a la base de datos
Route::get('/connection',[ConnectionController::class,'validateConnection']);

Route::middleware('jwt.auth')->group(function(){

});
