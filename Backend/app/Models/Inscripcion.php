<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inscripcion extends Model
{
    protected $table = 'inscripciones';
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

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }

    public function competencia()
    {
        return $this->belongsTo(Competencia::class);
    }

    public function tutor()
    {
        return $this->belongsTo(User::class, 'tutor_id');
    }
}
