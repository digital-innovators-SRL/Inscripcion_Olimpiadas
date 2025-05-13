<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Exception;

class HandleJwtExceptions
{
    public function handle($request, Closure $next)
    {
        try {
            return $next($request);
        } catch (TokenExpiredException $e) {
            return response()->json(['message' => 'El token ha expirado. Por favor, vuelve a iniciar sesión.'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['message' => 'El token es inválido.'], 401);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token no encontrado.'], 401);
        } catch (Exception $e) {
            return response()->json(['message' => 'Error desconocido de autenticación.'], 401);
        }
    }
}
