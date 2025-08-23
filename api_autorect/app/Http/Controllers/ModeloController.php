<?php

namespace App\Http\Controllers;

use App\Http\Requests\ModeloRequest;
use App\Http\Resources\ModeloResource;
use App\Http\Responses\ApiResponse;
use App\Models\Marca;
use App\Models\Modelo;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class ModeloController extends Controller
{
    public function index():JsonResponse{
        try{
            $model=Modelo::join('marcas','modelos.id_marca','=','marcas.id_marca')->select('modelos.*','marca')->get();
            if ($model->isEmpty()) {
                $message = [
                    'message' => 'Models don´t exists'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Success',200, ModeloResource::collection($model));
        }catch(Throwable $to){
            return ApiResponse::error('Error', 500, $to->getMessage());
        }
    }
    public function store(ModeloRequest $request):JsonResponse{
        $brand=Marca::find($request->id_marca);
        if ($brand) {
            try{
                $validated=$request->validated();
                $model=Modelo::create($validated);
                return ApiResponse::success('Model was create with success',200,new ModeloResource($model));
            }catch(Exception $e){
                return ApiResponse::error('Error to create a model','500',$e->getMessage());
            }
        }else{
            return response()->json(['error' => 'Model wasn´t find'], 404);
        }
    }
    public function show($id):JsonResponse{
        try{
            $model=Modelo::findOrFail($id);
            return ApiResponse::success('Model data was get',200,new ModeloResource($model));
        }catch(ModelNotFoundException $me){
            return ApiResponse::error('Error to looking for model',404,$me->getMessage());
        }
    }
    public function update($id,ModeloRequest $request):JsonResponse{
        try{
            $model=Modelo::findOrFail($id);
            $validated=$request->validated();
            $model->update($validated);
            return ApiResponse::success('Model was updated',200,$model);
        }catch(ModelNotFoundException $me){
            return ApiResponse::error('Model wasn´t find', 404, $me->getMessage());
        }catch(ValidationException $ve){
            return ApiResponse::error('Error to data validated', 422, $ve->getMessage());
        }catch(Exception $e){
            return ApiResponse::error('Error to update the model', 500, $e->getMessage());
        }
    }
    public function destroy($id):JsonResponse{
        try{
            $model=Modelo::findOrFail($id);
            $model->delete();
            return ApiResponse::success('Model was deleted',200);
        }catch(ModelNotFoundException $me){
            return ApiResponse::error( "Model wasn't find", 404,$me->getMessage());
        }catch(Exception $e){
            return ApiResponse::error('Error to deleted the model', 500, $e->getMessage());
        }
    }
}
