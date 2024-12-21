<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ModeloResource extends ResourceCollection
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
            'id_marca'=>$this->id_marca
        ];
    }
}
