<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $fillable = ['nombre', 'descripcion', 'costo', 'max_estudiantes', 'grados'];
    protected $casts = [
        'grados' => 'array',
    ];
    // Relaciones

    public function areaCategorias()
    {
        return $this->hasMany(AreaCategoria::class);
    }

    public function categorias()
    {
        return $this->belongsToMany(Categoria::class, 'area_categoria')
                    ->withPivot('grado')
                    ->withTimestamps();
    }
}


