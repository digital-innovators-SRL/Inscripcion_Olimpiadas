<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequiredField extends Model
{
    protected $fillable = ['field_name', 'field_type', 'is_required'];
}
