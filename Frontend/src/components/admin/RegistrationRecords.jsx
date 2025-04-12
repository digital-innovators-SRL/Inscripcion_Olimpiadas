import React, { useState, useEffect } from 'react';
import "../../assets/styles/TutorStyles.css";


const RegistrationRecords = () => {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    search: '',
    status: 'all',
    course: 'all',
    dateRange: 'all'
  });
  
  // Datos simulados para pruebas
  useEffect(() => {
    // Simular carga de datos desde el servidor
    setTimeout(() => {
      const mockData = [
        {
          id: 'REG-2025-001',
          student: {
            name: 'Carlos Rodríguez',
            email: 'carlos.rodriguez@gmail.com',
            document: 'DNI: 45678901',
            phone: '315-789-4561'
          },
          course: {
            name: 'Inglés B1',
            area: 'Idiomas',
            level: 'Intermedio',
            schedule: 'Tarde (13-17)'
          },
          payment: {
            status: 'Pagado',
            amount: '$450.000',
            date: '12/04/2025',
            method: 'Tarjeta de Crédito'
          },
          date: '10/04/2025',
          status: 'Activo'
        },
        {
          id: 'REG-2025-002',
          student: {
            name: 'Ana Martínez',
            email: 'ana.martinez@yahoo.com',
            document: 'DNI: 56789012',
            phone: '316-123-7890'
          },
          course: {
            name: 'Desarrollo Web',
            area: 'Tecnología',
            level: 'Intermedio',
            schedule: 'Noche (18-22)'
          },
          payment: {
            status: 'Pendiente',
            amount: '$550.000',
            date: '-',
            method: '-'
          },
          date: '09/04/2025',
          status: 'Pendiente'
        },
        {
          id: 'REG-2025-003',
          student: {
            name: 'Luis Fernández',
            email: 'luis.fernandez@outlook.com',
            document: 'Pasaporte: AB123456',
            phone: '317-456-7891'
          },
          course: {
            name: 'Inteligencia Artificial',
            area: 'Tecnología',
            level: 'Avanzado',
            schedule: 'Fin de semana'
          },
          payment: {
            status: 'Pagado',
            amount: '$650.000',
            date: '11/04/2025',
            method: 'Transferencia Bancaria'
          },
          date: '08/04/2025',
          status: 'Activo'
        },
        {
          id: 'REG-2025-004',
          student: {
            name: 'María López',
            email: 'maria.lopez@gmail.com',
            document: 'DNI: 67890123',
            phone: '318-234-5678'
          },
          course: {
            name: 'Francés A1',
            area: 'Idiomas',
            level: 'Básico',
            schedule: 'Mañana (8-12)'
          },
          payment: {
            status: 'Cancelado',
            amount: '$350.000',
            date: '05/04/2025',
            method: 'Efectivo'
          },
          date: '04/04/2025',
          status: 'Cancelado'
        },
        {
          id: 'REG-2025-005',
          student: {
            name: 'Pedro Sánchez',
            email: 'pedro.sanchez@hotmail.com',
            document: 'CE: 890123456',
            phone: '319-345-6789'
          },
          course: {
            name: 'Blockchain',
            area: 'Tecnología',
            level: 'Avanzado',
            schedule: 'Noche (18-22)'
          },
          payment: {
            status: 'Pagado',
            amount: '$750.000',
            date: '09/04/2025',
            method: 'PayPal'
          },
          date: '07/04/2025',
          status: 'Activo'
        }
      ];
      
      setRegistrations(mockData);
      setFilteredRegistrations(mockData);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Aplicar filtros
  useEffect(() => {
    let result = [...registrations];
    
    // Filtrar por término de búsqueda
    if (filter.search) {
      const searchTerm = filter.search.toLowerCase();
      result = result.filter(reg => 
        reg.student.name.toLowerCase().includes(searchTerm) || 
        reg.id.toLowerCase().includes(searchTerm) ||
        reg.student.email.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filtrar por estado
    if (filter.status !== 'all') {
      result = result.filter(reg => reg.status === filter.status);
    }
    
    // Filtrar por curso
    if (filter.course !== 'all') {
      result = result.filter(reg => reg.course.area === filter.course);
    }
    
    // Filtrar por rango de fecha
    if (filter.dateRange !== 'all') {
      const today = new Date();
      const startDate = new Date();
      
      switch(filter.dateRange) {
        case 'today':
          // Solo registros de hoy
          result = result.filter(reg => {
            const regDate = new Date(reg.date.split('/').reverse().join('-'));
            return regDate.toDateString() === today.toDateString();
          });
          break;
        case 'week':
          // Registros de la última semana
          startDate.setDate(today.getDate() - 7);
          result = result.filter(reg => {
            const regDate = new Date(reg.date.split('/').reverse().join('-'));
            return regDate >= startDate && regDate <= today;
          });
          break;
        case 'month':
          // Registros del último mes
          startDate.setMonth(today.getMonth() - 1);
          result = result.filter(reg => {
            const regDate = new Date(reg.date.split('/').reverse().join('-'));
            return regDate >= startDate && regDate <= today;
          });
          break;
        default:
          break;
      }
    }
    
    setFilteredRegistrations(result);
  }, [filter, registrations]);
  
  const handleFilterChange = (key, value) => {
    setFilter({
      ...filter,
      [key]: value
    });
  };
  
  const handleViewDetails = (registration) => {
    setSelectedRegistration(registration);
    setShowDetailModal(true);
  };
  
  const handleCloseModal = () => {
    setShowDetailModal(false);
  };
  
  const getStatusClass = (status) => {
    switch(status) {
      case 'Activo': return 'status-active';
      case 'Pendiente': return 'status-pending';
      case 'Cancelado': return 'status-cancelled';
      default: return '';
    }
  };
  
  return (
    <div className="tutor-container">
      <div className="tutor-header">
        <h1>Registro de Inscripciones</h1>
        <p>Gestiona y consulta las inscripciones de los estudiantes</p>
      </div>
      
      <div className="filters-container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Buscar por nombre, email o ID..." 
            value={filter.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
          <button className="search-btn">
            <i className="search-icon">🔍</i>
          </button>
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label>Estado:</label>
            <select 
              value={filter.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="Activo">Activo</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Área:</label>
            <select 
              value={filter.course}
              onChange={(e) => handleFilterChange('course', e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Artes">Artes</option>
              <option value="Ciencias">Ciencias</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Fecha:</label>
            <select 
              value={filter.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="today">Hoy</option>
              <option value="week">Última semana</option>
              <option value="month">Último mes</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="registrations-container">
        {loading ? (
          <div className="loading-indicator">Cargando registros...</div>
        ) : filteredRegistrations.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron registros con los filtros seleccionados.</p>
          </div>
        ) : (
          <table className="registrations-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Estudiante</th>
                <th>Curso</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Pago</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map(registration => (
                <tr key={registration.id}>
                  <td>{registration.id}</td>
                  <td className="student-cell">
                    <div className="student-name">{registration.student.name}</div>
                    <div className="student-email">{registration.student.email}</div>
                  </td>
                  <td>{registration.course.name}</td>
                  <td>{registration.date}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(registration.status)}`}>
                      {registration.status}
                    </span>
                  </td>
                  <td>
                    <span className={`payment-status ${registration.payment.status === 'Pagado' ? 'paid' : registration.payment.status === 'Pendiente' ? 'pending' : 'cancelled'}`}>
                      {registration.payment.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="view-btn"
                        onClick={() => handleViewDetails(registration)}
                      >
                        Ver detalles
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Modal de detalles */}
      {showDetailModal && selectedRegistration && (
        <div className="modal-overlay">
          <div className="modal-content registration-details-modal">
            <div className="modal-header">
              <h2>Detalles de Inscripción</h2>
              <button 
                className="close-btn"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="registration-id">
                <span className="id-label">ID de Inscripción:</span>
                <span className="id-value">{selectedRegistration.id}</span>
                <span className={`status-badge modal-status ${getStatusClass(selectedRegistration.status)}`}>
                  {selectedRegistration.status}
                </span>
              </div>
              
              <div className="detail-sections">
                <div className="detail-section">
                  <h3>Información del Estudiante</h3>
                  <div className="detail-row">
                    <span className="detail-label">Nombre:</span>
                    <span className="detail-value">{selectedRegistration.student.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{selectedRegistration.student.email}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Documento:</span>
                    <span className="detail-value">{selectedRegistration.student.document}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Teléfono:</span>
                    <span className="detail-value">{selectedRegistration.student.phone}</span>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Información del Curso</h3>
                  <div className="detail-row">
                    <span className="detail-label">Curso:</span>
                    <span className="detail-value">{selectedRegistration.course.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Área:</span>
                    <span className="detail-value">{selectedRegistration.course.area}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Nivel:</span>
                    <span className="detail-value">{selectedRegistration.course.level}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Horario:</span>
                    <span className="detail-value">{selectedRegistration.course.schedule}</span>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Información de Pago</h3>
                  <div className="detail-row">
                    <span className="detail-label">Estado:</span>
                    <span className={`payment-status ${selectedRegistration.payment.status === 'Pagado' ? 'paid' : selectedRegistration.payment.status === 'Pendiente' ? 'pending' : 'cancelled'}`}>
                      {selectedRegistration.payment.status}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Monto:</span>
                    <span className="detail-value">{selectedRegistration.payment.amount}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Fecha de Pago:</span>
                    <span className="detail-value">{selectedRegistration.payment.date}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Método:</span>
                    <span className="detail-value">{selectedRegistration.payment.method}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              {selectedRegistration.status === 'Pendiente' && (
                <div className="footer-actions">
                  <button className="approve-btn">Aprobar Inscripción</button>
                  <button className="reject-btn">Rechazar Inscripción</button>
                </div>
              )}
              <button 
                className="close-btn-text"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationRecords;
