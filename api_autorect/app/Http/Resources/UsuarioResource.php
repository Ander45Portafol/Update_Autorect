<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsuarioResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_usuario'=>$this->id_usuario,
            'nombre_usuario'=>$this->nombre_usuario,
            'imagen_usuario'=>$this->imagen_usuario,
            'id_empleado'=>$this->id_empleado,
            'tipo_usuario'=>$this->tipo_usuario,
            'estado_usuario'=>$this->estado_usuario
        ];
    }
}
