<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmpleadoRequest extends FormRequest
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
        return [
            'nombre_empleado'=>'string|required|max:150|min:4',
            'apellido_empleado'=>'string|required|max:150|min:4',
            'correo_empleado'=>'string|required|email',
            'direccion_empleado'=>'required|string|max:250',
            'estado_empleado'=>'required|in:Vacaciones,Incapacidad,Suspendido,Transladado,Trabajando,Descanso',
            'telefono_empleado'=>'regex:/^\d{4}-\d{4}$/',
            'fecha_nac_empleado'=>'required|date',
            'carne_empleado'=>'required|string',
            'tipo_documento'=>'required|in:Pasaporte,DUI,NIT',
            'numero_documento'=>'required|string',
            'tipo_empleado'=>'required|in:Root,Administración,Ventas,Super,Gerente,Supervisor'
        ];
    }
    public function messages(){
        return[
            'nombre_empleado.string'=>'El nombre del empleado debe ser una cadena de texto',
            'nombre_empleado.required'=>'El nombre del empleado es requirido',
            'nombre_empleado.max'=>'Se sobrepaso el limite de caracteres para el nombre del empleado',
            'nombre_empleado.min'=>'Se debe escribir un minimo de 4 caracteres para el nombre del empleado',
            'apellido_empleado.string'=>'El apellido del empleado debe ser una cadena de texto',
            'apellido_empleado.required'=>'El apellido del empleado es requiido',
            'apellido_empleado.min'=>'Se debe escribir un minimo de 4 caracteres para el apellido del empleado',
            'apellido_empleado.max'=>'Se sobrepaso el limite de caracteres para el apellido del empleado',
            'correo_empleado.string'=>'El correo del empledo debe ser una cadena de texto',
            'correo_empleado.email'=>'El correo del empleado no tiene el formato correcto',
            'direccion_empleado.required'=>'La dirección del empleado es requerida',
            'direccion_empleado.string'=>'La dirección del empleado debe ser una cadena de texto',
            'direccion_empleado.max'=>'Se sobrepaso el limite de caracteres para la dirección del empleado',
            'estado_empleado.required'=>'El estado del empleado es requirido',
            'estado_empleado.in'=>'Estado del empleado inexistente',
            'telefono_empleado.regex'=>'El número de telefono del empleado no cumple el formato',
            'fecha_nac_emppleado.required'=>'La fecha de nacimiento es requerida',
            'fecha_nac_empleado.date'=>'La fecha de nacimiento no cumple con el formato correcto',
            'carne_empleado.required'=>'El carne del empleado es requerido',
            'carne_empleado.string'=>'El carne del empleado debe ser una cadena de texto',
            'tipo_documento.required'=>'El tipo de documento es requerido',
            'tipo_documento.in'=>'Tipo de documento inexistente',
            'numero_documento.required'=>'El número del documento es requerido',
            'numero_documento.string'=>'El número del documento debe ser una cadena de texto',
            'tipo_empleado.required'=>'El tipo de empleado es requerido',
            'tipo_empleado.in'=>'Tipo de empleado inexistente'
        ];
    }
}
