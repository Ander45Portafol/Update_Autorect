<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaResource;
use App\Http\Responses\ApiResponse;
use Illuminate\Http\Request;
use App\Models\Categoria;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Throwable;

class CategoriaController extends Controller
{
    //
    public function index()
    {
        try {
            $categorie = Categoria::orderBy("nombre_categoria")->get();
            return ApiResponse::success('Success', 200, CategoriaResource::collection($categorie));
        } catch (Throwable  $e) {

            return ApiResponse::error('Error',500,$e->getMessage());
        }
    }
    public function store(Request $request)
    //Validando los datos a ingresar
    {
        try {
            $request->validate([
                'nombre_categoria' => 'required|string|unique:categorias',
                'descripcion_categoria' => 'required|string'
            ]);
            // Crear una nueva categoría
            try {
                $categoria = Categoria::create([
                    'nombre_categoria' => $request->nombre_categoria,
                    'descripcion_categoria' => $request->descripcion_categoria
                ]);
                return(new CategoriaResource($categoria))->additional([
                    'message'=>'Categoria creada con exito'
                ]);
                //return ApiResponse::success('Categoria creada con exito', 201, CategoriaResource::collection( $categoria));
            } catch (Exception $e) {
                return ApiResponse::error('Error al crear la categoria', 500, $e->getMessage());
            }
        } catch (ValidationException $ve) {
            return ApiResponse::error('Error de validacion', 422, $ve->getMessage());
        }
    }
    public function show($id)
    {
        try {
            $categorie = Categoria::findOrFail($id);
            return ApiResponse::success('Categoria obtenida correctamente', 200, $categorie);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Error al buscar la categoria', 404, $me->getMessage());
        }
    }
    public function destroy($id)
    {
        try {
            $categorie = Categoria::findOrFail($id);
            $categorie->delete();
            return ApiResponse::success('La categoria fue eliminada correctamente', 200, $categorie);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('Categoria seleccionada no existe', 404, $me->getMessage());
        }
    }

    public function update($id, Request $request)
    {
        try {
            $categorie = Categoria::findOrFail($id);
            $request->validate([
                'nombre_categoria' => 'required|string|unique:categorias',
                'descripcion_categoria' => 'required|string'
            ]);
            $categorie->update($request->all());
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
