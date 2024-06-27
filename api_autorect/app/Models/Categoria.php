<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_categoria'; // Nombre de la llave primaria
    protected $keyType = 'int'; // Tipo de la llave primaria


    protected $fillable=[
        'id_categoria',
        'nombre_categoria',
        'descripcion_categoria'
    ];
    public $timestamps = false; // Deshabilita las marcas de tiempo

}
