<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_empleado'; // Nombre de la llave primaria
    protected $keyType = 'int'; // Tipo de la llave primaria
    protected $fillable=[
        'id_empleado',
        'nombre_empleado',
        'apellido_empleado',
        'correo_empleado',
        'direccion_empleado',
        'estado_empleado',
        'telefono_empleado',
        'fecha_nac_empleado',
        'carne_empleado',
        'tipo_documento',
        'numero_documento',
        'area_trabajo'
    ];
    public $timestamps = false;

    //Le indicamos al modelo del empleado que un usuario depende de este registro
    public function user()
    {
        return $this->hasOne(Usuario::class,foreignKey: 'id_empleado');
    }
}
