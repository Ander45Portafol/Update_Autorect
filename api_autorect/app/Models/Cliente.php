<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_cliente';
    protected $keyType = 'int'; // Tipo de la llave primaria

    protected $fillable = [
        'id_cliente',
        'nombre_cliente',
        'apellido_cliente',
        'direccion_cliente',
        'telefono_cliente',
        'correo_cliente',
        'usuario_cliente',
        'clave_cliente',
        'tipo_documento',
        'estado_cliente',
        'tipo_membresia',
        'codigo_membresia',
        'documento_cliente'
    ];
    public $timestamps = false;
}
