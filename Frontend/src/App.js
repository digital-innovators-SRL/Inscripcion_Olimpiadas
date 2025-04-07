import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm/DynamicForm';
import UpdateConfiguration from './components/UpdateConfiguration/UpdateConfiguration';
import InscriptionForm from './components/InscriptionForm/InscriptionForm';
import InscriptionsList from './components/InscriptionsList/InscriptionsList';
import CostConfiguration from './components/CostConfiguration/CostConfiguration';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('inscriptions');

  const tabOptions = [
    { id: 'inscriptions', label: 'Inscripciones', isAdmin: false },
    { id: 'inscriptionsList', label: 'Listar Inscripciones', isAdmin: true },
    { id: 'dynamicForm', label: 'Configurar Campos', isAdmin: true },
    { id: 'updateFields', label: 'Actualizar Campos', isAdmin: true },
    { id: 'costConfig', label: 'Configurar Costos', isAdmin: true },
  ];

  // En una aplicación real, este estado vendría de la autenticación
  const [isAdmin, setIsAdmin] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleAdminMode = () => {
    setIsAdmin(!isAdmin);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inscriptions':
        return <InscriptionForm />;
      case 'inscriptionsList':
        return <InscriptionsList />;
      case 'dynamicForm':
        return <DynamicForm />;
      case 'updateFields':
        return <UpdateConfiguration />;
      case 'costConfig':
        return <CostConfiguration />;
      default:
        return <InscriptionForm />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <h1>Sistema de Inscripciones</h1>
        </div>
        <div className="admin-toggle">
          <button className={`toggle-button ${isAdmin ? 'active' : ''}`} onClick={toggleAdminMode}>
            {isAdmin ? 'Modo Administrador' : 'Modo Usuario'}
          </button>
        </div>
      </header>

      <nav className="app-navigation">
        <ul className="nav-tabs">
          {tabOptions.map(tab => (
            (!tab.isAdmin || isAdmin) && (
              <li key={tab.id} className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}>
                <button className="nav-link" onClick={() => handleTabChange(tab.id)}>
                  {tab.label}
                </button>
              </li>
            )
          ))}
        </ul>
      </nav>

      <main className="app-content">
        {renderTabContent()}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Sistema de Inscripciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
