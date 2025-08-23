<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClienteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'apellido_cliente'=>$this->apellido_cliente,
            'nombre_cliente'=>$this->nombre_cliente ,
            'usuario'=>$this->usuario_cliente,
            'documento_cliente'=>$this->documento_cliente,
            'telefono_cliente'=>$this->telefono_cliente,
            'estado_cliente'=>$this->estado_cliente
        ];
    }
}
