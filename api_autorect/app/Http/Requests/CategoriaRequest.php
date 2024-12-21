<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CategoriaRequest extends FormRequest
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
            'nombre_categoria'=>'required|string',
            'descripcion_categoria'=>'required|string'
        ];
    }

    public function messages(){
        return[
            'nombre_categoria.required'=>'El nombre de la categoria es obligatorio.',
            'nombre_categoria.string'=>'Solo se permite una cadena de texto.',
            'descripcion_categoria.required'=>'Es obligatoria una descripcion de la categoria.',
            'descripcion_categoria.string'=>'Solo se permite una cadena de texto.'
        ];
    }
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
