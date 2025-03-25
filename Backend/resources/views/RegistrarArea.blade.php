<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuración del Sistema</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F2EEE3;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .container {
            flex-grow: 1;
            padding: 20px;
            margin-left: 260px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border: 1px solid #D9D9D9;
            margin-bottom: 20px;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .input-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
        }
        .button {
            background-color: #C8B7A6;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #B09E8D;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Configuración del Sistema</h1>
            <div class="user-info">Admin User</div>
        </div>
        <div class="card">
            <h2>Áreas de Competencia</h2>
            <div class="input-group">
                <label>Nombre del Área</label>
                <input type="text" id="areaName" placeholder="Ej: Matemáticas">
            </div>
            <div class="input-group">
                <label>Costo (Bs.)</label>
                <input type="number" id="areaCost" placeholder="Ej: 350">
            </div>
            <button class="button" onclick="addArea()">Agregar Área</button>
            <ul id="areaList"></ul>
        </div>
        <div class="card">
            <h2>Datos Mínimos para Inscripción</h2>
            <div><input type="checkbox" checked> Cédula de Identidad</div>
            <div><input type="checkbox" checked> Fecha de Nacimiento</div>
            <div><input type="checkbox" checked> Tutor Responsable</div>
            <div><input type="checkbox" checked> Información del Colegio</div>
            <button class="button">Guardar Configuración</button>
        </div>
    </div>
    <script>
        function addArea() {
            const name = document.getElementById("areaName").value;
            const cost = document.getElementById("areaCost").value;
            if (name && cost) {
                const areaList = document.getElementById("areaList");
                const li = document.createElement("li");
                li.textContent = `${name} - Bs. ${cost}`;
                areaList.appendChild(li);
                document.getElementById("areaName").value = "";
                document.getElementById("areaCost").value = "";
            }
        }
    </script>
</body>
</html>
