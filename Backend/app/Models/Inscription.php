<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    protected $fillable = ['name', 'email', 'additional_data'];

    protected $casts = [
        'additional_data' => 'array',
    ];
}
