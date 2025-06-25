<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\Estudiante;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth('api')->user());
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Sesión cerrada correctamente']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth('api')->user()
        ]);
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'celular' => 'required',
            'role' => 'string|required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'celular' => $request->celular,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'Usuario registrado correctamente',
            'user' => $user
        ], 201);
    }

    public function loginEstudiante(Request $request)
    {
        /*$credentials = $request->only('email', 'password');

        if (!$token = auth('estudiante')->attempt($credentials)) {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('estudiante')->factory()->getTTL() * 60,
            'user' => auth('estudiante')->user(),
            'role' => 'estudiante'
        ]);*/
        Log::info('Entrando al login de estudiante');
        Log::info($request->all());
        try {
            $credentials = $request->only('email', 'password');

            if (!$token = auth('estudiante')->attempt($credentials)) {
                return response()->json(['error' => 'Credenciales inválidas'], 401);
            }

            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth('estudiante')->factory()->getTTL() * 60,
                'user' => auth('estudiante')->user(),
                'role' => 'estudiante'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error interno',
                'message' => $e->getMessage(),
                'trace' => $e->getTrace()
            ], 500);
        }
    }

    public function registerEstudiante(Request $request)
    {
        Log::info($request->all());
        $request->validate([
            'email' => 'required|email|unique:estudiantes,email',
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'ci' => 'required|string|max:30',
            'fecha_nacimiento' => 'required|date',
            'colegio' => 'required|string|max:150',
            'curso' => 'required|string|max:100',
            'departamento' => 'required|string|max:100',
            'provincia' => 'required|string|max:100',
            'password' => 'required|min:6|confirmed'
        ], [
            'email.unique' => 'Estudiante ya existe con ese email.',
            'nombres.required' => 'El nombre es obligatorio.',
            'apellidos.required' => 'El apellido es obligatorio.',
            'ci.required' => 'El código de identificación es obligatorio.',
            'fecha_nacimiento.required' => 'La fecha de nacimiento es obligatoria.',
            'colegio.required' => 'El colegio es obligatorio.',
            'curso.required' => 'El curso es obligatorio.',
            'departamento.required' => 'El departamento es obligatorio.',
            'provincia.required' => 'La provincia es obligatoria.',
            'password.required' => 'La contraseña es obligatoria.',
            'password.min' => 'La contraseña debe tener al menos 6 caracteres.',
            'password.confirmed' => 'La contraseña no coincide.'
        ]);

        $estudiante = Estudiante::create([
            'email' => $request->email,
            'nombres' => $request->nombres,
            'apellidos' => $request->apellidos,
            'ci' => $request->ci,
            'fecha_nacimiento' => $request->fecha_nacimiento,
            'colegio' => $request->colegio,
            'curso' => $request->curso,
            'departamento' => $request->departamento,
            'provincia' => $request->provincia,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'message' => 'Estudiante registrado correctamente',
            'estudiante' => $estudiante
        ], 201);
    }

    public function meEstudiante()
    {
        return response()->json(auth('estudiante')->user());
    }

}
