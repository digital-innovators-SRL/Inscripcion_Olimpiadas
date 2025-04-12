import React, { useState } from 'react';
import "../../../assets/styles/RegistrationStyles.css";

const IndividualRegistrationForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      documentType: 'dni',
      documentNumber: '',
      birthdate: '',
    },
    academicInfo: {
      educationLevel: '',
      institution: '',
      graduationYear: '',
    },
    courseInfo: {
      area: '',
      level: '',
      course: '',
      schedule: '',
    },
    additionalInfo: {
      howDidYouHear: '',
      comments: '',
    },
    acceptTerms: false,
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Opciones para los selectores
  const educationLevels = ['Primaria', 'Secundaria', 'Técnico', 'Universitario', 'Postgrado'];
  const areas = ['Idiomas', 'Tecnología', 'Artes', 'Ciencias', 'Humanidades'];
  const levels = ['Básico', 'Intermedio', 'Avanzado'];
  const courses = {
    'Idiomas': {
      'Básico': ['Inglés A1', 'Francés A1', 'Alemán A1'],
      'Intermedio': ['Inglés B1', 'Francés B1', 'Alemán B1'],
      'Avanzado': ['Inglés C1', 'Francés C1', 'Alemán C1']
    },
    'Tecnología': {
      'Básico': ['Introducción a la programación', 'Fundamentos de TI'],
      'Intermedio': ['Desarrollo web', 'Bases de datos'],
      'Avanzado': ['Inteligencia artificial', 'Blockchain']
    },
    'Artes': {
      'Básico': ['Dibujo básico', 'Introducción a la música'],
      'Intermedio': ['Pintura', 'Composición musical'],
      'Avanzado': ['Arte digital', 'Producción musical']
    },
    'Ciencias': {
      'Básico': ['Física básica', 'Biología general'],
      'Intermedio': ['Química orgánica', 'Estadística'],
      'Avanzado': ['Bioquímica', 'Astrofísica']
    },
    'Humanidades': {
      'Básico': ['Filosofía occidental', 'Historia mundial'],
      'Intermedio': ['Literatura contemporánea', 'Psicología'],
      'Avanzado': ['Estudios culturales', 'Sociología avanzada']
    }
  };
  
  const schedules = ['Mañana (8-12)', 'Tarde (13-17)', 'Noche (18-22)', 'Fin de semana'];
  
  const handleInputChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
    
    // Limpiar error cuando el usuario corrige
    if (errors[`${section}.${field}`]) {
      const newErrors = {...errors};
      delete newErrors[`${section}.${field}`];
      setErrors(newErrors);
    }
  };
  
  const handleCheckboxChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    if (errors[field]) {
      const newErrors = {...errors};
      delete newErrors[field];
      setErrors(newErrors);
    }
  };
  
  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        // Validar información personal
        if (!formData.personalInfo.firstName.trim()) 
          newErrors['personalInfo.firstName'] = 'El nombre es obligatorio';
        if (!formData.personalInfo.lastName.trim()) 
          newErrors['personalInfo.lastName'] = 'El apellido es obligatorio';
        if (!formData.personalInfo.email.trim()) 
          newErrors['personalInfo.email'] = 'El email es obligatorio';
        else if (!/\S+@\S+\.\S+/.test(formData.personalInfo.email))
          newErrors['personalInfo.email'] = 'Formato de email inválido';
        if (!formData.personalInfo.documentNumber.trim())
          newErrors['personalInfo.documentNumber'] = 'El número de documento es obligatorio';
        break;
      
      case 2:
        // Validar información académica
        if (!formData.academicInfo.educationLevel)
          newErrors['academicInfo.educationLevel'] = 'Seleccione un nivel educativo';
        break;
      
      case 3:
        // Validar información del curso
        if (!formData.courseInfo.area)
          newErrors['courseInfo.area'] = 'Seleccione un área';
        if (!formData.courseInfo.level)
          newErrors['courseInfo.level'] = 'Seleccione un nivel';
        if (!formData.courseInfo.course)
          newErrors['courseInfo.course'] = 'Seleccione un curso';
        if (!formData.courseInfo.schedule)
          newErrors['courseInfo.schedule'] = 'Seleccione un horario';
        break;
      
      case 4:
        // Validar términos y condiciones
        if (!formData.acceptTerms)
          newErrors.acceptTerms = 'Debe aceptar los términos y condiciones';
        break;
      
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulación de envío al servidor
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al procesar la inscripción. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Actualizar cursos cuando cambia el área o nivel
  const getAvailableCourses = () => {
    const { area, level } = formData.courseInfo;
    if (!area || !level) return [];
    
    return courses[area] && courses[area][level] ? courses[area][level] : [];
  };

  // Calcular costo del curso seleccionado
  const getCourseCost = () => {
    const { area, level } = formData.courseInfo;
    if (!area || !level) return 0;
    
    const baseCosts = {
      'Idiomas': { 'Básico': 350000, 'Intermedio': 450000, 'Avanzado': 550000 },
      'Tecnología': { 'Básico': 400000, 'Intermedio': 550000, 'Avanzado': 750000 },
      'Artes': { 'Básico': 300000, 'Intermedio': 400000, 'Avanzado': 500000 },
      'Ciencias': { 'Básico': 380000, 'Intermedio': 480000, 'Avanzado': 580000 },
      'Humanidades': { 'Básico': 320000, 'Intermedio': 420000, 'Avanzado': 520000 }
    };
    
    return baseCosts[area] && baseCosts[area][level] ? baseCosts[area][level] : 450000;
  };
  
  // Formatear valor monetario
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };
  
  // Si se ha enviado con éxito, mostrar mensaje de confirmación
  if (isSubmitted) {
    return (
      <div className="registration-container">
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>¡Inscripción Completada!</h1>
          <p>Tu solicitud ha sido recibida correctamente.</p>
          <p>Hemos enviado un email de confirmación a: <strong>{formData.personalInfo.email}</strong></p>
          <p>Número de inscripción: <strong>INS-{Math.floor(100000 + Math.random() * 900000)}</strong></p>
          <div className="next-steps">
            <h3>Próximos pasos:</h3>
            <ol>
              <li>Revisa tu correo electrónico para obtener los detalles de pago</li>
              <li>Completa el pago dentro de las próximas 48 horas</li>
              <li>Una vez confirmado el pago, recibirás acceso al curso</li>
            </ol>
          </div>
          <button 
            className="primary-btn"
            onClick={() => window.location.href = '/dashboard'}
          >
            Ir al Panel Principal
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>Formulario de Inscripción Individual</h1>
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
          <div className="step-indicators">
            <div className={`step-indicator ${currentStep >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-indicator ${currentStep >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-indicator ${currentStep >= 3 ? 'active' : ''}`}>3</div>
            <div className={`step-indicator ${currentStep >= 4 ? 'active' : ''}`}>4</div>
          </div>
          <div className="step-labels">
            <div className="step-label">Datos Personales</div>
            <div className="step-label">Formación</div>
            <div className="step-label">Curso</div>
            <div className="step-label">Finalizar</div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Paso 1: Datos Personales */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Información Personal</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Nombre *</label>
                <input 
                  type="text" 
                  value={formData.personalInfo.firstName}
                  onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                  className={errors['personalInfo.firstName'] ? 'error' : ''}
                />
                {errors['personalInfo.firstName'] && (
                  <span className="error-message">{errors['personalInfo.firstName']}</span>
                )}
              </div>
              
              <div className="form-group">
                <label>Apellido *</label>
                <input 
                  type="text" 
                  value={formData.personalInfo.lastName}
                  onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                  className={errors['personalInfo.lastName'] ? 'error' : ''}
                />
                {errors['personalInfo.lastName'] && (
                  <span className="error-message">{errors['personalInfo.lastName']}</span>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className={errors['personalInfo.email'] ? 'error' : ''}
                />
                {errors['personalInfo.email'] && (
                  <span className="error-message">{errors['personalInfo.email']}</span>
                )}
              </div>
              
              <div className="form-group">
                <label>Teléfono</label>
                <input 
                  type="tel" 
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Tipo de Documento *</label>
                <select 
                  value={formData.personalInfo.documentType}
                  onChange={(e) => handleInputChange('personalInfo', 'documentType', e.target.value)}
                >
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                  <option value="residency">Cédula de Extranjería</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Número de Documento *</label>
                <input 
                  type="text" 
                  value={formData.personalInfo.documentNumber}
                  onChange={(e) => handleInputChange('personalInfo', 'documentNumber', e.target.value)}
                  className={errors['personalInfo.documentNumber'] ? 'error' : ''}
                />
                {errors['personalInfo.documentNumber'] && (
                  <span className="error-message">{errors['personalInfo.documentNumber']}</span>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input 
                  type="date" 
                  value={formData.personalInfo.birthdate}
                  onChange={(e) => handleInputChange('personalInfo', 'birthdate', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Paso 2: Formación Académica */}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>Formación Académica</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Nivel Educativo *</label>
                <select 
                  value={formData.academicInfo.educationLevel}
                  onChange={(e) => handleInputChange('academicInfo', 'educationLevel', e.target.value)}
                  className={errors['academicInfo.educationLevel'] ? 'error' : ''}
                >
                  <option value="">Seleccionar...</option>
                  {educationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors['academicInfo.educationLevel'] && (
                  <span className="error-message">{errors['academicInfo.educationLevel']}</span>
                )}
              </div>
              
              <div className="form-group">
                <label>Institución Educativa</label>
                <input 
                  type="text" 
                  value={formData.academicInfo.institution}
                  onChange={(e) => handleInputChange('academicInfo', 'institution', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Año de Graduación</label>
                <input 
                  type="number" 
                  min="1950" 
                  max="2030"
                  value={formData.academicInfo.graduationYear}
                  onChange={(e) => handleInputChange('academicInfo', 'graduationYear', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Paso 3: Información del Curso */}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Selección de Curso</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Área *</label>
                <select 
                  value={formData.courseInfo.area}
                  onChange={(e) => {
                    handleInputChange('courseInfo', 'area', e.target.value);
                    handleInputChange('courseInfo', 'level', '');
                    handleInputChange('courseInfo', 'course', '');
                  }}
                  className={errors['courseInfo.area'] ? 'error' : ''}
                >
                  <option value="">Seleccionar...</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                {errors['courseInfo.area'] && (
                  <span className="error-message">{errors['courseInfo.area']}</span>
                )}
              </div>
              
              <div className="form-group">
                <label>Nivel *</label>
                <select 
                  value={formData.courseInfo.level}
                  onChange={(e) => {
                    handleInputChange('courseInfo', 'level', e.target.value);
                    handleInputChange('courseInfo', 'course', '');
                  }}
                  disabled={!formData.courseInfo.area}
                  className={errors['courseInfo.level'] ? 'error' : ''}
                >
                  <option value="">Seleccionar...</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors['courseInfo.level'] && (
                  <span className="error-message">{errors['courseInfo.level']}</span>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Curso *</label>
                <select 
                  value={formData.courseInfo.course}
                  onChange={(e) => handleInputChange('courseInfo', 'course', e.target.value)}
                  disabled={!formData.courseInfo.level}
                  className={errors['courseInfo.course'] ? 'error' : ''}
                >
                  <option value="">Seleccionar...</option>
                  {getAvailableCourses().map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                {errors['courseInfo.course'] && (
                  <span className="error-message">{errors['courseInfo.course']}</span>
                )}
              </div>
              
              <div className="form-group">
                <label>Horario *</label>
                <select 
                  value={formData.courseInfo.schedule}
                  onChange={(e) => handleInputChange('courseInfo', 'schedule', e.target.value)}
                  className={errors['courseInfo.schedule'] ? 'error' : ''}
                >
                  <option value="">Seleccionar...</option>
                  {schedules.map(schedule => (
                    <option key={schedule} value={schedule}>{schedule}</option>
                  ))}
                </select>
                {errors['courseInfo.schedule'] && (
                  <span className="error-message">{errors['courseInfo.schedule']}</span>
                )}
              </div>
            </div>
            
            <div className="course-details">
              <h3>Detalles del Curso Seleccionado</h3>
              {formData.courseInfo.course ? (
                <div className="course-info-box">
                  <div className="course-info-row">
                    <span className="info-label">Duración:</span>
                    <span className="info-value">3 meses</span>
                  </div>
                  <div className="course-info-row">
                    <span className="info-label">Inicio:</span>
                    <span className="info-value">15 de mayo, 2025</span>
                  </div>
                  <div className="course-info-row">
                    <span className="info-label">Modalidad:</span>
                    <span className="info-value">Presencial</span>
                  </div>
                  <div className="course-info-row">
                    <span className="info-label">Costo:</span>
                    <span className="info-value info-price">{formatCurrency(getCourseCost())}</span>
                  </div>
                </div>
              ) : (
                <p className="no-course-selected">Selecciona un curso para ver sus detalles</p>
              )}
            </div>
          </div>
        )}
        
        {/* Paso 4: Información Adicional y Confirmación */}
        {currentStep === 4 && (
          <div className="form-step">
            <h2>Información Adicional y Confirmación</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>¿Cómo nos conociste?</label>
                <select 
                  value={formData.additionalInfo.howDidYouHear}
                  onChange={(e) => handleInputChange('additionalInfo', 'howDidYouHear', e.target.value)}
                >
                  <option value="">Seleccionar...</option>
                  <option value="social">Redes Sociales</option>
                  <option value="friend">Recomendación de un amigo</option>
                  <option value="search">Buscador</option>
                  <option value="ad">Publicidad</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group full-width">
                <label>Comentarios adicionales</label>
                <textarea 
                  value={formData.additionalInfo.comments}
                  onChange={(e) => handleInputChange('additionalInfo', 'comments', e.target.value)}
                  rows="3"
                ></textarea>
              </div>
            </div>
            
            <div className="form-summary">
              <h3>Resumen de la Inscripción</h3>
              <div className="summary-container">
                <div className="summary-section">
                  <h4>Datos Personales</h4>
                  <p><strong>Nombre:</strong> {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                  <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                  <p><strong>Documento:</strong> {formData.personalInfo.documentType.toUpperCase()} - {formData.personalInfo.documentNumber}</p>
                </div>
                
                <div className="summary-section">
                  <h4>Curso Seleccionado</h4>
                  <p><strong>Área:</strong> {formData.courseInfo.area}</p>
                  <p><strong>Nivel:</strong> {formData.courseInfo.level}</p>
                  <p><strong>Curso:</strong> {formData.courseInfo.course}</p>
                  <p><strong>Horario:</strong> {formData.courseInfo.schedule}</p>
                  <p><strong>Costo Total:</strong> <span className="total-cost">{formatCurrency(getCourseCost())}</span></p>
                </div>
              </div>
            </div>
            
            <div className="form-group terms-container">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={formData.acceptTerms}
                  onChange={(e) => handleCheckboxChange('acceptTerms', e.target.checked)}
                  className={errors.acceptTerms ? 'error-checkbox' : ''}
                />
                <span className="checkmark"></span>
                Acepto los <a href="/terminos" target="_blank">términos y condiciones</a> y la <a href="/privacidad" target="_blank">política de privacidad</a> *
              </label>
              {errors.acceptTerms && (
                <span className="error-message">{errors.acceptTerms}</span>
              )}
            </div>
          </div>
        )}
        
        <div className="form-navigation">
          {currentStep > 1 && (
            <button 
              type="button" 
              className="back-btn"
              onClick={prevStep}
            >
              Anterior
            </button>
          )}
          
          {currentStep < 4 ? (
            <button 
              type="button" 
              className="next-btn"
              onClick={nextStep}
            >
              Siguiente
            </button>
          ) : (
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Procesando...' : 'Completar Inscripción'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default IndividualRegistrationForm;
