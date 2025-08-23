<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_producto'; // Nombre de la llave primaria
    protected $keyType = 'int'; // Tipo de la llave primaria
    protected $fillable=[
        'id_producto',
        'nombre_producto',
        'descripcion_producto',
        'existencias',
        'precio_producto',
        'imagen_principal',
        'id_modelo',
        'id_categoria',
        'estado_producto'
    ];
    public $timestamps = false; // Deshabilita las marcas de tiempo
    public function modelo()
    {
        return $this->belongsTo(Modelo::class, 'id_modelo');
    }
}
