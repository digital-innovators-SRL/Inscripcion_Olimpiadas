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
