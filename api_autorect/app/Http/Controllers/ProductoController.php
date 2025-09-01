<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductoRequest;
use App\Http\Resources\ProductoResource;
use App\Http\Responses\ApiResponse;
use App\Models\Producto;
use Dotenv\Exception\ValidationException;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class ProductoController extends Controller
{
        public function __construct()
    {
        // Aplicar middleware a todo el controlador
        $this->middleware('auth:api');
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $product = Producto::with('modelo.marca')->get();
            if ($product->isEmpty()) {
                $message = [
                    'message' => 'No existen productos'
                ];
                return response()->json($message);
            }
            return ApiResponse::success('Exito', 200, ProductoResource::collection($product));
        } catch (Throwable $to) {
            return ApiResponse::error('Error', 500, $to->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    //public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductoRequest $request): JsonResponse
    {
        try {
            $validate = $request->validated();
            $product = Producto::create($validate);
            return ApiResponse::success('Producto creado exitosamente', 200, new ProductoResource($product));
        } catch (Exception $e) {
            return ApiResponse::error('Error al crear un producto', '500', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        try {
            $product = Producto::findOrFail($id);
            return ApiResponse::success('Producto encontrado exitosamente', 200, new ProductoResource($product));
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error('No se pudo encontrar el producto', 404, $me->getMessage());
        }
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
    public function update(ProductoRequest $request, $id):JsonResponse
    {
        try {
            $product = Producto::findOrFail($id);
            $validate = $request->validated();
            $product->update($validate);
            return ApiResponse::success('El producto fue actualizado', 200, $product);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::success('Error al encontrar el producto', 400, $me->getMessage());
        } catch (ValidationException $ve) {
            return ApiResponse::success('Error al validar los datos', 422, $ve->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al actualizar el producto', 500, $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id):JsonResponse
    {
        try {
            $producto = Producto::findOrFail($id);
            $producto->delete();
            return ApiResponse::success('Producto eliminado exitosamente', 200);
        } catch (ModelNotFoundException $me) {
            return ApiResponse::error("Producto no fue encontrado", 404, $me->getMessage());
        } catch (Exception $e) {
            return ApiResponse::error('Error al eliminar el producto', 500, $e->getMessage());
        }
    }
}
