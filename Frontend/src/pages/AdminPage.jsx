import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DynamicMinimumDataForm from '../components/admin/DynamicMinimumDataForm';
import ConfigurationUpdateForm from '../components/admin/ConfigurationUpdateForm';
import CostConfigurationModule from '../components/admin/CostConfigurationModule';
import RegistrationRecords from '../components/admin/RegistrationRecords';
import "../assets/styles/AdminStyles.css";

const AdminPage = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar de navegación */}
      <nav className="admin-sidebar">
        <h2>Panel de Administración</h2>
        <ul>
          <li><Link to="/admin/configuracion-datos">Datos Mínimos</Link></li>
          <li><Link to="/admin/gestion-versiones">Versiones</Link></li>
          <li><Link to="/admin/configuracion-costos">Costos</Link></li>
          <li><Link to="/admin/registros">Registros</Link></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="admin-content">
        <Routes>
          <Route path="configuracion-datos" element={<DynamicMinimumDataForm />} />
          <Route path="gestion-versiones" element={<ConfigurationUpdateForm />} />
          <Route path="configuracion-costos" element={<CostConfigurationModule />} />
          <Route path="registros" element={<RegistrationRecords />} />
          
          {/* Ruta por defecto */}
          <Route path="*" element={
            <div className="admin-welcome">
              <h1>Bienvenido al Panel de Administración</h1>
              <p>Selecciona una opción del menú lateral</p>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
