import React, { useState } from 'react';
import RegistroAreasCompetencia from './components/areas/RegistroAreasCompetencia';
import ReporteAreas from './components/areas/ReporteAreas';
import FormularioInscripcion from './components/areas/FormularioInscripcion';

function App() {
  const [vista, setVista] = useState('registro'); // 👈 Solo uno, y aquí controlas todo

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setVista('registro')}>Registro de Áreas</button>
        <button onClick={() => setVista('reporte')}>Reporte de Áreas</button>
        <button onClick={() => setVista('inscripcion')}>Formulario de Inscripción</button>
      </nav>

      {/* Renderizado condicional */}
      {vista === 'registro' && <RegistroAreasCompetencia />}
      {vista === 'reporte' && <ReporteAreas />}
      {vista === 'inscripcion' && <FormularioInscripcion />}
    </div>
  );
}

export default App;
