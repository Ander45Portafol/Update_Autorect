<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductoResource;
use App\Http\Responses\ApiResponse;
use App\Models\Producto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        try{
            $product=Producto::with('modelo.marca')->get();
            if ($product->isEmpty()) {
                $message=[
                    'message'=>'No existen Productos'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Exito',200,ProductoResource::collection($product));
        }catch(Throwable $to){
            return ApiResponse::error('Error',500,$to->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
