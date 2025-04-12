import React, { useState, useEffect } from 'react';

import './AdminStyles.css';

const CostConfigurationModule = () => {
  const [areas, setAreas] = useState([
    { id: 1, name: 'Idiomas', active: true },
    { id: 2, name: 'Tecnología', active: true },
    { id: 3, name: 'Artes', active: true },
    { id: 4, name: 'Ciencias', active: true },
    { id: 5, name: 'Humanidades', active: true }
  ]);

  const [levels, setLevels] = useState([
    { id: 1, name: 'Básico', active: true },
    { id: 2, name: 'Intermedio', active: true },
    { id: 3, name: 'Avanzado', active: true }
  ]);

  const [costs, setCosts] = useState([
    { areaId: 1, levelId: 1, cost: 350000 },
    { areaId: 1, levelId: 2, cost: 450000 },
    { areaId: 1, levelId: 3, cost: 550000 },
    { areaId: 2, levelId: 1, cost: 400000 },
    { areaId: 2, levelId: 2, cost: 550000 },
    { areaId: 2, levelId: 3, cost: 750000 },
    { areaId: 3, levelId: 1, cost: 300000 },
    { areaId: 3, levelId: 2, cost: 400000 },
    { areaId: 3, levelId: 3, cost: 500000 },
    { areaId: 4, levelId: 1, cost: 380000 },
    { areaId: 4, levelId: 2, cost: 480000 },
    { areaId: 4, levelId: 3, cost: 580000 },
    { areaId: 5, levelId: 1, cost: 320000 },
    { areaId: 5, levelId: 2, cost: 420000 },
    { areaId: 5, levelId: 3, cost: 520000 }
  ]);

  const [discounts, setDiscounts] = useState([
    { id: 1, name: 'Pronto pago', percentage: 10, active: true },
    { id: 2, name: 'Estudiante recurrente', percentage: 15, active: true },
    { id: 3, name: 'Grupos (3+ personas)', percentage: 20, active: true }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [newArea, setNewArea] = useState('');
  const [newLevel, setNewLevel] = useState('');
  const [newDiscount, setNewDiscount] = useState({ name: '', percentage: 0 });
  const [changesUnsaved, setChangesUnsaved] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [selectedAreaFilter, setSelectedAreaFilter] = useState('all');

  // Detecta cambios en costos para marcar como no guardados
  useEffect(() => {
    setChangesUnsaved(true);
  }, [costs]);

  const handleCostChange = (areaId, levelId, value) => {
    setCosts(costs.map(cost =>
      cost.areaId === areaId && cost.levelId === levelId
        ? { ...cost, cost: parseInt(value) || 0 }
        : cost
    ));
  };

  const handleAddArea = () => {
    if (!newArea.trim()) return;
    const newId = Math.max(...areas.map(area => area.id)) + 1;
    
    // Agregar nueva área
    setAreas([...areas, { id: newId, name: newArea, active: true }]);
    
    // Agregar costos para la nueva área con cada nivel
    const newCosts = levels.map(level => ({
      areaId: newId,
      levelId: level.id,
      cost: 0
    }));
    
    setCosts([...costs, ...newCosts]);
    setNewArea('');
    setChangesUnsaved(true);
  };

  const handleAddLevel = () => {
    if (!newLevel.trim()) return;
    const newId = Math.max(...levels.map(level => level.id)) + 1;
    
    // Agregar nuevo nivel
    setLevels([...levels, { id: newId, name: newLevel, active: true }]);
    
    // Agregar costos para cada área con el nuevo nivel
    const newCosts = areas.map(area => ({
      areaId: area.id,
      levelId: newId,
      cost: 0
    }));
    
    setCosts([...costs, ...newCosts]);
    setNewLevel('');
    setChangesUnsaved(true);
  };

  const handleAddDiscount = () => {
    if (!newDiscount.name.trim() || newDiscount.percentage <= 0) return;
    const newId = Math.max(...discounts.map(discount => discount.id)) + 1;
    
    setDiscounts([...discounts, {
      id: newId,
      name: newDiscount.name,
      percentage: parseInt(newDiscount.percentage),
      active: true
    }]);
    
    setNewDiscount({ name: '', percentage: 0 });
    setChangesUnsaved(true);
  };

  const handleToggleAreaActive = (id) => {
    setAreas(areas.map(area =>
      area.id === id ? { ...area, active: !area.active } : area
    ));
    setChangesUnsaved(true);
  };

  const handleToggleLevelActive = (id) => {
    setLevels(levels.map(level =>
      level.id === id ? { ...level, active: !level.active } : level
    ));
    setChangesUnsaved(true);
  };

  const handleToggleDiscountActive = (id) => {
    setDiscounts(discounts.map(discount =>
      discount.id === id ? { ...discount, active: !discount.active } : discount
    ));
    setChangesUnsaved(true);
  };

  const handleSaveChanges = () => {
    // Aquí se enviarían los cambios al backend
    console.log('Guardando cambios:', { areas, levels, costs, discounts });
    
    // Mostrar mensaje de éxito
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
    setChangesUnsaved(false);
    setEditMode(false);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };

  const filteredAreas = selectedAreaFilter === 'all' 
    ? areas 
    : areas.filter(area => area.active === (selectedAreaFilter === 'active'));

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Configuración de Costos y Descuentos</h1>
        <div className="admin-actions">
          <button 
            className={`edit-button ${editMode ? 'active' : ''}`} 
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancelar Edición' : 'Editar Configuración'}
          </button>
          {changesUnsaved && (
            <button 
              className="save-button" 
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
          )}
        </div>
      </div>

      {showSaveSuccess && (
        <div className="success-message">
          <p>¡Cambios guardados exitosamente!</p>
        </div>
      )}

      <div className="admin-content">
        <div className="config-section">
          <h2>Tabla de Costos por Área y Nivel</h2>
          
          <div className="filter-container">
            <label>Filtrar áreas:</label>
            <select 
              value={selectedAreaFilter} 
              onChange={(e) => setSelectedAreaFilter(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="active">Activas</option>
              <option value="inactive">Inactivas</option>
            </select>
          </div>

          <div className="costs-table-container">
            <table className="costs-table">
              <thead>
                <tr>
                  <th>Área</th>
                  <th>Estado</th>
                  {levels.map(level => (
                    <th key={level.id}>
                      {level.name}
                      {editMode && (
                        <button 
                          className={`status-indicator ${level.active ? 'active' : 'inactive'}`}
                          onClick={() => handleToggleLevelActive(level.id)}
                        >
                          {level.active ? 'Activo' : 'Inactivo'}
                        </button>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredAreas.map(area => (
                  <tr key={area.id} className={area.active ? '' : 'inactive-row'}>
                    <td>{area.name}</td>
                    <td>
                      {editMode ? (
                        <button 
                          className={`toggle-button ${area.active ? 'active' : 'inactive'}`}
                          onClick={() => handleToggleAreaActive(area.id)}
                        >
                          {area.active ? 'Activo' : 'Inactivo'}
                        </button>
                      ) : (
                        <span className={`status-badge ${area.active ? 'active' : 'inactive'}`}>
                          {area.active ? 'Activo' : 'Inactivo'}
                        </span>
                      )}
                    </td>
                    {levels.map(level => {
                      const costItem = costs.find(
                        cost => cost.areaId === area.id && cost.levelId === level.id
                      );
                      return (
                        <td key={level.id}>
                          {editMode ? (
                            <input
                              type="number"
                              value={costItem ? costItem.cost : 0}
                              onChange={(e) => handleCostChange(area.id, level.id, e.target.value)}
                              className="cost-input"
                              min="0"
                              step="10000"
                            />
                          ) : (
                            <span className="cost-display">
                              {costItem ? formatCurrency(costItem.cost) : formatCurrency(0)}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {editMode && (
            <div className="add-new-container">
              <div className="add-area">
                <h3>Agregar Nueva Área</h3>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Nombre del área"
                    value={newArea}
                    onChange={(e) => setNewArea(e.target.value)}
                  />
                  <button onClick={handleAddArea}>Agregar</button>
                </div>
              </div>

              <div className="add-level">
                <h3>Agregar Nuevo Nivel</h3>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Nombre del nivel"
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                  />
                  <button onClick={handleAddLevel}>Agregar</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="config-section discounts-section">
          <h2>Configuración de Descuentos</h2>
          
          <div className="discounts-container">
            <table className="discounts-table">
              <thead>
                <tr>
                  <th>Nombre del Descuento</th>
                  <th>Porcentaje</th>
                  <th>Estado</th>
                  {editMode && <th>Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {discounts.map(discount => (
                  <tr key={discount.id} className={discount.active ? '' : 'inactive-row'}>
                    <td>{discount.name}</td>
                    <td>{discount.percentage}%</td>
                    <td>
                      <span className={`status-badge ${discount.active ? 'active' : 'inactive'}`}>
                        {discount.active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    {editMode && (
                      <td>
                        <button 
                          className="toggle-button"
                          onClick={() => handleToggleDiscountActive(discount.id)}
                        >
                          {discount.active ? 'Desactivar' : 'Activar'}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {editMode && (
            <div className="add-discount">
              <h3>Agregar Nuevo Descuento</h3>
              <div className="input-group discount-inputs">
                <input
                  type="text"
                  placeholder="Nombre del descuento"
                  value={newDiscount.name}
                  onChange={(e) => setNewDiscount({...newDiscount, name: e.target.value})}
                />
                <input
                  type="number"
                  placeholder="Porcentaje"
                  value={newDiscount.percentage || ''}
                  onChange={(e) => setNewDiscount({...newDiscount, percentage: e.target.value})}
                  min="1"
                  max="100"
                />
                <button onClick={handleAddDiscount}>Agregar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostConfigurationModule;
