import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InscriptionForm.css';

const InscriptionForm = () => {
  const [fields, setFields] = useState([]);
  const [areas, setAreas] = useState([]);
  const [levels, setLevels] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    area_id: '',
    level_id: '',
  });
  const [additionalData, setAdditionalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [fieldsRes, areasRes, levelsRes] = await Promise.all([
          axios.get('http://localhost:8000/api/required-fields'),
          axios.get('http://localhost:8000/api/areas'),
          axios.get('http://localhost:8000/api/levels')
        ]);
        
        setFields(fieldsRes.data);
        setAreas(areasRes.data);
        setLevels(levelsRes.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error al cargar los datos del formulario. Por favor, intente de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAdditionalDataChange = (e, fieldName) => {
    setAdditionalData({
      ...additionalData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccessMessage('');

    try {
      const payload = {
        ...formValues,
        additional_data: additionalData
      };

      await axios.post('http://localhost:8000/api/inscriptions', payload);
      
      // Resetear formulario
      setFormValues({
        name: '',
        email: '',
        phone: '',
        area_id: '',
        level_id: '',
      });
      setAdditionalData({});
      
      setSuccessMessage('¡Inscripción realizada con éxito!');
    } catch (err) {
      console.error("Error submitting form:", err);
      
      if (err.response && err.response.data && err.response.data.errors) {
        const errorMessages = Object.values(err.response.data.errors).flat();
        setError(`Error: ${errorMessages.join(', ')}`);
      } else {
        setError("Error al enviar el formulario. Por favor, intente de nuevo.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Agrupar campos por categoría
  const groupedFields = fields.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});

  if (loading) return <div className="loading">Cargando formulario...</div>;

  return (
    <div className="inscription-form-container">
      <div className="card">
        <h2>Formulario de Inscripción</h2>
        
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        
        <form onSubmit={handleSubmit} className="inscription-form">
          <div className="form-section">
            <h3>Información Básica</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="area_id">Área:</label>
                <select
                  id="area_id"
                  name="area_id"
                  value={formValues.area_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un área</option>
                  {areas.map(area => (
                    <option key={area.id} value={area.id}>{area.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="level_id">Nivel:</label>
                <select
                  id="level_id"
                  name="level_id"
                  value={formValues.level_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un nivel</option>
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {Object.entries(groupedFields).map(([category, categoryFields]) => (
            categoryFields.length > 0 && (
              <div key={category} className="form-section">
                <h3>{category === 'general' ? 'Información General' : 
                     category === 'personal' ? 'Datos Personales' : 
                     category === 'academic' ? 'Datos Académicos' : 
                     'Información Adicional'}</h3>
                
                {categoryFields.map((field, index) => (
                  <div key={field.id} className={index % 2 === 0 ? "form-row" : ""}>
                    <div className="form-group">
                      <label htmlFor={`field-${field.id}`}>{field.field_name}:</label>
                      {field.field_type === 'select' ? (
                        <select
                          id={`field-${field.id}`}
                          value={additionalData[field.field_name] || ''}
                          onChange={(e) => handleAdditionalDataChange(e, field.field_name)}
                          required={field.is_required}
                        >
                          <option value="">Seleccione</option>
                          {/* Aquí podrías añadir opciones dinámicas si es necesario */}
                          <option value="option1">Opción 1</option>
                          <option value="option2">Opción 2</option>
                        </select>
                      ) : (
                        <input
                          type={field.field_type}
                          id={`field-${field.id}`}
                          value={additionalData[field.field_name] || ''}
                          onChange={(e) => handleAdditionalDataChange(e, field.field_name)}
                          required={field.is_required}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-submit" 
              disabled={submitting}
            >
              {submitting ? 'Enviando...' : 'Inscribirse'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InscriptionForm;