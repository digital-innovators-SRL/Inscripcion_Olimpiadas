import React, { useState } from 'react';
import './AdminStyles.css';
import '../../assets/styles/AdminStyles.css'

const DynamicMinimumDataForm = () => {
  const [fields, setFields] = useState([
    { id: 1, name: 'Nombre', type: 'text', required: true },
    { id: 2, name: 'Email', type: 'email', required: true },
    { id: 3, name: 'Teléfono', type: 'tel', required: false },
  ]);
  
  const [newField, setNewField] = useState({
    name: '',
    type: 'text',
    required: false
  });

  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  
  const handleAddField = () => {
    if (newField.name.trim() === '') return;
    
    const newId = fields.length > 0 ? Math.max(...fields.map(field => field.id)) + 1 : 1;
    
    setFields([...fields, { 
      id: newId, 
      name: newField.name, 
      type: newField.type, 
      required: newField.required 
    }]);
    
    setNewField({
      name: '',
      type: 'text',
      required: false
    });
  };
  
  const handleDeleteField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };
  
  const handleToggleRequired = (id) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, required: !field.required } : field
    ));
  };
  
  const handleUpdateField = (id, key, value) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, [key]: value } : field
    ));
  };
  
  const handleSaveConfiguration = () => {
    // Aquí se enviaría la configuración al backend
    console.log('Configuración guardada:', fields);
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };
  
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Configuración de Datos Mínimos Requeridos</h1>
        <p>Define los campos necesarios para la inscripción</p>
      </div>
      
      <div className="admin-content">
        <div className="fields-list">
          <h2>Campos Actuales</h2>
          {fields.length === 0 ? (
            <p className="no-fields">No hay campos configurados</p>
          ) : (
            <table className="fields-table">
              <thead>
                <tr>
                  <th>Nombre del Campo</th>
                  <th>Tipo</th>
                  <th>Obligatorio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {fields.map(field => (
                  <tr key={field.id}>
                    <td>
                      <input 
                        type="text" 
                        value={field.name} 
                        onChange={(e) => handleUpdateField(field.id, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <select 
                        value={field.type}
                        onChange={(e) => handleUpdateField(field.id, 'type', e.target.value)}
                      >
                        <option value="text">Texto</option>
                        <option value="email">Email</option>
                        <option value="tel">Teléfono</option>
                        <option value="number">Número</option>
                        <option value="date">Fecha</option>
                        <option value="select">Selección</option>
                      </select>
                    </td>
                    <td>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={field.required} 
                          onChange={() => handleToggleRequired(field.id)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <button 
                        className="delete-btn"
                        onClick={() => handleDeleteField(field.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        <div className="add-field-form">
          <h2>Agregar Nuevo Campo</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre del Campo</label>
              <input 
                type="text" 
                value={newField.name}
                onChange={(e) => setNewField({...newField, name: e.target.value})}
                placeholder="Ej: Dirección, Edad, etc."
              />
            </div>
            
            <div className="form-group">
              <label>Tipo de Campo</label>
              <select 
                value={newField.type}
                onChange={(e) => setNewField({...newField, type: e.target.value})}
              >
                <option value="text">Texto</option>
                <option value="email">Email</option>
                <option value="tel">Teléfono</option>
                <option value="number">Número</option>
                <option value="date">Fecha</option>
                <option value="select">Selección</option>
              </select>
            </div>
            
            <div className="form-group checkbox-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={newField.required}
                  onChange={(e) => setNewField({...newField, required: e.target.checked})}
                />
                Campo Obligatorio
              </label>
            </div>
          </div>
          
          <button 
            className="add-btn"
            onClick={handleAddField}
          >
            Agregar Campo
          </button>
        </div>
        
        <div className="save-section">
          <button 
            className="save-btn"
            onClick={handleSaveConfiguration}
          >
            Guardar Configuración
          </button>
          
          {showSaveSuccess && (
            <div className="success-message">
              ¡Configuración guardada exitosamente!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicMinimumDataForm;
