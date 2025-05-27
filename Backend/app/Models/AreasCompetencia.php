<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreasCompetencia extends Model
{
    use HasFactory;

    protected $table = 'areas_competencia';

    protected $fillable = [
        'estudiante_id',
        'area',
        'nivel',
    ];

    // Relación con estudiante (asumiendo que tienes modelo Estudiante)
    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'estudiante_id');
    }
}
