<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use Exception;
use Illuminate\Http\Request;

class EmpleadoController extends Controller
{
    //
    public function index()
    {
        try {
            $employee = Empleado::orderBy("nombre_empleado")->get();
            if ($employee->isEmpty()) {
                $message = [
                    'message' => 'No existen registros'
                ];
                return response()->json($message);
            } else {
                $employee_data = [
                    'data' => $employee,
                    'message'=>'Los datos han sido cargados perfectamente'
                ];
                return response()->json($employee_data);
            }
        } catch (Exception) {
            $error = [
                'message' => 'No se logro establecer una conexion con la base de datos'
            ];
            return response()->json($error);
        }
    }
    public function store(Request $request){

    }
}
