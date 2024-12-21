<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModeloRequest extends FormRequest
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
            'nombre_modelo'=>'required|string|max:150|min:5',
            'id_marca'=>'requerid|integer'
        ];
    }
    public function messages():array{
        return [
            'nombre_modelo.required'=>'The model name is required',
            'nombre_modelo.string'=>'The model name must be a string',
            'nombre_modelo.max'=>'The max characters is 150',
            'nombre_modelo.min'=>'The min characters is 5',
            'id_marca.required'=>'Brand is required',
            'id_marca.integer'=>'The id of brand must be a numeric data'
        ];
    }
}
