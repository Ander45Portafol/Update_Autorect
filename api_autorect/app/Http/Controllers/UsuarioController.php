<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsuarioResource;
use App\Http\Responses\ApiResponse;
use App\Models\Empleado;
use App\Models\Usuario;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UsuarioController extends Controller
{
    //
    public function index()
    {
        try {
            $user = Usuario::orderBy("nombre_usuario")->get();
            return ApiResponse::success('Succes', 200, UsuarioResource::collection($user));
        } catch (Exception $e) {
            return ApiResponse::error('Error', 500, $e->getMessage());
        }
    }
    public function store(Request $request)
    {
        $empleado = Empleado::find($request->id_empleado);

        if ($empleado) {
            try {
                $request->validate([
                    'nombre_usuario' => 'required|string|unique:usuarios,nombre_usuario',
                    'clave_usuario' => 'required|string',
                    'id_empleado' => 'required|unique:usuarios,id_empleado',
                    'tipo_usuario' => 'required|string',
                    'estado_usuario' => 'required|string'
                    // otros campos que necesites
                ]);
                $usuario = Usuario::create([
                    'nombre_usuario' => $request->nombre_usuario,
                    'clave_usuario' => $request->clave_usuario,
                    'id_empleado' => $request->id_empleado,
                    'tipo_usuario' => $request->tipo_usuario,
                    'estado_usuario' => $request->estado_usuario
                ]);
                return (new UsuarioResource($usuario))->additional(['message' => 'Usuario creado con exito']);
            } catch (Exception $e) {
                return ApiResponse::error('Error al crear al usuario', '500', $e->getMessage());
            }
        } else {
            return response()->json(['error' => 'Empleado no encontrado'], 404);
        }
    }
    public function show($id)
    {
        try {
            $user = Usuario::findOrFail($id);
            return ApiResponse::success('Usuario obtenido correctamente', 200, data: $user);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error al buscar el usuario', 404, $me->getMessage());
        }
    }
    public function update($id, Request $request)
    {

        try {
            $users = Usuario::findOrFail($id);
            $empleado = Empleado::find($request->id_empleado);
            if ($empleado) {
                $request->validate([
                    'nombre_usuario' => 'required|string|unique:usuarios,nombre_usuario',
                    'clave_usuario' => 'required|string',
                    'id_empleado' => 'required',
                    'tipo_usuario' => 'required|string',
                    'estado_usuario' => 'required|string'
                ]);
                $users->update($request->all());
                return ApiResponse::success('Usuario actualizado con exito', 200, $users);
            } else {
                return ApiResponse::error('Empleado no encontrado', 404);
            }
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Usuario no encontrado', 404, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error en validaciones', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al actualizar el usuario', 500, $e->getMessage());
        }
    }
    public function destroy($id){
        try{
            $user=Usuario::findOrFail($id);
            $user->delete();
            return ApiResponse::success('Usuario eliminado correctamente',200);
        }catch(ModelNotFoundException $me){
            return ApiResponse::error('El usuario seleccionado no existe',404,$me->getMessage());
        }catch(Exception $e){
            return ApiResponse::error('Error al eliminar al usuario',500,$e->getMessage());
        }
    }
}
