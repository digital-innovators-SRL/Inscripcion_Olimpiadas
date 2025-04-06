<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;
    protected $table = 'tutores';
    protected $fillable = ['estudiante_id', 'nombre', 'parentesco', 'telefono'];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }
}
