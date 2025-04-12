import React, { useState, useEffect } from 'react';
import './AdminStyles.css';

const ConfigurationUpdateForm = () => {
  const [configurations, setConfigurations] = useState([
    { id: 1, name: 'Configuración 2023', active: false, fields: 7, createdAt: '10/05/2023' },
    { id: 2, name: 'Configuración 2024', active: true, fields: 9, createdAt: '15/01/2024' }
  ]);
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newConfigName, setNewConfigName] = useState('');
  const [showVersionWarning, setShowVersionWarning] = useState(false);
  
  // Simular carga de configuraciones
  useEffect(() => {
    // En un caso real, aquí se cargarían las configuraciones desde el backend
    console.log('Configuraciones cargadas');
  }, []);
  
  const handleActivateVersion = (id) => {
    setShowVersionWarning(true);
    // Almacenar el ID para activarlo después de la confirmación
    localStorage.setItem('pendingActivationId', id);
  };
  
  const confirmActivation = () => {
    const id = parseInt(localStorage.getItem('pendingActivationId'));
    setConfigurations(configurations.map(config => ({
      ...config,
      active: config.id === id
    })));
    setShowVersionWarning(false);
    localStorage.removeItem('pendingActivationId');
  };
  
  const cancelActivation = () => {
    setShowVersionWarning(false);
    localStorage.removeItem('pendingActivationId');
  };
  
  const handleCreateVersion = () => {
    if (!newConfigName.trim()) return;
    
    const newId = Math.max(...configurations.map(config => config.id)) + 1;
    const activeConfig = configurations.find(config => config.active);
    
    const newConfig = {
      id: newId,
      name: newConfigName,
      active: false,
      fields: activeConfig ? activeConfig.fields : 0,
      createdAt: new Date().toLocaleDateString()
    };
    
    setConfigurations([...configurations, newConfig]);
    setNewConfigName('');
    setShowCreateModal(false);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Gestión de Versiones de Configuración</h1>
        <p>Actualiza la configuración de datos mínimos sin afectar registros anteriores</p>
      </div>
      
      <div className="admin-content">
        <div className="config-actions">
          <button 
            className="create-btn"
            onClick={() => setShowCreateModal(true)}
          >
            Crear Nueva Versión
          </button>
        </div>
        
        <div className="config-list">
          <h2>Versiones de Configuración</h2>
          <table className="config-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Campos</th>
                <th>Fecha de Creación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map(config => (
                <tr key={config.id} className={config.active ? 'active-row' : ''}>
                  <td>{config.name}</td>
                  <td>
                    <span className={`status-badge ${config.active ? 'active' : 'inactive'}`}>
                      {config.active ? 'Activa' : 'Inactiva'}
                    </span>
                  </td>
                  <td>{config.fields} campos</td>
                  <td>{config.createdAt}</td>
                  <td>
                    <div className="actions-container">
                      <button 
                        className="edit-btn"
                        onClick={() => window.location.href = `/admin/config/${config.id}/edit`}
                      >
                        Editar
                      </button>
                      {!config.active && (
                        <button 
                          className="activate-btn"
                          onClick={() => handleActivateVersion(config.id)}
                        >
                          Activar
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Modal para crear nueva versión */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Crear Nueva Versión de Configuración</h2>
            <p>Esta nueva versión incluirá todos los campos de la configuración activa actual.</p>
            
            <div className="form-group">
              <label>Nombre de la Configuración</label>
              <input 
                type="text" 
                value={newConfigName}
                onChange={(e) => setNewConfigName(e.target.value)}
                placeholder="Ej: Configuración 2025"
              />
            </div>
            
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowCreateModal(false)}
              >
                Cancelar
              </button>
              <button 
                className="create-btn"
                onClick={handleCreateVersion}
              >
                Crear Versión
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal de advertencia para activación */}
      {showVersionWarning && (
        <div className="modal-overlay">
          <div className="modal-content warning-modal">
            <h2>¡Atención! Cambio de Configuración</h2>
            <p>
              Estás a punto de cambiar la configuración activa. Este cambio afectará a todos los
              nuevos registros a partir de ahora, pero no modificará los registros anteriores.
            </p>
            <p>
              <strong>¿Estás seguro de que deseas continuar?</strong>
            </p>
            
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={cancelActivation}
              >
                Cancelar
              </button>
              <button 
                className="confirm-btn"
                onClick={confirmActivation}
              >
                Confirmar Cambio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigurationUpdateForm;
