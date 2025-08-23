<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmpleadoResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id_empleado'=>$this->id_empleado,
            'nombre_empleado'=>$this->nombre_empleado,
            'apellido_empleado'=>$this->apellido_empleado,
            'telefono_empleado'=>$this->telefono_empleado,
            'numero_documento'=>$this->numero_documento,
            'correo_empleado'=>$this->correo_empleado,
            'carne_empleado'=>$this->carne_empleado,
            'estado_empleado'=>$this->estado_empleado,
            'area_trabajo'=>$this->area_trabajo,
        ];
    }
}
