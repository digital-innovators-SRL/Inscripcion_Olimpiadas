import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DynamicForm.css';

const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({
    field_name: '',
    field_type: 'text',
    is_required: true,
    category: 'general'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fieldTypes = [
    { value: 'text', label: 'Texto' },
    { value: 'number', label: 'Número' },
    { value: 'email', label: 'Email' },
    { value: 'date', label: 'Fecha' },
    { value: 'select', label: 'Selección' }
  ];

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'personal', label: 'Datos Personales' },
    { value: 'academic', label: 'Datos Académicos' },
  ];

  useEffect(() => {
    fetchFields();
  }, []);

  const fetchFields = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/required-fields');
      setFields(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching fields:", err);
      setError("Error al cargar los campos. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewField({
      ...newField,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/required-fields', newField);
      setNewField({
        field_name: '',
        field_type: 'text',
        is_required: true,
        category: 'general'
      });
      fetchFields();
    } catch (err) {
      console.error("Error creating field:", err);
      setError("Error al crear el campo. Por favor, intente de nuevo.");
    }
  };

  const handleDeleteField = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/required-fields/${id}`);
      fetchFields();
    } catch (err) {
      console.error("Error deleting field:", err);
      setError("Error al eliminar el campo. Por favor, intente de nuevo.");
    }
  };

  const handleToggleRequired = async (id, currentRequired) => {
    try {
      await axios.put(`http://localhost:8000/api/required-fields/${id}`, {
        is_required: !currentRequired
      });
      fetchFields();
    } catch (err) {
      console.error("Error updating field:", err);
      setError("Error al actualizar el campo. Por favor, intente de nuevo.");
    }
  };

  if (loading) return <div className="loading">Cargando campos...</div>;
  
  return (
    <div className="dynamic-form-container">
      <div className="card">
        <h2>Configuración de Formulario Dinámico</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="dynamic-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="field_name">Nombre del Campo:</label>
              <input
                type="text"
                id="field_name"
                name="field_name"
                value={newField.field_name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="field_type">Tipo de Campo:</label>
              <select
                id="field_type"
                name="field_type"
                value={newField.field_type}
                onChange={handleInputChange}
              >
                {fieldTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Categoría:</label>
              <select
                id="category"
                name="category"
                value={newField.category}
                onChange={handleInputChange}
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="is_required"
                name="is_required"
                checked={newField.is_required}
                onChange={handleInputChange}
              />
              <label htmlFor="is_required">Campo Obligatorio</label>
            </div>
          </div>
          
          <button type="submit" className="btn-primary">Agregar Campo</button>
        </form>
      </div>
      
      <div className="card mt-20">
        <h2>Campos Configurados</h2>
        
        {fields.length === 0 ? (
          <p>No hay campos configurados. Agregue campos usando el formulario anterior.</p>
        ) : (
          <div className="fields-list">
            {fields.map(field => (
              <div key={field.id} className="field-item">
                <div className="field-info">
                  <h3>{field.field_name}</h3>
                  <div className="field-details">
                    <span className="field-type">Tipo: {field.field_type}</span>
                    <span className="field-category">Categoría: {field.category}</span>
                    <span className={`field-required ${field.is_required ? 'required' : 'optional'}`}>
                      {field.is_required ? 'Obligatorio' : 'Opcional'}
                    </span>
                  </div>
                </div>
                <div className="field-actions">
                  <button 
                    className="btn-toggle"
                    onClick={() => handleToggleRequired(field.id, field.is_required)}
                  >
                    {field.is_required ? 'Hacer Opcional' : 'Hacer Obligatorio'}
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDeleteField(field.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicForm;