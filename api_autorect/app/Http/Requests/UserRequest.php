<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if ($this->isMethod('post')) {
            return [
                'nombre_usuario' => 'required|string|unique:usuarios,nombre_usuario',
                'clave_usuario' => 'required|string',
                'id_empleado' => 'required|integer|unique:usuarios,id_empleado',
                'tipo_usuario' => 'required|string',
                'estado_usuario' => 'required|string'
            ];
        }
        if ($this->isMethod('put')) {
            return [
                'nombre_usuario' => 'required|string|unique:usuarios,nombre_usuario',
                'clave_usuario' => 'string',
                'id_empleado' => 'required|integer',
                'tipo_usuario' => 'required|string',
                'estado_usuario' => 'required|string'
            ];
        }
        return [];
    }
    public function messages():array
    {
        return [
            'nombre_usuario.required' => 'El campo nombre de usuario es requerido',
            'nombre_usuario.string' => 'El nombre del usuario debe ser una cadena de texto',
            'nombre_usuario.unique' => 'Nombre de usuario, no permitido',
            'clave_usuario.string' => 'La clave del usuario debe ser una cadena de texto',
            'clave_usuario.required' => 'Es obligatorio agregar una clave de usuario',
            'id_empleado.required' => 'El campo del empleado es obligatorio',
            'id_empleado.unique' => 'Este empleado ya existe en un registro',
            'id_empleado.integer' => 'El identificar del empleado debe ser de caracter numérico',
            'tipo_usuario.required' => 'Escoge un tipo de usuario',
            'tipo_usuario.string' => 'El tipo de usuario debe de ser una cadena de texto',
            'estado_usuario.required' => 'Escoge un estado para el usuario',
            'estado_usuario.string' => 'El estado de un usuario debe de ser una cadena de texto'
        ];
    }
    //Metodo para imprimir en formato json el mensaje de los errores que se capturen
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'exito' => false,
                'mensaje' => 'Errores de validación.',
                'errores' => $validator->errors(),
            ], 422)
        );
    }
}
