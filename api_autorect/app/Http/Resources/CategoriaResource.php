<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriaResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_categoria'=>$this->id_categoria,
            'nombre_categoria'=>$this->nombre_categoria,
            'descripcion_categoria'=>$this->descripcion_categoria
        ];
    }
}
