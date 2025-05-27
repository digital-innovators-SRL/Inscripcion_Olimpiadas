<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inscripcion extends Model
{
    public $timestamps = false; // Si solo usas created_at manual

    protected $fillable = [
        'estudiante_id',
        'competencia_id',
        'tutor_id',
        'contacto_email',
        'contacto_celular',
        'nombre_tutor',
        'comprobante_pago',
        'habilitado',
        'created_at',
    ];

    // Relaciones

    public function areaCategoria()
    {
        return $this->belongsTo(AreaCategoria::class, 'area_id', 'area_id');
    }

    public function areasCompetencia()
    {
        return $this->hasMany(AreasCompetencia::class, 'area', 'area_id');
    }

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'estudiante_id');
    }
}
