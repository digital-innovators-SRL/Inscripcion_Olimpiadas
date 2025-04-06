<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscripción</title>
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
            margin-left: 250px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            border: 1px solid #D9D9D9;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            font-weight: bold;
        }
        .input-group input, .input-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #D9D9D9;
            border-radius: 5px;
        }
        .button {
            background: #A9B2AC;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .button:hover {
            background: #8a958f;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Inscripción</h1>
        <div class="card">
            <h2>Formulario de Inscripción</h2>
            <form id="registrationForm">
                <!-- Información del estudiante -->
                <div class="input-group">
                    <label for="name">Nombre del estudiante</label>
                    <input type="text" id="name" required>
                </div>
                <div class="input-group">
                    <label for="id">Número de Cédula de Identidad</label>
                    <input type="text" id="id" required>
                </div>
                <div class="input-group">
                    <label for="birthdate">Fecha de nacimiento</label>
                    <input type="date" id="birthdate" required>
                </div>

                <!-- Áreas de competencia -->
                <h3>Áreas de Competencia</h3>
                <div class="input-group">
                    <label for="area">Área de competencia</label>
                    <select id="area" required>
                        <option value="">Seleccionar área</option>
                        <option value="matematicas">Matemáticas</option>
                        <option value="fisica">Física</option>
                        <option value="quimica">Química</option>
                        <option value="biologia">Biología</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="level">Nivel/Categoría</label>
                    <select id="level" required>
                        <option value="">Seleccionar nivel</option>
                        <option value="basico">Básico</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                    </select>
                </div>

                <!-- Tutores -->
                <h3>Tutores</h3>
                <div class="input-group">
                    <label for="tutorName">Nombre del tutor</label>
                    <input type="text" id="tutorName" required>
                </div>
                <div class="input-group">
                    <label for="relationship">Parentesco</label>
                    <input type="text" id="relationship" required>
                </div>
                <div class="input-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" id="phone" required>
                </div>

                <br><br>
                <!-- Botón para enviar el formulario -->
                <button type="submit" class="button">Generar Boleta de Pago</button>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener áreas de competencia
            const areas = [{
                competencia: document.getElementById('area').value,
                nivel: document.getElementById('level').value
            }];

            // Obtener tutores
            const tutors = [{
                nombre: document.getElementById('tutorName').value,
                parentesco: document.getElementById('relationship').value,
                telefono: document.getElementById('phone').value
            }];

            // Crear objeto con los datos a enviar
            const data = {
                name: document.getElementById('name').value,
                id: document.getElementById('id').value,
                birthdate: document.getElementById('birthdate').value,
                areas: areas,
                tutors: tutors
            };

            // Mostrar los datos en la consola
            console.log('Datos del formulario:', data);

            // Validar que al menos un área o tutor haya sido agregado
            if (areas.length === 0) {
                alert('Por favor, agregue al menos una área de competencia.');
                return;
            }
            if (tutors.length === 0) {
                alert('Por favor, agregue al menos un tutor.');
                return;
            }

            // Enviar los datos al servidor mediante Fetch API
            fetch('http://127.0.0.1:8000/inscripcion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                // Comprobar si el mensaje contiene éxito
                if (data.message === 'Inscripción realizada con éxito') {
                    alert('Inscripción exitosa. ¡Boleta generada!');
                } else {
                    alert('Hubo un error al realizar la inscripción. Por favor, inténtelo nuevamente.');
                }
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
                alert('Error al enviar el formulario. Inténtalo nuevamente.');
            });
        });
    </script>
</body>
</html>
