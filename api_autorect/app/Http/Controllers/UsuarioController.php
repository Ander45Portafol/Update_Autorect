<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UsuarioResource;
use App\Http\Responses\ApiResponse;
use Illuminate\Support\Facades\Hash;
use App\Models\Empleado;
use App\Models\Usuario;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class UsuarioController extends Controller
{
    //
    public function index():JsonResponse
    {
        try {
            $user = Usuario::orderBy("nombre_usuario")->get();
            if ($user->isEmpty()) {
                $message = [
                    'message' => 'No existen usuarios'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('¡Exito!', 200, UsuarioResource::collection($user));
        } catch (Throwable $to) {
            return ApiResponse::error('Error', 500, $to->getMessage());
        }
    }
    /**
     * Almacenar un nuevo usuario.
     *
     * @param UserRequest $request  La solicitud HTTP validada.
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserRequest $request): JsonResponse
    {
        $empleado = Empleado::find($request->id_empleado);

        if ($empleado) {
            try {
                $validated = $request->validated();
                $validated['clave_usuario'] = Hash::make($validated['nombre_usuario'+'123']);
                $datos = array_merge($validated);
                $usuario = Usuario::create($datos);
                return ApiResponse::success('¡Usuario creado con exito!',200,new UsuarioResource($usuario));
            } catch (Exception $e) {
                return ApiResponse::error('Error to create a user', 500, $e->getMessage());
            }
        } else {
            return response()->json(['error' => 'Employee wasn´t find'], 404);
        }
    }

    public function show($id):JsonResponse
    {
        try {
            $user = Usuario::findOrFail($id);
            return ApiResponse::success('User data was get', 200, data: new UsuarioResource($user));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error to looking for user', 404, $me->getMessage());
        }
    }
    public function update($id, UserRequest $request):JsonResponse
    {
        try {
            $users = Usuario::findOrFail($id);
            $validated = $request->validated();
            $datos = array_merge($validated);
            $users->update($datos);
            return ApiResponse::success('User was updated', 200, $users);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('User wasn´t find', 404, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error to data validated', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error to update the user', 500, $e->getMessage());
        }
    }
    public function destroy($id):JsonResponse
    {
        try {
            $user = Usuario::findOrFail($id);
            $user->delete();
            return ApiResponse::success('User was deleted', 200);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error( 'User wasn´t find', 404, $me->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error to deleted the user', 500, $e->getMessage());
        }
    }
    public function hashPasword($password){
        $password_hash=Hash::make($password);
        return response()->json($password_hash, 200);
    }
}
