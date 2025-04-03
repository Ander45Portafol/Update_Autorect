<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_modelo'; // Nombre de la llave primaria
    protected $keyType = 'int'; // Tipo de la llave primaria

    protected $fillable=[
        'id_modelo',
        'nombre_modelo',
        'id_marca'
    ];

    public $timestamps = false; // Deshabilita las marcas de tiempo


    public function marca()//Relacion para con la llave foranea de la tabla marca
    {
        return $this->belongsTo(Marca::class);
    }
    public function producto()//Referencia a que tendra una relacion con la tabla de modelo
    {
        return $this->hasMany(Producto::class);
    }
}
