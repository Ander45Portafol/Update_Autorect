<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Usuario;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //Esto nos ayuda para restringuir el acceso del controlador
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try {
            $data = [
                'nombre_usuario' => $request->nombre_usuario,
                'password' => $request->clave_usuario // 'password' es clave aquí para que tome el metodo de auth
            ];
            $user = Usuario::where('nombre_usuario', $data['nombre_usuario'])->first();

            if (!Hash::check($data['password'], $user->clave_usuario)) {
                return response()->json(['error' => 'Credenciales incorrectas'], 401);
            }
            // Generar token JWT
            if (!$token = auth()->attempt($data)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'No se pudo generar el token'
                ], 401);
            }
            return $this->respondWithToken($token);

            //return response()->json($answer);
        } catch (Exception $e) {
            return response()->json($e);
        }
    }
    public function logout(Request $request){
        try {
            // Invalidar el token actual
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                'success' => true,
                'message' => 'Se cerro sesión'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo cerrar la sesión, token inválido o ausente'
            ], 500);
        }
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        // return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'llave_acceso' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }
}
