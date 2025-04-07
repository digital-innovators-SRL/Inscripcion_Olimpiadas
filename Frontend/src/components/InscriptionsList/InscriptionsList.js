import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InscriptionsList.css';

const InscriptionsList = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [detailView, setDetailView] = useState(null);

  const statusOptions = [
    { value: 'all', label: 'Todos los estados' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'approved', label: 'Aprobado' },
    { value: 'rejected', label: 'Rechazado' }
  ];

  useEffect(() => {
    fetchInscriptions();
  }, []);

  const fetchInscriptions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/inscriptions');
      setInscriptions(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching inscriptions:", err);
      setError("Error al cargar las inscripciones. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:8000/api/inscriptions/${id}`, {
        status: newStatus
      });
      fetchInscriptions();
    } catch (err) {
      console.error("Error updating status:", err);
      setError("Error al actualizar el estado. Por favor, intente de nuevo.");
    }
  };

  const handleViewDetails = (inscription) => {
    setDetailView(inscription);
  };

  const closeDetails = () => {
    setDetailView(null);
  };

  const getFilteredInscriptions = () => {
    if (statusFilter === 'all') {
      return inscriptions;
    }
    return inscriptions.filter(inscription => inscription.status === statusFilter);
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'pending': return 'status-pending';
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      default: return '';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'pending': return 'Pendiente';
      case 'approved': return 'Aprobado';
      case 'rejected': return 'Rechazado';
      default: return status;
    }
  };

  if (loading) return <div className="loading">Cargando inscripciones...</div>;

  return (
    <div className="inscriptions-list-container">
      <div className="card">
        <h2>Lista de Inscripciones</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="filter-controls">
          <label htmlFor="status-filter">Filtrar por estado:</label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {getFilteredInscriptions().length === 0 ? (
          <p className="empty-message">No hay inscripciones para mostrar.</p>
        ) : (
          <div className="inscriptions-table-container">
            <table className="inscriptions-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Área</th>
                  <th>Nivel</th>
                  <th>Costo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredInscriptions().map(inscription => (
                  <tr key={inscription.id}>
                    <td>{inscription.name}</td>
                    <td>{inscription.email}</td>
                    <td>{inscription.area?.name || '-'}</td>
                    <td>{inscription.level?.name || '-'}</td>
                    <td>${inscription.cost}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(inscription.status)}`}>
                        {getStatusLabel(inscription.status)}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="btn-view" 
                          onClick={() => handleViewDetails(inscription)}
                        >
                          Ver Detalles
                        </button>
                        {inscription.status === 'pending' && (
                          <>
                            <button 
                              className="btn-approve" 
                              onClick={() => handleStatusChange(inscription.id, 'approved')}
                            >
                              Aprobar
                            </button>
                            <button 
                              className="btn-reject" 
                              onClick={() => handleStatusChange(inscription.id, 'rejected')}
                            >
                              Rechazar
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {detailView && (
        <div className="detail-modal-overlay">
          <div className="detail-modal">
            <div className="detail-modal-header">
              <h3>Detalles de la Inscripción</h3>
              <button className="btn-close" onClick={closeDetails}>×</button>
            </div>
            <div className="detail-modal-body">
              <div className="detail-section">
                <h4>Información Básica</h4>
                <div className="detail-row">
                  <div className="detail-label">Nombre:</div>
                  <div className="detail-value">{detailView.name}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Email:</div>
                  <div className="detail-value">{detailView.email}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Teléfono:</div>
                  <div className="detail-value">{detailView.phone || 'No proporcionado'}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Área:</div>
                  <div className="detail-value">{detailView.area?.name || '-'}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Nivel:</div>
                  <div className="detail-value">{detailView.level?.name || '-'}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Costo:</div>
                  <div className="detail-value">${detailView.cost}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Estado:</div>
                  <div className="detail-value">
                    <span className={`status-badge ${getStatusClass(detailView.status)}`}>
                      {getStatusLabel(detailView.status)}
                    </span>
                  </div>
                </div>
              </div>

              {detailView.additional_data && Object.keys(detailView.additional_data).length > 0 && (
                <div className="detail-section">
                  <h4>Información Adicional</h4>
                  {Object.entries(detailView.additional_data).map(([key, value]) => (
                    <div className="detail-row" key={key}>
                      <div className="detail-label">{key}:</div>
                      <div className="detail-value">{value || '-'}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="detail-actions">
                {detailView.status === 'pending' && (
                  <>
                    <button 
                      className="btn-approve" 
                      onClick={() => {
                        handleStatusChange(detailView.id, 'approved');
                        closeDetails();
                      }}
                    >
                      Aprobar Inscripción
                    </button>
                    <button 
                      className="btn-reject" 
                      onClick={() => {
                        handleStatusChange(detailView.id, 'rejected');
                        closeDetails();
                      }}
                    >
                      Rechazar Inscripción
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InscriptionsList;