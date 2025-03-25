<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;
    protected $table = 'estudiantes';
    protected $fillable = [
        'nombre',
        'cedula',
        'fecha_nacimiento',
    ];

    public function areas()
    {
        return $this->hasMany(AreaCompetencia::class);
    }

    public function tutores()
    {
        return $this->hasMany(Tutor::class);
    }
}
