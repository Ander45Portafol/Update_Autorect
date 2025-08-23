<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'imagen_principal'=>$this->imagen_principal,
            'nombre_producto'=>$this->nombre_producto,
            'precio_producto'=>$this->precio_producto,
            'modelo'=>[
                'nombre'=>$this->modelo->nombre_modelo,
                'marca'=>$this->modelo->marca->marca
            ],
            'estado_producto'=>$this->estado_producto
        ];
    }
}
