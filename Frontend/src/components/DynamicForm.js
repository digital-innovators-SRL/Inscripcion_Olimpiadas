import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DynamicForm.css';

const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/required-fields')
      .then(response => setFields(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e, fieldName) => {
    setFormValues({ ...formValues, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formValues);
    // Aquí puedes procesar o enviar formValues según lo necesites
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.id} className="form-group">
          <label>{field.field_name}</label>
          <input
            type={field.field_type === 'number' ? 'number' : 'text'}
            required={field.is_required}
            onChange={(e) => handleChange(e, field.field_name)}
            className="form-input"
          />
        </div>
      ))}
      <button type="submit" className="btn-submit">Enviar</button>
    </form>
  );
};

export default DynamicForm;
