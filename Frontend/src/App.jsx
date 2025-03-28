import React, { useState } from 'react';
import RegistroAreasCompetencia from './components/areas/RegistroAreasCompetencia';
import ReporteAreas from './components/areas/ReporteAreas';

function App() {
  // Estado para alternar vistas
  const [vista, setVista] = useState('registro'); // 'registro' o 'reporte'

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setVista('registro')}>Registro de Áreas</button>
        <button onClick={() => setVista('reporte')}>Reporte de Áreas</button>
      </nav>
      {vista === 'registro' ? <RegistroAreasCompetencia /> : <ReporteAreas />}
    </div>
  );
}

export default App;
