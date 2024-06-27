<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;

    protected $fillabel=[
        'nombre_marca'
    ];
    public function modelo()
    {
        return $this->hasMany(Modelo::class);
    }
}
