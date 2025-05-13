<!DOCTYPE html>
<html>
<head>
    <title>Inscripciones</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { padding: 10px; border: 1px solid #ccc; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Listado de Inscripciones</h1>
    <table>
        <thead>
            <tr>
                <th>Estudiante</th>
                <th>CI</th>
                <th>Email</th>
                <th>Competencia</th>
                <th>Área</th>
                <th>Categoría</th>
                <th>Curso</th>
                <th>Tutor</th>
                <th>Contacto Celular</th>
                <th>Contacto Email</th>
            </tr>
        </thead>
        <tbody>
@foreach($inscripciones as $inscripcion)
<tr>
    <td>{{ $inscripcion->nombres }} {{ $inscripcion->apellidos }}</td>
    <td>{{ $inscripcion->ci }}</td>
    <td>{{ $inscripcion->email }}</td>
    <td>{{ $inscripcion->competencia }}</td>
    <td>{{ $inscripcion->area }}</td>
    <td>{{ $inscripcion->categoria }}</td>
    <td>{{ $inscripcion->curso }}</td>
    <td>{{ $inscripcion->tutor }}</td>
    <td>{{ $inscripcion->contacto_celular }}</td>
    <td>{{ $inscripcion->contacto_email }}</td>
</tr>
@endforeach

        </tbody>
    </table>
</body>
</html>
