import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateConfiguration.css';

const UpdateConfiguration = () => {
  const [fields, setFields] = useState([]);
  const [filteredFields, setFilteredFields] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lista de categorías
  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'general', label: 'General' },
    { value: 'personal', label: 'Datos Personales' },
    { value: 'academic', label: 'Datos Académicos' },
  ];

  useEffect(() => {
    fetchFields();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredFields(fields);
    } else {
      setFilteredFields(fields.filter(field => field.category === selectedCategory));
    }
  }, [selectedCategory, fields]);

  const fetchFields = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/required-fields');
      setFields(response.data);
      setFilteredFields(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching fields:", err);
      setError("Error al cargar los campos. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) return <div className="loading">Cargando configuración...</div>;

  return (
    <div className="update-config-container">
      <div className="card">
        <h2>Actualizar Configuración de Campos</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="filter-controls">
          <label htmlFor="category-filter">Filtrar por categoría:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        {filteredFields.length === 0 ? (
          <p className="empty-message">No hay campos configurados para esta categoría.</p>
        ) : (
          <div className="config-fields-list">
            {filteredFields.map(field => (
              <div key={field.id} className="config-field-item">
                <div className="field-info">
                  <h3>{field.field_name}</h3>
                  <div className="field-details">
                    <span className="field-type">Tipo: {field.field_type}</span>
                    <span className="field-category">Categoría: {field.category}</span>
                  </div>
                </div>
                <div className="field-actions">
                  <button
                    className={`btn-toggle ${field.is_required ? 'required' : 'optional'}`}
                    onClick={() => handleToggleRequired(field.id, field.is_required)}
                  >
                    {field.is_required ? 'Obligatorio' : 'Opcional'}
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

export default UpdateConfiguration;