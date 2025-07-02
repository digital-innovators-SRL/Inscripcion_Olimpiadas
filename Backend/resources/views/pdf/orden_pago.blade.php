<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Orden de Pago</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 40px;
        }

        .container {
            background-color: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h2 {
            margin: 0;
            color: #4F4F4F;
        }

        .header p {
            margin: 5px 0;
            font-size: 13px;
            color: #888;
        }

        .section {
            margin-bottom: 25px;
        }

        .section-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            color: #2F4858;
        }

        .info-line {
            margin: 6px 0;
        }

        .label {
            font-weight: bold;
            color: #444;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            margin-top: 40px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }

        .icon {
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2> Orden de Pago</h2>
            <p>ID de inscripción: <strong>{{ $inscripcion->id }}</strong></p>
        </div>

        <div class="section">
            <div class="section-title"> Información del Competidor</div>
            <p class="info-line"><span class="label">Nombre:</span> {{ $estudiante->nombres }} {{ $estudiante->apellidos }}</p>
            <p class="info-line"><span class="label">CI:</span> {{ $estudiante->ci }}</p>
            <p class="info-line"><span class="label">Correo electrónico:</span> {{ $estudiante->email }}</p>
        </div>

        <div class="section">
            <div class="section-title"> Detalles de la Competencia</div>
            <p class="info-line"><span class="label">Nombre:</span> {{ $competencia->nombre }}</p>
            <p class="info-line"><span class="label">Área:</span> {{ $competencia->areaCategoria->area->nombre }}</p>
            <p class="info-line"><span class="label">Categoría:</span> {{ $competencia->areaCategoria->categoria->nombre }}</p>
            <p class="info-line"><span class="label">Grado:</span> {{ $competencia->areaCategoria->grado }}</p>
            <p class="info-line"><span class="label">Fecha:</span> {{ $competencia->fecha_competencia }}</p>
            <p class="info-line"><span class="label">Monto a pagar:</span> Bs. {{ number_format($competencia->monto, 2) }}</p>
        </div>

        <div class="section">
            <div class="section-title"> Información del Tutor</div>
            <p class="info-line"><span class="label">Nombre del tutor:</span> {{ $inscripcion->nombre_tutor }}</p>
            <p class="info-line"><span class="label">Email de contacto:</span> {{ $inscripcion->contacto_email }}</p>
            <p class="info-line"><span class="label">Celular de contacto:</span> {{ $inscripcion->contacto_celular ?? '—' }}</p>
        </div>

        <div class="footer">
            © {{ now()->year }} Sistema de Inscripciones - Universidad Mayor de San Simón
        </div>
    </div>
</body>
</html>