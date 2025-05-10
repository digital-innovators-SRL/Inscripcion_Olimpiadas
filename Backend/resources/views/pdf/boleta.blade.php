<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Boleta de Pago</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 14px;
            color: #333;
        }

        .container {
            padding: 30px;
            border: 1px solid #ccc;
            width: 100%;
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
        }

        .section {
            margin-bottom: 20px;
        }

        .section h2 {
            font-size: 18px;
            margin-bottom: 10px;
            color: #555;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
        }

        .data-table th,
        .data-table td {
            padding: 8px 12px;
            border: 1px solid #ddd;
        }

        .data-table th {
            background-color: #f2f2f2;
            text-align: left;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Boleta de Pago</h1>

        <div class="section">
            <h2>Datos del Estudiante</h2>
            <table class="data-table">
                <tr>
                    <th>Nombre</th>
                    <td>{{ $inscripcion->estudiante->nombres }} {{ $inscripcion->estudiante->apellidos }}</td>
                </tr>
                <tr>
                    <th>C.I.</th>
                    <td>{{ $inscripcion->estudiante->ci }}</td>
                </tr>
                <tr>
                    <th>Colegio</th>
                    <td>{{ $inscripcion->estudiante->colegio }}</td>
                </tr>
                <tr>
                    <th>Curso</th>
                    <td>{{ $inscripcion->estudiante->curso }}</td>
                </tr>
            </table>
        </div>

        <div class="section">
            <h2>Datos de la Competencia</h2>
            <table class="data-table">
                <tr>
                    <th>Área</th>
                    <td>{{ $inscripcion->competencia->areaCategoria->area->nombre }}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{{ $inscripcion->competencia->areaCategoria->categoria->nombre }}</td>
                </tr>
                <tr>
                    <th>Grado</th>
                    <td>{{ $inscripcion->competencia->areaCategoria->grado }}</td>
                </tr>
                <tr>
                    <th>Nombre de Competencia</th>
                    <td>{{ $inscripcion->competencia->nombre }}</td>
                </tr>
                <tr>
                    <th>Fecha de Competencia</th>
                    <td>{{ \Carbon\Carbon::parse($inscripcion->competencia->fecha_competencia)->format('d/m/Y') }}</td>
                </tr>
                <tr>
                    <th>Monto</th>
                    <td>Bs. {{ number_format($inscripcion->competencia->monto, 2, '.', '') }}</td>
                </tr>
            </table>
        </div>

        <div class="section">
            <h2>Detalles de la Boleta</h2>
            <table class="data-table">
                <tr>
                    <th>Código de Orden</th>
                    <td>ORD-{{ $inscripcion->id }}-{{ $inscripcion->estudiante->id }}</td>
                </tr>
                <tr>
                    <th>Fecha de Emisión</th>
                    <td>{{ \Carbon\Carbon::parse($inscripcion->created_at)->format('d/m/Y') }}</td>
                </tr>
            </table>
        </div>

        <div class="footer">
            © {{ now()->year }} Sistema de Inscripciones - Universidad Mayor de San Simón
        </div>
    </div>
</body>
</html>
