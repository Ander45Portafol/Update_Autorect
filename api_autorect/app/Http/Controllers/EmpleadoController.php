<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmpleadoRequest;
use App\Http\Resources\EmpleadoResource;
use App\Http\Responses\ApiResponse;
use App\Models\Empleado;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;


class EmpleadoController extends Controller
{
    //
    public function index(): JsonResponse
    {
        try {
            $employee = Empleado::orderBy("nombre_empleado")->get();
            if ($employee->isEmpty()) {
                $message = [
                    'message' => 'No existen registros'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('¡Exito!', 200, EmpleadoResource::collection($employee));
        } catch (Throwable $to) {
            return ApiResponse::success('Error', 500, $to->getMessage());
        }
    }
    public function store(EmpleadoRequest $request): JsonResponse
    {
        //return response()->json(['message' => 'Solicitud recibida', 'data' => $request->all()]);

        try {

            $validated = $request->validated();
            $validated['carne_empleado'] = null;

            $employee = Empleado::create($validated);
            return ApiResponse::success('Empleado creado con exito', 200, new EmpleadoResource($employee));
        } catch (Exception $e) {
            return ApiResponse::error('Error a intentar guardar el registro', 500, $e->getMessage());
        } catch (Throwable $to) {
            return ApiResponse::success('Error', 500, $to->getMessage());
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $empleado = Empleado::findOrFail($id);
            return ApiResponse::success('Empleado obtentido correctamente', 200, new EmpleadoResource($empleado));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Empleado no encontrado', 404, $me->getMessage());
        }
    }
    public function update($id, EmpleadoRequest $request): JsonResponse
    {
        try {
            $empleado = Empleado::findOrFail($id);
            $validar_datos = $request->validated();
            $empleado->update($validar_datos);
            return ApiResponse::success('Empleado actualizado con exito', 200, new EmpleadoResource($empleado));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Empleado no encontrado', 404, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error en validaciones', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al actualizar el empleado', 500, $e->getMessage());
        }
    }
    public function destroy($id): JsonResponse
    {
        try {
            $empleado = Empleado::findOrFail($id);
            $empleado->delete();
            return ApiResponse::success('Empleado eliminado correctamente', 200);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('El empleado seleccionado no existe', 404, $me->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al eliminar al empleado', 500, $e->getMessage());
        }
    }
}
