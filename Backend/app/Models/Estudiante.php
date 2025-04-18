<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
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
    ];

    // Relaciones

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }
}
