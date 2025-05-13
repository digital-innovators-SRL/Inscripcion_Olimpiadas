<!DOCTYPE html>
<html>
<head>
    <title>Importar Inscripciones</title>
</head>
<body>
    <h2>Importar Inscripciones desde Excel</h2>

    @if(session('success'))
        <div style="color: green;">{{ session('success') }}</div>
    @endif

    @if(session('error'))
        <div style="color: red;">{{ session('error') }}</div>
    @endif

    <form action="{{ url('/importar-inscripciones') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <label for="archivo">Selecciona archivo Excel:</label>
        <input type="file" name="archivo" required>
        <br><br>
        <button type="submit">Importar</button>
    </form>
</body>
</html>
