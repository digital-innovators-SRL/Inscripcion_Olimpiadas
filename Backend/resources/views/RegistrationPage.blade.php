<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Tutor</title>
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
        .input-group input {
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
        .back-btn {
            background: #d3d3d3;
            color: #333;
            margin-bottom: 15px;
        }
        .back-btn:hover {
            background: #b0b0b0;
        }
    </style>
</head>
<body>
    <div class="container">
        <button class="button back-btn" onclick="window.location.href='/'">Atrás</button>
        <h1>Registro de Tutor</h1>
        <div class="card">
            <h2>Formulario de Tutor</h2>
            <form id="tutorForm">
                <div class="input-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" id="name" required>
                </div>
                <div class="input-group">
                    <label for="celular">Celular</label>
                    <input type="tel" id="celular" required>
                </div>
                <div class="input-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" required>
                </div>
                <input type="hidden" id="role" value="Tutor">
                <br>
                <button type="submit" class="button">Registrar Tutor</button>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('tutorForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const data = {
                name: document.getElementById('name').value,
                celular: document.getElementById('celular').value,
                role: document.getElementById('role').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };

            fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    alert('Tutor registrado exitosamente.');
                    window.location.href = '/';
                } else {
                    alert('Hubo un error al registrar el tutor. Por favor, inténtelo nuevamente.');
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
