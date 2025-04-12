import React from 'react';
import IndividualRegistrationForm from '../components/forms/IndividualRegistrationForm';
import "../assets/styles/RegistrationStyles.css";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <header className="page-header">
        <h1>Inscripción de Estudiantes</h1>
        <p>Completa el formulario para registrarte en nuestros cursos</p>
      </header>
      
      <div className="form-container">
        <IndividualRegistrationForm />
      </div>

      <footer className="page-footer">
        <p>¿Necesitas ayuda? Contacta a soporte@institucion.com</p>
      </footer>
    </div>
  );
};

export default RegistrationPage;
