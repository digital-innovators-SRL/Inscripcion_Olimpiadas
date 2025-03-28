import React from 'react';

// Datos de ejemplo: simulamos algunas áreas registradas
const datosAreas = [
  {
    nombre: 'Matemáticas',
    costo: 100,
    niveles: { basico: true, intermedio: false, avanzado: false },
    datosMinimos: { cedula: true, fechaNac: false, tutor: true, emailColegio: false },
  },
  {
    nombre: 'Ciencias',
    costo: 120,
    niveles: { basico: true, intermedio: true, avanzado: false },
    datosMinimos: { cedula: true, fechaNac: true, tutor: false, emailColegio: true },
  },
  {
    nombre: 'Arte',
    costo: 80,
    niveles: { basico: false, intermedio: true, avanzado: true },
    datosMinimos: { cedula: false, fechaNac: true, tutor: true, emailColegio: false },
  },
  {
    nombre: 'Historia',
    costo: 90,
    niveles: { basico: true, intermedio: false, avanzado: false },
    datosMinimos: { cedula: true, fechaNac: false, tutor: false, emailColegio: true },
  },
];

function ReporteAreas() {
  // Función para contar áreas por nivel
  const contarPorNivel = (nivel) =>
    datosAreas.filter((area) => area.niveles[nivel]).length;

  const totalBasico = contarPorNivel('basico');
  const totalIntermedio = contarPorNivel('intermedio');
  const totalAvanzado = contarPorNivel('avanzado');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Reporte de Áreas de Competencia</h2>
      {/* Resumen de Niveles */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Resumen de Niveles</h3>
        <ul>
          <li>
            <strong>Básico:</strong> {totalBasico} área{totalBasico !== 1 ? 's' : ''}
          </li>
          <li>
            <strong>Intermedio:</strong> {totalIntermedio} área{totalIntermedio !== 1 ? 's' : ''}
          </li>
          <li>
            <strong>Avanzado:</strong> {totalAvanzado} área{totalAvanzado !== 1 ? 's' : ''}
          </li>
        </ul>
      </div>

      {/* Listado de Áreas */}
      <div>
        <h3>Listado de Áreas</h3>
        {datosAreas.length === 0 ? (
          <p>No hay áreas registradas.</p>
        ) : (
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Costo</th>
                <th>Niveles</th>
                <th>Datos Mínimos</th>
              </tr>
            </thead>
            <tbody>
              {datosAreas.map((area, i) => (
                <tr key={i}>
                  <td>{area.nombre}</td>
                  <td>{area.costo}</td>
                  <td>
                    {Object.keys(area.niveles)
                      .filter((nivel) => area.niveles[nivel])
                      .map((nivel) => {
                        if (nivel === 'basico') return 'Básico';
                        if (nivel === 'intermedio') return 'Intermedio';
                        if (nivel === 'avanzado') return 'Avanzado';
                        return nivel;
                      })
                      .join(', ') || 'Ninguno'}
                  </td>
                  <td>
                    {Object.keys(area.datosMinimos)
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
    </div>
  );
}

export default ReporteAreas;
