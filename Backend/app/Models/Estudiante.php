<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Estudiante extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'email',
        'apellidos',
        'nombres',
        'ci',
        'fecha_nacimiento',
        'colegio',
        'curso',
        'departamento',
        'provincia',
        'password',
    ];
    protected $hidden = ['password'];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    // Relaciones

    public function inscripciones()
    {
        return $this->belongsTo(Inscripcion::class);

    }
    public function areas()
    {
        return $this->hasMany(AreaCompetencia::class);
    }

    public function tutores()
    {
        return $this->hasMany(Tutor::class);
    }
}
