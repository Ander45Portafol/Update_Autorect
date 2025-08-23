<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductoRequest extends FormRequest
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
    //reglas que definen las validaciones del formulario
    public function rules(): array
    {
        return [
            'nombre_producto' => 'string|required|max:75|min:10',
            'descripcion_producto' => 'string|required|max:250|min:20',
            'existencias' => 'integer|required',
            'precio_producto' => 'numeric|required',
            'imagen_producto' => 'integer',
            'id_modelo' => 'integer|required',
            'id_categoria' => 'integer|required',
            'estado_producto' => 'required|in:Excelente,Caducado,Oferta'
        ];
    }
    //funcion para guardar los mensajes de error de cada regla
    public function messages()
    {
        return [
            'nombre_producto.string' => 'El nombre del producto debe ser una cadena de caracteres',
            'nombre_producto.required' => 'Nombre del producto vacio',
            'nombre_producto.max' => 'se sobrepasa el maximo de palabras',
            'nombre_producto.min' => 'Se dede un escribir un minimo de 10 caracteres',
            'descripcion_producto.string' => 'La descripcion del producto debe contener una cadena de caracteres',
            'descripcion_producto.required' => 'Descripcion del producto vacia',
            'descripcion_producto.max' => 'se sobrepasa el maximo de palabras',
            'descripcion_producto.min' => 'Se dede un escribir un minimo de 20 caracteres',
            'existencias.integer' => 'El dato de existencias debe ser un valor numerico',
            'existencias.required' => 'La existencias de un producto es requerido',
            'imagen_producto.integer' => 'El valor de imagen para un producto, debe ser numerico',
            'id_modelo.integer' => 'El modelo debe ser numerico',
            'id_modelo.required' => 'EL modelo es requerido',
            'id_categoria.integer' => 'La categoria debe ser numerico',
            'id_categoria.required' => 'La categoria es requerida',
            'estado_producto.required' => 'El estado del producto es requerido',
            'estado_producto.in' => 'Estado del producto inexistente'
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
