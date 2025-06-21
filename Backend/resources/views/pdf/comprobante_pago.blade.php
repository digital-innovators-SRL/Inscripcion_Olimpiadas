<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Orden de Pago</title>
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
            text-align: end;
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

        .footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            margin-top: 40px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2> UNIVERSIDAD MAYOR DE SAN SIMÓN </h2>
            <p>Número de transacción: {{ $inscripcion->id }}</p>
        </div>

        <div class="section">
            <h2 class="info-line">COMPROBANTE DE PAGO</h2>
            <h3>ID DE INSCRIPCIÓN</h3>
            <h1>{{ $inscripcion->id }}</h1>
            <h3>TUTOR</h3>
            <h1>{{ $inscripcion->nombre_tutor }}</h1>
            <h3>MONTO PAGADO</h3>
            <h1>{{ number_format($competencia->monto, 2) }}</h1>
        </div>
        <div class="footer">
            © {{ now()->year }} Sistema de Inscripciones - Universidad Mayor de San Simón
        </div>
    </div>
</body>
</html>