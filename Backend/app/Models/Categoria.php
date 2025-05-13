<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $fillable = ['nombre'];

    // Relaciones

    public function areaCategorias()
    {
        return $this->hasMany(AreaCategoria::class);
    }

    public function areas()
    {
        return $this->belongsToMany(Area::class, 'area_categoria')
                    ->withPivot('grado')
                    ->withTimestamps();
    }
}
