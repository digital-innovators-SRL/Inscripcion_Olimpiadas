<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AreaCategoria extends Model
{
    protected $table = 'area_categoria';

    protected $fillable = [
        'area_id',
        'categoria_id',
        'grado',
    ];

    // Relaciones

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function competencias()
    {
        return $this->hasMany(Competencia::class);
    }
}
