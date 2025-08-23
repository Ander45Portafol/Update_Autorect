<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModeloResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_modelo'=>$this->id_modelo,
            'nombre_modelo'=>$this->nombre_modelo,
            'anio_modelo'=>$this->anio_modelo,
            'nombre_marca'=>$this->marca
        ];
    }
}
