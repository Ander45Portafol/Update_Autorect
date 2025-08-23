<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClienteRequest;
use App\Http\Resources\ClienteResource;
use App\Http\Responses\ApiResponse;
use App\Models\Cliente;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class ClienteController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $cliente = Cliente::orderBy("apellido_cliente")->get();
            if ($cliente->isEmpty()) {
                $message = [
                    'message' => 'No existen clientes'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Exito', 200, ClienteResource::collection($cliente));
        } catch (Throwable $to) {
            return ApiResponse::error('Error al cargar los datos', 500, $to->getMessage());
        }
    }
    public function store(ClienteRequest $request):JsonResponse
    {
        try {
            $validate=$request->validated();
            $client=Cliente::create($validate);
            return ApiResponse::success('Cliente creado exitosamente',200,new ClienteResource($client));
        } catch (Exception $e) {
            return ApiResponse::error('Error al crear un cliente', '500', $e->getMessage());
        }
    }
    public function show($id): JsonResponse
    {
        try {
            $cliente = Cliente::findOrFail($id);
            return ApiResponse::success('Cliente encontrado exitosamente', 200, new ClienteResource($cliente));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('No se pudo encontrar el cliente', 404, $me->getMessage());
        }
    }
    public function update(ClienteRequest $request, $id): JsonResponse
    {
        try {
            $cliente = Cliente::findOrFail($id);
            $validate = $request->validated();
            $cliente->update($validate);
            return ApiResponse::success('Cliente actualizado exitosamente', 200, new ClienteResource($cliente));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error al encontrar al cliente', 400, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error al validar los datos', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al actualizar los datos', 500, $e->getMessage());
        }
    }
    public function destroy($id) {
                try{
            $cliente=Cliente::findOrFail($id);
            $cliente->delete();
            return ApiResponse::success('Cliente eliminado con exito',200);
        }catch(ModelNotFoundException $me){
            return ApiResponse::error( "No se pudo encontrar al cliente", 404,$me->getMessage());
        }catch(Exception $e){
            return ApiResponse::error('Error al eliminar el registro', 500, $e->getMessage());
        }
    }
}
