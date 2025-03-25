<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreaCompetencia extends Model
{
    use HasFactory;
    protected $table = 'areas_competencia';
    protected $fillable = ['estudiante_id', 'area', 'nivel'];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }
}
