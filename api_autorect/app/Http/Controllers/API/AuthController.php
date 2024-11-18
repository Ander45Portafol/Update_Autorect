<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    //
    public function register_client(Request $request){
        $validator=Validator::make($request->all(),[
            'nombre_cliente'=>'required|string|max:150',
            'apellido_cliente'=>'required|string|max:150',
            'direccion_cliente'=>'required|string',
            'correo_cliente'=>'required|string',
            'usuario_cliente'=>'required|string',
            'clave_usuario'=>'string|required|max:100',
            'tipo_documento'=>'required|string',
            'numero_documento'=>'string|required',
            'estado_cliente'=>'required|string'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),422);
        }
        $client=Cliente::create([
            'nombre_cliente'=>$request->nombre_cliente,
            'apellido_cliente'=>'required|string|max:150',
            'direccion_cliente'=>'required|string',
            'correo_cliente'=>'required|string',
            'usuario_cliente'=>'required|string',
            'clave_cliente'=>Hash::make($request->clave_cliente),
            'tipo_documento'=>'required|string',
            'numero_documento'=>'string|required',
            'estado_cliente'=>'required|string'
        ]);

                // Generar el token JWT para el usuario
                $token = JWTAuth::fromUser($client);

                return response()->json([
                    'user' => $client,
                    'token' => $token,
                ], 201);
    }
}
