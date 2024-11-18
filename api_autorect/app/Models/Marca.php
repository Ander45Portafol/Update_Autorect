<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;
    protected $keyType = 'int'; // Tipo de la llave primaria

    protected $fillabel=[
        'id_marca',
        'marca'
    ];
    public $timestamps = false; // Deshabilita las marcas de tiempo

public function modelo()//Referencia a que tendra una relacion con la tabla de modelo
    {
        return $this->hasMany(Modelo::class);
    }
}
