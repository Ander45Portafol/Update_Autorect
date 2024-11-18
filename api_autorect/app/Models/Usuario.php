<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Usuario extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     *
     */
    protected $primaryKey = 'id_usuario'; // Nombre de la llave primaria
    protected $keyType = 'int';
     protected $fillable = [
        'id_usuario',
        'nombre_usuario',
        'clave_usuario',
        'imagen_usuario',
        'id_empleado',
        'tipo_usuario',
        'estado_usuario'
    ];
    //Creamos dependencia hacia la llave primaria del modelo de empleado
    public function empleado()
    {
        return $this->belongsTo(Empleado::class,'id_empleado');
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'clave_usuario',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public $timestamps = false;
    public function getJWTCustomClaims(){
        return [];
    }
}
