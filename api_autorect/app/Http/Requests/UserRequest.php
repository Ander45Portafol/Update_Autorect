<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre_usuario'=>'required|string',
            'clave_usuario'=>'required|string',
            'imagen_usuario'=>'string',
            'id_empleado'=>[
                'required',
                'integer',
                'exists:empleados,id_empleado', // Asegura que el empleado exista
                'unique:usuarios,id_empleado' //Asegura que no existe otro usuario con ese empleado
            ],
            'tipo_usuario'=>'required|string',
            'estado_usuario'=>'required|string'
        ];
    }
}
