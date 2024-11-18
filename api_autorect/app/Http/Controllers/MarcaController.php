<?php

namespace App\Http\Controllers;

use App\Http\Resources\MarcaResource;
use App\Http\Responses\ApiResponse;
use App\Models\Marca;
use Exception;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    //
    public function index()
    {
        try {
            $marca = Marca::orderBy("marca")->get();
            return ApiResponse::success('Success', 200, new MarcaResource($marca));
        } catch (Exception $e) {
            return ApiResponse::error($e, 500);
        }
    }
}
