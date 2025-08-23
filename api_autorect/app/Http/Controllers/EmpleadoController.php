<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmpleadoRequest;
use App\Http\Resources\EmpleadoResource;
use App\Http\Responses\ApiResponse;
use App\Models\Empleado;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
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
            $update_employee=$this->createCarne($validated['nombre_empleado']);
            return ApiResponse::success('Empleado creado con exito', 200, new EmpleadoResource($update_employee));
        } catch (Exception $e) {
            return ApiResponse::error('Error a intentar guardar el registro', 500, $e->getMessage());
        } catch (Throwable $to) {
            return ApiResponse::error('Error', 500, $to->getMessage());
        }
    }
    //metodo creado para poder generar los carnets de los empleados
    public function createCarne($nombre_empleado){
        try {
            $employee=Empleado::where('nombre_empleado',$nombre_empleado)->first();
            $id=$employee->id_empleado;
            $format_carnet=null;
            if (strlen($id)===1) {
                $id="0000".$id;
            }else if(strlen($id)===2){
                $id="000".$id;
            }else if (strlen($id)==3) {
                $id="00".$id;
            }else if (strlen($id)==4) {
                $id="0".$id;
            }
            $format_carnet=substr((now()->year),-2).$id;
            $employee->carne_empleado=$format_carnet;
            $employee->save();
            return $employee;
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error', 404, $me->getMessage());
        }
    }
    //metodo para mostrar la informacion personalizada de cada empleado
    public function show($id): JsonResponse
    {
        try {
            $empleado = Empleado::findOrFail($id);
            return ApiResponse::success('Empleado obtentido correctamente', 200, $empleado);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Empleado no encontrado', 404, $me->getMessage());
        }
    }
    //Funcion para actualizar un empleado
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
    //Funcion para eliminar empleados
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
