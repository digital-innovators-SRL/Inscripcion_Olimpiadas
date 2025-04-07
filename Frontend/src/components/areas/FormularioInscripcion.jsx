import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function FormularioInscripcion() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [areasSeleccionadas, setAreasSeleccionadas] = useState([]);
  const [archivoExcel, setArchivoExcel] = useState(null);

  const todasLasAreas = ['Matemáticas', 'Ciencias', 'Arte', 'Historia'];

  const handleAreaChange = (area) => {
    setAreasSeleccionadas((prev) =>
      prev.includes(area)
        ? prev.filter((a) => a !== area)
        : [...prev, area]
    );
  };

  const handleArchivoChange = (e) => {
    setArchivoExcel(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setArchivoExcel(e.dataTransfer.files[0]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h2 className="text-lg font-semibold">Formulario de Inscripción</h2>

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

      <div>
        <label className="block text-sm mb-1">Áreas de Competencia</label>
        <div className="space-y-2">
          {todasLasAreas.map((area) => (
            <label key={area} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={areasSeleccionadas.includes(area)}
                onChange={() => handleAreaChange(area)}
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Tutores</label>
        <button className="text-blue-600 text-sm">+ Agregar Tutor</button>
        {/* Aquí puedes agregar funcionalidad para manejar múltiples tutores */}
      </div>

      <div>
        <label className="block text-sm mb-2">Subir lista en archivo Excel</label>
        <div
          className="border-2 border-dashed p-6 text-center rounded-md cursor-pointer bg-gray-50"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p className="text-gray-500">Arrastra y suelta un archivo Excel o</p>
          <input type="file" accept=".xls,.xlsx" onChange={handleArchivoChange} className="mt-2" />
          {archivoExcel && <p className="text-sm text-green-600 mt-1">Archivo: {archivoExcel.name}</p>}
        </div>
      </div>

      <div>
        <button
          disabled={!archivoExcel || areasSeleccionadas.length === 0 || !fechaNacimiento}
          className="bg-gray-300 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Generar Boleta de Pago
        </button>
      </div>
    </div>
  );
}

export default FormularioInscripcion;
