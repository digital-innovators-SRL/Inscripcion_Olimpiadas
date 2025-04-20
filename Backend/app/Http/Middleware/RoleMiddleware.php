<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = auth('api')->user(); // Asegura que uses el guard 'api'

        if (!$user || !in_array($user->role, $roles)) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        return $next($request);
    }
}
