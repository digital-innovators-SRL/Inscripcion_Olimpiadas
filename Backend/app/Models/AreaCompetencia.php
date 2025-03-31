<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreaCompetencia extends Model
{
    use HasFactory;
    protected $table = 'areas_competencia';
    protected $fillable = ['estudiante_id', 'area', 'nivel','costo','cedula_identidad', 'fecha_nacimiento','tutor_responsable','informacion_colegio'];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }
}
