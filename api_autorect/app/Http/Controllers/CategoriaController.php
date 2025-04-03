<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoriaRequest;
use App\Http\Resources\CategoriaResource;
use App\Http\Responses\ApiResponse;
use App\Models\Categoria;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Throwable;

class CategoriaController extends Controller
{
    //
    public function index():JsonResponse
    {
        try {
            $categorie = Categoria::orderBy("nombre_categoria")->get();
            if ($categorie->isEmpty()) {
                $message = [
                    'message' => 'No existen registros'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Success', 200, CategoriaResource::collection($categorie));
        } catch (Throwable  $to) {
            return ApiResponse::error('Error', 500, $to->getMessage());
        }
    }
    public function store(CategoriaRequest $request):JsonResponse
    {
        try {
            $validate=$request->validated();
            $Categoria=Categoria::create($validate);
            return ApiResponse::success('Categoria creada con exito', 201, new CategoriaResource( $Categoria));
        } catch (Exception $e) {
            return ApiResponse::error('Error al crear la categoria', 500, $e->getMessage());
        }
    }
    public function show($id):JsonResponse
    {
        try {
            $categorie = Categoria::findOrFail($id);
            return ApiResponse::success('Categoria obtenida correctamente', 200, new CategoriaResource($categorie));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error al buscar la categoria', 404, $me->getMessage());
        }
    }
    public function destroy($id):JsonResponse
    {
        try {
            $categorie = Categoria::findOrFail($id);
            $categorie->delete();
            return ApiResponse::success('La categoria fue eliminada correctamente', 200);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Categoria seleccionada no existe', 404, $me->getMessage());
        }catch(Exception $e){
            return ApiResponse::error('Error al eliminar la categoria', 500, $e->getMessage());
        }
    }

    public function update($id, CategoriaRequest $request):JsonResponse
    {
        try {
            $categorie = Categoria::findOrFail($id);
            $validated = $request->validated();
            $datos_categorie = array_merge($validated);
            $categorie->update($datos_categorie);
            return ApiResponse::success('Categoria actualizada con exito', 200, $categorie);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Categoria no encontrada', 404, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error de validacion', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al actualizar la categoria', 500, $e->getMessage());
        }
    }
}
