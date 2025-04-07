import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function FormularioInscripcion() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [areasDisponibles, setAreasDisponibles] = useState([]);
  const [areasSeleccionadas, setAreasSeleccionadas] = useState(['']);
  const [archivoExcel, setArchivoExcel] = useState(null);

  // 🚀 Llamada al backend para obtener las áreas de competencia
  useEffect(() => {
    async function fetchAreas() {
      try {
        const response = await fetch('***URL_BACKEND/areas***');
        const data = await response.json();
        setAreasDisponibles(data);
      } catch (error) {
        console.error('Error al obtener áreas:', error);
      }
    }

    fetchAreas();
  }, []);

  const handleAreaChange = (index, valor) => {
    const nuevasAreas = [...areasSeleccionadas];
    nuevasAreas[index] = valor;
    setAreasSeleccionadas(nuevasAreas);
  };

  const añadirArea = () => {
    setAreasSeleccionadas([...areasSeleccionadas, '']);
  };

  const quitarArea = (index) => {
    const nuevas = [...areasSeleccionadas];
    nuevas.splice(index, 1);
    setAreasSeleccionadas(nuevas);
  };

  const handleArchivoChange = (e) => setArchivoExcel(e.target.files[0]);
  const handleDrop = (e) => {
    e.preventDefault();
    setArchivoExcel(e.dataTransfer.files[0]);
  };

  const handleSubmit = () => {
    const payload = {
      fechaNacimiento,
      areas: areasSeleccionadas,
      archivoExcel,
    };

    console.log('Datos listos para enviar al backend:', payload);

    // 📤 Aquí enviamos los datos al backend
    // await fetch('***URL_BACKEND/inscripciones***', { method: 'POST', body: JSON.stringify(payload) });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h2 className="text-lg font-semibold">Formulario de Inscripción</h2>

      {/* Nombre y Cédula */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Nombre del estudiante</label>
          <input type="text" className="w-full border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block text-sm">Número de Cédula de Identidad</label>
          <input type="text" className="w-full border rounded px-2 py-1" />
        </div>
      </div>

      {/* Fecha de nacimiento */}
      <div>
        <label className="block text-sm mb-1">Fecha de nacimiento</label>
        <div className="relative inline-block">
          <input
            readOnly
            type="text"
            value={fechaNacimiento ? fechaNacimiento.toLocaleDateString() : ''}
            className="border rounded px-2 py-1 w-48"
            onClick={() => setMostrarCalendario(!mostrarCalendario)}
            placeholder="mm/dd/yyyy"
          />
          {mostrarCalendario && (
            <div className="absolute z-10 bg-white shadow p-2">
              <Calendar
                onChange={(date) => {
                  setFechaNacimiento(date);
                  setMostrarCalendario(false);
                }}
                value={fechaNacimiento}
              />
            </div>
          )}
        </div>
      </div>

      {/* Áreas de competencia dinámicas */}
      <div>
        <label className="block text-sm mb-1">Áreas de Competencia</label>
        <div className="space-y-3">
          {areasSeleccionadas.map((area, index) => (
            <div key={index} className="flex items-center gap-2">
              <select
                value={area}
                onChange={(e) => handleAreaChange(index, e.target.value)}
                className="border px-2 py-1 rounded"
              >
                <option value="">Seleccionar área</option>
                {areasDisponibles.map((a) => (
                  <option key={a.nombre} value={a.nombre}>
                    {a.nombre}
                  </option>
                ))}
              </select>
              {areasSeleccionadas.length > 1 && (
                <button
                  onClick={() => quitarArea(index)}
                  className="text-red-600 text-sm"
                >
                  Quitar
                </button>
              )}
            </div>
          ))}
        </div>
        <button onClick={añadirArea} className="text-blue-600 text-sm mt-2">
          + Añadir Área
        </button>
      </div>

      {/* Tutores */}
      <div>
        <label className="block text-sm mb-1">Tutores</label>
        <button className="text-blue-600 text-sm">+ Agregar Tutor</button>
      </div>

      {/* Subir archivo Excel */}
      <div>
        <label className="block text-sm mb-2">Subir lista en archivo Excel</label>
        <div
          className="border-2 border-dashed p-6 text-center rounded-md cursor-pointer bg-gray-50"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p className="text-gray-500">Arrastra y suelta un archivo Excel o</p>
          <input type="file" accept=".xls,.xlsx" onChange={handleArchivoChange} className="mt-2" />
          {archivoExcel && (
            <p className="text-sm text-green-600 mt-1">Archivo: {archivoExcel.name}</p>
          )}
        </div>
      </div>

      {/* Botón de Envío */}
      <div>
        <button
          onClick={handleSubmit}
          disabled={!archivoExcel || areasSeleccionadas.includes('') || !fechaNacimiento}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Generar Boleta de Pago
        </button>
      </div>
    </div>
  );
}

export default FormularioInscripcion;
