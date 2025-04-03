<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDOException;

class ConnectionController extends Controller
{
    //
    public function validateConnection(){
        try{
            $connection=DB::connection()->getPdo();
            if($connection){
                return response()->json([
                    'success' => true,
                    'message' => 'La conexión a la base de datos es exitosa.'
                ]   , 200);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Error al conectar con la base de datos.',
                ], 500);
            }

        }catch(PDOException  $e){
            return response()->json([
                'success' => false,
                'message' => 'Error al conectar con la base de datos.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
