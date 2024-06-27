<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use Exception;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller
{
    //
    public function index()
    {
        $categorie = Categoria::all();
        if ($categorie->isEmpty()) {
            return response()->json(['message' => 'No existen registros']);
        } else {
            $categorie_data = [
                'data' => $categorie
            ];
            return response()->json($categorie_data);
        }
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre_categoria' => 'required',
            'descripcion_categoria' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error al validar los datos',
                'error' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }
        // Crear una nueva categoría
        try {
            $categoria = Categoria::create([
                'nombre_categoria' => $request->nombre_categoria,
                'descripcion_categoria' => $request->descripcion_categoria
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error al crear la categoría',
                'error' => $e->getMessage(),
                'status' => 500
            ], 500);
        }

        // Devolver la respuesta exitosa
        return response()->json([
            'message' => 'Categoria creada con exito',
            'categoria'=>$categoria,
            'status' => 201
        ], 201);
    }
    public function show($id)
    {
        try {
            $categorie = Categoria::find($id);
            if(!$categorie){
                $data=[
                    'message'=>'No existe la categoria',
                    'status'=>404
                ];
                return response()->json($data);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error al intentar buscar',
                'error' => $e->getMessage(),
                'status' => 404
            ], 404);
        }
        $data = [
            'categorie' => $categorie,
            'status' => 200
        ];
        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        try {
            $categorie = Categoria::find($id);
            if ($categorie) {
                $categorie->delete();
                $data = [
                    'message' => 'La categoria fue eliminada correctamente',
                    'status' => '200'
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'message' => 'No existe la categoria',
                    'status' => '404'
                ];
                return response()->json($data, 404);
            }
        } catch (Exception $ex) {
            $data = [
                'message' => 'Error al encontrar la categoria',
                'error' => $ex->getMessage(),
                'status' => 500
            ];
            return response()->json($data, 500);
        }
    }
    public function update($id, Request $request){
        try{
            $categorie=Categoria::find($id);
            if(!$categorie){
                $data=[
                    'message'=>'No se pudo encontrar la categoria',
                    'status'=>404
                ];
                return response()->json($data,404);
            }else{
                $validator = Validator::make($request->all(), [
                    'nombre_categoria' => 'required',
                    'descripcion_categoria' => 'required'
                ]);
                if ($validator->fails()) {
                    $data = [
                        'message' => 'Error al validar los datos',
                        'error' => $validator->errors(),
                        'status' => 400
                    ];
                    return response()->json($data, 400);
                }else{
                    $categorie->nombre_categoria=$request->nombre_categoria;
                    $categorie->descripcion_categoria=$request->descripcion_categoria;
                    $categorie->save();
                    $data=[
                        'message'=>'Categoria actualizada correctamente',
                        'categorie'=>$categorie,
                        'status'=>200
                    ];
                    return response()->json($data,200);
                }
            }
        }catch(Exception $e){
            $data=[
                'message'=>'Ocurrio un error al momento de actualizar',
                'error'=>$e->getMessage(),
                'status'=>500
            ];
            return response()->json($data,500);
        }

    }
}
