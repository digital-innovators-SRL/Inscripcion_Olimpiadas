<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'email', 
        'phone',
        'additional_data',
        'area_id',
        'level_id',
        'cost',
        'status'
    ];

    protected $casts = [
        'additional_data' => 'array',
    ];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
