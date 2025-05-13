<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Competencia extends Model
{
    protected $fillable = [
        'tutor_id',
        'area_categoria_id',
        'nombre',
        'fecha_competencia',
        'fecha_fin_inscripcion',
        'max_competidores',
        'monto',
    ];

    // Relaciones

    public function tutor()
    {
        return $this->belongsTo(User::class, 'tutor_id');
    }

    public function areaCategoria()
    {
        return $this->belongsTo(AreaCategoria::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }
}
