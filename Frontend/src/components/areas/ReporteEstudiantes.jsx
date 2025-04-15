import React, { useEffect, useState } from 'react';

function ReporteEstudiantes() {
  const [datosEstudiantes, setDatosEstudiantes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función para obtener datos del backend
  const obtenerDatos = async () => {
    setCargando(true);
    try {
      // Reemplaza la URL del backend con la correcta
      const response = await fetch('http://TU_BACKEND_URL/estudiantes'); // Cambia 'TU_BACKEND_URL' con la URL de tu backend
      const data = await response.json();

      // Si la respuesta es exitosa, actualiza los datos de estudiantes
      setDatosEstudiantes(data);
      setCargando(false);
    } catch (error) {
      console.error('Error al obtener los estudiantes:', error);
      setCargando(false);
    }
  };

  // Se ejecuta una vez al cargar el componente
  useEffect(() => {
    obtenerDatos();
  }, []);

  // Función para obtener las estadísticas del reporte
  const obtenerEstadisticas = () => {
    const totalInscripciones = datosEstudiantes.length;
    const confirmadas = datosEstudiantes.filter(estudiante => estudiante.estadoInscripcion === 'Confirmada').length;
    const pendientes = datosEstudiantes.filter(estudiante => estudiante.estadoInscripcion === 'Pendiente').length;

    return {
      totalInscripciones,
      confirmadas,
      pendientes,
    };
  };

  const { totalInscripciones, confirmadas, pendientes } = obtenerEstadisticas();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reporte de Estudiantes</h2>

      {/* Mostrar el análisis de los datos */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Análisis de Inscripciones</h3>
        <ul className="list-disc pl-6">
          <li>Total de Inscripciones: {totalInscripciones}</li>
          <li>Inscripciones Confirmadas: {confirmadas}</li>
          <li>Inscripciones Pendientes: {pendientes}</li>
        </ul>
      </div>

      {/* Mostrar estado de carga */}
      {cargando ? (
        <p className="text-gray-500">Cargando datos...</p>
      ) : (
        <div className="overflow-x-auto">
          {datosEstudiantes.length === 0 ? (
            <p>No hay estudiantes registrados.</p>
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Nombre</th>
                  <th className="border px-4 py-2">Área de Competencia</th>
                  <th className="border px-4 py-2">Fecha de Inscripción</th>
                  <th className="border px-4 py-2">Estado de Inscripción</th>
                </tr>
              </thead>
              <tbody>
                {datosEstudiantes.map((estudiante, i) => (
                  <tr key={i} className="text-center">
                    <td className="border px-4 py-2">{estudiante.nombre}</td>
                    <td className="border px-4 py-2">{estudiante.area}</td>
                    <td className="border px-4 py-2">{estudiante.fechaInscripcion}</td>
                    <td className="border px-4 py-2">{estudiante.estadoInscripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default ReporteEstudiantes;
