<?php

namespace App\Http\Controllers;

use App\Http\Requests\ModeloRequest;
use App\Http\Resources\MarcaResource;
use App\Http\Responses\ApiResponse;
use App\Models\Marca;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class MarcaController extends Controller
{
    //
    public function index():JsonResponse
    {
        try {
            $marca = Marca::orderBy("marca")->get();
            if ($marca->isEmpty()) {
                $message=[
                    'message'=>'Brands don´t exists'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Success', 200, new MarcaResource($marca));
        } catch (Throwable $to) {
            return ApiResponse::error('Error', 500,$to->getMessage());
        }
    }
}
