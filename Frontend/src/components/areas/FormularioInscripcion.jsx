import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FormularioInscripcion() {
  const LIMITE_AREAS = 3;

  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [areasDisponibles, setAreasDisponibles] = useState([]);
  const [areasSeleccionadas, setAreasSeleccionadas] = useState(['']);
  const [mensajeErrorArea, setMensajeErrorArea] = useState('');
  const [tutores, setTutores] = useState([{ nombre: '', celular: '', correo: '' }]);
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [ciEstudiante, setCiEstudiante] = useState('');

  useEffect(() => {
    async function fetchAreas() {
      try {
        const response = await fetch('http://localhost:3000/api/areas'); // <-- ajusta la URL según tu backend
        const data = await response.json();
        setAreasDisponibles(data);
      } catch (error) {
        console.error('Error al obtener áreas:', error);
        alert('❌ Error al cargar las áreas de competencia.');
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
    if (areasSeleccionadas.length >= LIMITE_AREAS) {
      setMensajeErrorArea(`Solo puedes seleccionar hasta ${LIMITE_AREAS} áreas.`);
      return;
    }
    setMensajeErrorArea('');
    setAreasSeleccionadas([...areasSeleccionadas, '']);
  };

  const quitarArea = (index) => {
    const nuevas = [...areasSeleccionadas];
    nuevas.splice(index, 1);
    setAreasSeleccionadas(nuevas);
    setMensajeErrorArea('');
  };

  const handleTutorChange = (index, campo, valor) => {
    const nuevosTutores = [...tutores];
    nuevosTutores[index][campo] = valor;
    setTutores(nuevosTutores);
  };

  const añadirTutor = () => {
    setTutores([...tutores, { nombre: '', celular: '', correo: '' }]);
  };

  const quitarTutor = (index) => {
    const nuevos = [...tutores];
    nuevos.splice(index, 1);
    setTutores(nuevos);
  };

  const handleSubmit = async () => {
    const payload = {
      nombreEstudiante,
      ciEstudiante,
      fechaNacimiento: fechaNacimiento ? fechaNacimiento.toISOString().split('T')[0] : null,
      areas: areasSeleccionadas,
      tutores,
    };

    try {
      const response = await fetch('http://localhost:3000/api/inscripciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const resultado = await response.json();
      console.log('Respuesta del backend:', resultado);
      alert('✅ Inscripción enviada con éxito');
    } catch (error) {
      console.error('Error al enviar inscripción:', error);
      alert('❌ Hubo un error al enviar la inscripción');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans antialiased">
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Formulario de Inscripción</h2>

          {/* Datos personales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Nombre del estudiante</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={nombreEstudiante}
                onChange={(e) => setNombreEstudiante(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm">Cédula de Identidad</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={ciEstudiante}
                onChange={(e) => setCiEstudiante(e.target.value)}
              />
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
                className="border rounded px-3 py-2 w-48 cursor-pointer"
                onClick={() => setMostrarCalendario(!mostrarCalendario)}
                placeholder="mm/dd/yyyy"
              />
              {mostrarCalendario && (
                <div className="absolute z-10 bg-white shadow p-2 mt-1">
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

          {/* Áreas de competencia */}
          <div>
            <label className="block text-sm mb-1">Áreas de Competencia</label>
            <div className="space-y-3">
              {areasSeleccionadas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <select
                    value={area}
                    onChange={(e) => handleAreaChange(index, e.target.value)}
                    className="border px-3 py-2 rounded w-full"
                  >
                    <option value="">Seleccionar área</option>
                    {areasDisponibles.map((a) => (
                      <option key={a.nombre} value={a.nombre}>
                        {a.nombre}
                      </option>
                    ))}
                  </select>
                  {areasSeleccionadas.length > 1 && (
                    <button onClick={() => quitarArea(index)} className="text-red-600 text-sm">
                      Quitar
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button onClick={añadirArea} className="text-blue-600 text-sm mt-2">
              + Añadir Área
            </button>
            {mensajeErrorArea && <p className="text-red-600 text-sm mt-1">{mensajeErrorArea}</p>}
          </div>

          {/* Tutores */}
          <div>
            <label className="block text-sm mb-1">Tutores</label>
            <div className="space-y-3">
              {tutores.map((tutor, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                  <div>
                    <label className="text-sm block">Nombre</label>
                    <input
                      type="text"
                      value={tutor.nombre}
                      onChange={(e) => handleTutorChange(index, 'nombre', e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm block">Celular</label>
                    <input
                      type="tel"
                      value={tutor.celular}
                      onChange={(e) => handleTutorChange(index, 'celular', e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm block">Correo Electrónico</label>
                    <input
                      type="email"
                      value={tutor.correo}
                      onChange={(e) => handleTutorChange(index, 'correo', e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  {tutores.length > 1 && (
                    <button onClick={() => quitarTutor(index)} className="text-red-500 text-sm">
                      Quitar
                    </button>
                  )}
                </div>
              ))}
              <button onClick={añadirTutor} className="text-blue-600 text-sm mt-2">
                + Añadir Tutor
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Enviar Inscripción
          </button>
        </div>
      </main>
    </div>
  );
}

export default FormularioInscripcion;
