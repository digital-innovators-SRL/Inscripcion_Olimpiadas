import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import RegistroAreasCompetencia from './components/areas/RegistroAreasCompetencia';
import ReporteAreas from './components/areas/ReporteAreas';
import FormularioInscripcion from './components/areas/FormularioInscripcion';
import './App.css';
import './assets/styles/FormularioInscripcion.css';
import './assets/styles/RegistroAreasCompetencia.css';
import './assets/styles/ReporteAreas.css';  // Asegúrate de que este archivo CSS esté importado


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Sistema de Inscripciones</h2>
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/inscripcion" className="nav-link">Inscripción</NavLink>
          <NavLink to="/configuracion" className="nav-link">Configuración</NavLink>
          <NavLink to="/reporte" className="nav-link">Reporte de Áreas</NavLink> {/* Nuevo enlace para el reporte */}
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<h1>Bienvenido</h1>} />
            <Route path="/inscripcion" element={<FormularioInscripcion />} />
            <Route path="/configuracion" element={<RegistroAreasCompetencia />} />
            <Route path="/reporte" element={<ReporteAreas />} /> {/* Nueva ruta para el reporte */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
