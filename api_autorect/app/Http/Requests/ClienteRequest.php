<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ClienteRequest extends FormRequest
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
            'nombre_cliente'=>'string|required|min:3',
            'apellido_cliente'=>'string|required|min:3',
            'direccion_cliente'=>'string|required|min:3|max:300',
            'telefono_cliente'=>'regex:/^\d{4}-\d{4}$/|required',
            'correo_cliente'=>'required|email',
            'usuario_cliente'=>'string|required',
            'clave_cliente'=>'string|required',
            'tipo_documento'=>'required|in:Pasaporte,DUI',
            'estado_cliente'=>'required|in:Activo,Inactivo',
            'tipo_membresia'=>'required|in:Gold,Platinum,Normal',
            'codigo_membresia'=>'string',
            'documento_cliente'=>'string|required'
        ];
    }
    public function messages(){
        return[
            'nombre_cliente.required'=>'No se permiten campos vacios para nombre',
            'nombre_cliente.string'=>'El nombre debe contener una cadena de texto',
            'nombre_cliente.min'=>'El nombre debe contener más de 3 caracteres',
            'apellido_cliente.string'=>'El apellido debe contener una cadena de texto',
            'apellido_cliente.required'=>'No se permiten campos vacios para apellido',
            'apellido_cliente.min'=>'El apellido debe contener un minimo de 3 caracteres',
            'direccion_cliente.string'=>'La direccion debe contener una cadena de texto',
            'direccion_cliente.required'=>'La direccion es requerida',
            'direccion_cliente.min'=>'La direccion debe contener un minimo de 3 caracteres',
            'direccion_cliente.max'=>'Se excede la cantidad maxima de caracteres para la direccion',
            'telefono_cliente.regex'=>'El formato del telefono no es el correcto',
            'telefono_cliente.required'=>'El telefono es requerido',
            'correo_cliente.required'=>'El correo es requerido',
            'correo_cliente.email'=>'El correo no cumple el formato indicado',
            
        ];
    }
        //funcion para mostrar los mensajes de error
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
