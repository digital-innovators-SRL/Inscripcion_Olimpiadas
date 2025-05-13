<?php

namespace App\Http\Controllers\Organizador;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrganizadorDashboardController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Bienvenido Organizador']);
    }
}
