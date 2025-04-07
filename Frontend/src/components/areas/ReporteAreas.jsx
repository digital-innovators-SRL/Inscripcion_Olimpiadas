import React, { useEffect, useState } from 'react';

function ReporteAreas() {
  const [datosAreas, setDatosAreas] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función para traer las áreas desde el backend
  const obtenerDatos = async () => {
    setCargando(true);
    try {
      // *** LLAMADA AL BACKEND: insertar tu endpoint Laravel aquí ***
      const respuesta = await fetch('http://localhost:8000/api/areas'); // <-- CAMBIA esto si usas otra ruta
      const data = await respuesta.json();
      setDatosAreas(data);
    } catch (error) {
      console.error('Error al obtener las áreas:', error);
    } finally {
      setCargando(false);
    }
  };

  // Se ejecuta una vez al cargar el componente
  useEffect(() => {
    obtenerDatos();
  }, []);

  // Función para contar áreas por nivel
  const contarPorNivel = (nivel) =>
    datosAreas.filter((area) => area.niveles?.[nivel]).length;

  const totalBasico = contarPorNivel('basico');
  const totalIntermedio = contarPorNivel('intermedio');
  const totalAvanzado = contarPorNivel('avanzado');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reporte de Áreas de Competencia</h2>

      {/* Mostrar estado de carga */}
      {cargando ? (
        <p className="text-gray-500">Cargando datos...</p>
      ) : (
        <>
          {/* Resumen por niveles */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Resumen de Niveles</h3>
            <ul className="list-disc ml-6">
              <li><strong>Básico:</strong> {totalBasico} área{totalBasico !== 1 ? 's' : ''}</li>
              <li><strong>Intermedio:</strong> {totalIntermedio} área{totalIntermedio !== 1 ? 's' : ''}</li>
              <li><strong>Avanzado:</strong> {totalAvanzado} área{totalAvanzado !== 1 ? 's' : ''}</li>
            </ul>
          </div>

          {/* Tabla de áreas */}
          <div className="overflow-x-auto">
            {datosAreas.length === 0 ? (
              <p>No hay áreas registradas.</p>
            ) : (
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Costo</th>
                    <th className="border px-4 py-2">Niveles</th>
                    <th className="border px-4 py-2">Datos Mínimos</th>
                  </tr>
                </thead>
                <tbody>
                  {datosAreas.map((area, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-4 py-2">{area.nombre}</td>
                      <td className="border px-4 py-2">Bs. {area.costo}</td>
                      <td className="border px-4 py-2">
                        {Object.keys(area.niveles || {})
                          .filter((nivel) => area.niveles[nivel])
                          .map((nivel) => {
                            if (nivel === 'basico') return 'Básico';
                            if (nivel === 'intermedio') return 'Intermedio';
                            if (nivel === 'avanzado') return 'Avanzado';
                            return nivel;
                          })
                          .join(', ') || 'Ninguno'}
                      </td>
                      <td className="border px-4 py-2">
                        {Object.keys(area.datosMinimos || {})
                          .filter((dato) => area.datosMinimos[dato])
                          .map((dato) => {
                            if (dato === 'cedula') return 'Cédula';
                            if (dato === 'fechaNac') return 'Fecha Nac.';
                            if (dato === 'tutor') return 'Tutor';
                            if (dato === 'emailColegio') return 'Email Colegio';
                            return dato;
                          })
                          .join(', ') || 'Ninguno'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ReporteAreas;
