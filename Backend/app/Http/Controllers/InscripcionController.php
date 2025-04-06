<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiante;
use App\Models\AreaCompetencia;
use App\Models\Tutor;
use Illuminate\Support\Facades\DB;

class InscripcionController extends Controller
{
    public function inscribir(Request $request)
{
    // Validación del JSON recibido
    $validated = $request->validate([
        'name' => 'required|string|max:255', // Cambié 'student.name' por 'name'
        'id' => 'required|string|max:50|unique:estudiantes,cedula',
        'birthdate' => 'required|date',
        'areas' => 'array',
        'areas.*.competencia' => 'required|string|max:100', // Cambié 'areas.*.area' por 'areas.*.competencia'
        'areas.*.nivel' => 'required|string|max:50',
        'tutors' => 'array',
        'tutors.*.nombre' => 'required|string|max:255', // Cambié 'tutors.*.name' por 'tutors.*.nombre'
        'tutors.*.parentesco' => 'required|string|max:100',
        'tutors.*.telefono' => 'required|string|max:20',
    ]);

    try {
        DB::beginTransaction();

        // Guardar el estudiante
        $estudiante = Estudiante::create([
            'nombre' => $validated['name'], // Usé 'name' en lugar de 'student.name'
            'cedula' => $validated['id'], // Usé 'id' en lugar de 'student.id'
            'fecha_nacimiento' => $validated['birthdate'],
        ]);

        // Guardar las áreas de competencia
        if (isset($validated['areas'])) {
            foreach ($validated['areas'] as $area) {
                AreaCompetencia::create([
                    'estudiante_id' => $estudiante->id,
                    'area' => $area['competencia'], // Usé 'competencia' en lugar de 'area'
                    'nivel' => $area['nivel'],
                ]);
            }
        }

        // Guardar los tutores
        if (isset($validated['tutors'])) {
            foreach ($validated['tutors'] as $tutor) {
                Tutor::create([
                    'estudiante_id' => $estudiante->id,
                    'nombre' => $tutor['nombre'], // Usé 'nombre' en lugar de 'name'
                    'parentesco' => $tutor['parentesco'],
                    'telefono' => $tutor['telefono'],
                ]);
            }
        }

        DB::commit();
        return response()->json(['message' => 'Inscripción realizada con éxito'], 201);

    } catch (\Exception $e) {
        DB::rollBack();
        // Devolver error si algo sale mal
        return response()->json(['message' => 'Error en la inscripción', 'error' => $e->getMessage()], 500);
    }
}

}