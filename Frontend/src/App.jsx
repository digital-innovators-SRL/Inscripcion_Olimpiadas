import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import RegistroAreasCompetencia from './components/areas/RegistroAreasCompetencia';
import FormularioInscripcion from './components/areas/FormularioInscripcion';
import './App.css';
import './assets/styles/FormularioInscripcion.css';
import './assets/styles/RegistroAreasCompetencia.css';
import './assets/styles/ReporteAreas.css';
import ReporteEstudiantes from './components/areas/ReporteEstudiantes';

function MainContent() {
  const location = useLocation();

  // Mapeo de rutas a títulos
  const routeTitles = {
    '/': 'Inicio',
    '/inscripcion': 'Inscripción',
    '/configuracion': 'Configuración',
    '/reporte': 'Reporte de Áreas'
  };

  // Obtén el título según la ruta actual
  const titulo = routeTitles[location.pathname] || 'Página';

  return (
    <div className="main-content">
      <div className="main-header">
        <h1>{titulo} <span className="estado-usuario">| Estudiante</span></h1>
      </div>

      <div className="content-area">
        <div className="content-box">
          <Routes>
            <Route path="/" element={<h2>Selecciona una opción del menú</h2>} />
            <Route path="/inscripcion" element={<FormularioInscripcion />} />
            <Route path="/configuracion" element={<RegistroAreasCompetencia />} />
            <Route path="/reporte" element={<ReporteEstudiantes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Sistema de Inscripciones</h2>
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/inscripcion" className="nav-link">Inscripción</NavLink>
          <NavLink to="/configuracion" className="nav-link">Configuración</NavLink>
          <NavLink to="/reporte" className="nav-link">Reporte Inscripciones</NavLink>
        </div>
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
