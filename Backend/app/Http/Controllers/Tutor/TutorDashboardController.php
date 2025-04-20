<?php

namespace App\Http\Controllers\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TutorDashboardController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Bienvenido Tutor']);
    }
}
