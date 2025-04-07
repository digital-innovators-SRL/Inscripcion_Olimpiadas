import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CostConfiguration.css';

const CostConfiguration = () => {
  const [costs, setCosts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [levels, setLevels] = useState([]);
  const [formValues, setFormValues] = useState({
    area_id: '',
    level_id: '',
    cost: ''
  });
  const [newArea, setNewArea] = useState('');
  const [newLevel, setNewLevel] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState('costs'); // 'costs', 'areas', 'levels'

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [costsRes, areasRes, levelsRes] = await Promise.all([
        axios.get('http://localhost:8000/api/cost-configurations'),
        axios.get('http://localhost:8000/api/areas'),
        axios.get('http://localhost:8000/api/levels')
      ]);
      
      setCosts(costsRes.data);
      setAreas(areasRes.data);
      setLevels(levelsRes.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error al cargar los datos. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCostSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    try {
      await axios.post('http://localhost:8000/api/cost-configurations', formValues);
      setFormValues({ area_id: '', level_id: '', cost: '' });
      setSuccessMessage('Configuración de costo guardada correctamente');
      fetchData();
    } catch (err) {
      console.error("Error saving cost:", err);
      setError("Error al guardar la configuración de costo. Por favor, intente de nuevo.");
    }
  };

  const handleAreaSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    if (!newArea.trim()) {
      setError("El nombre del área no puede estar vacío");
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/areas', { name: newArea });
      setNewArea('');
      setSuccessMessage('Área agregada correctamente');
      fetchData();
    } catch (err) {
      console.error("Error saving area:", err);
      setError("Error al guardar el área. Por favor, intente de nuevo.");
    }
  };

  const handleLevelSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    if (!newLevel.trim()) {
      setError("El nombre del nivel no puede estar vacío");
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/levels', { name: newLevel });
      setNewLevel('');
      setSuccessMessage('Nivel agregado correctamente');
      fetchData();
    } catch (err) {
      console.error("Error saving level:", err);
      setError("Error al guardar el nivel. Por favor, intente de nuevo.");
    }
  };

  const handleDeleteCost = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cost-configurations/${id}`);
      fetchData();
      setSuccessMessage('Configuración de costo eliminada correctamente');
    } catch (err) {
      console.error("Error deleting cost:", err);
      setError("Error al eliminar la configuración de costo. Por favor, intente de nuevo.");
    }
  };

  if (loading) return <div className="loading">Cargando configuración de costos...</div>;

  return (
    <div className="cost-config-container">
      <div className="card">
        <h2>Configuración de Costos</h2>
        
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'costs' ? 'active' : ''}`}
            onClick={() => setActiveTab('costs')}
          >
            Costos
          </button>
          <button 
            className={`tab-button ${activeTab === 'areas' ? 'active' : ''}`}
            onClick={() => setActiveTab('areas')}
          >
            Áreas
          </button>
          <button 
            className={`tab-button ${activeTab === 'levels' ? 'active' : ''}`}
            onClick={() => setActiveTab('levels')}
          >
            Niveles
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'costs' && (
            <>
              <form onSubmit={handleCostSubmit} className="cost-form">
                <div className="form-row">
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
                  
                  <div className="form-group">
                    <label htmlFor="cost">Costo:</label>
                    <input
                      type="number"
                      id="cost"
                      name="cost"
                      value={formValues.cost}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="btn-primary">Guardar Configuración</button>
              </form>
              
              <h3 className="mt-20">Configuraciones de Costos Existentes</h3>
              
              {costs.length === 0 ? (
                <p className="empty-message">No hay configuraciones de costos definidas.</p>
              ) : (
                <div className="costs-list">
                  <table>
                    <thead>
                      <tr>
                        <th>Área</th>
                        <th>Nivel</th>
                        <th>Costo</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costs.map(cost => (
                        <tr key={cost.id}>
                          <td>{cost.area?.name}</td>
                          <td>{cost.level?.name}</td>
                          <td>${cost.cost}</td>
                          <td>
                            <button
                              className="btn-delete"
                              onClick={() => handleDeleteCost(cost.id)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'areas' && (
            <>
              <form onSubmit={handleAreaSubmit} className="entity-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="new-area">Nombre del Área:</label>
                    <input
                      type="text"
                      id="new-area"
                      value={newArea}
                      onChange={(e) => setNewArea(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="btn-primary">Agregar Área</button>
              </form>
              
              <h3 className="mt-20">Áreas Existentes</h3>
              
              {areas.length === 0 ? (
                <p className="empty-message">No hay áreas definidas.</p>
              ) : (
                <ul className="entities-list">
                  {areas.map(area => (
                    <li key={area.id}>{area.name}</li>
                  ))}
                </ul>
              )}
            </>
          )}
          
          {activeTab === 'levels' && (
            <>
              <form onSubmit={handleLevelSubmit} className="entity-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="new-level">Nombre del Nivel:</label>
                    <input
                      type="text"
                      id="new-level"
                      value={newLevel}
                      onChange={(e) => setNewLevel(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="btn-primary">Agregar Nivel</button>
              </form>
              
              <h3 className="mt-20">Niveles Existentes</h3>
              
              {levels.length === 0 ? (
                <p className="empty-message">No hay niveles definidos.</p>
              ) : (
                <ul className="entities-list">
                  {levels.map(level => (
                    <li key={level.id}>{level.name}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostConfiguration;