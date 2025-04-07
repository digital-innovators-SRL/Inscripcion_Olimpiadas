<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CostConfiguration extends Model
{
    use HasFactory;

    protected $fillable = ['area_id', 'level_id', 'cost'];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
