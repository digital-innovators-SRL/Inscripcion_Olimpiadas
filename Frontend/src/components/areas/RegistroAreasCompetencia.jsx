import React, { useEffect, useState } from 'react';
import "../../assets/styles/RegistroAreasCompetencia.css";

const initialAreaState = {
  nombre: '',
  costo: '',
  niveles: {
    basico: false,
    intermedio: false,
    avanzado: false,
  },
  datosMinimos: {
    cedula: false,
    fechaNac: false,
    tutor: false,
    emailColegio: false,
  },
};

const RegistroAreasCompetencia = () => {
  const [areas, setAreas] = useState([]);
  const [areaForm, setAreaForm] = useState(initialAreaState);
  const [mensaje, setMensaje] = useState('');
  const [editando, setEditando] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  // Cargar desde backend
  useEffect(() => {
    fetch('http://localhost:8000/api/areas')
      .then(res => res.json())
      .then(data => {
        console.log('Desde el backend:', data);
        setAreas(data);
      })
      .catch(err => console.log('Error cargando desde el backend:', err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAreaForm({ ...areaForm, [name]: value });
  };

  const handleNivelChange = (e) => {
    const { name, checked } = e.target;
    setAreaForm({
      ...areaForm,
      niveles: { ...areaForm.niveles, [name]: checked },
    });
  };

  const handleDatosMinimosChange = (e) => {
    const { name, checked } = e.target;
    setAreaForm({
      ...areaForm,
      datosMinimos: { ...areaForm.datosMinimos, [name]: checked },
    });
  };

  const validarFormulario = () => {
    if (!areaForm.nombre.trim() || !areaForm.costo.trim()) {
      setMensaje('Nombre y costo son obligatorios.');
      return false;
    }
    if (Number(areaForm.costo) <= 0) {
      setMensaje('El costo debe ser mayor a 0.');
      return false;
    }
    const yaExiste = areas.some(
      (area, i) =>
        area.nombre.trim().toLowerCase() === areaForm.nombre.trim().toLowerCase() &&
        (!editando || i !== indiceEdicion)
    );
    if (yaExiste) {
      setMensaje('Ya existe un área con ese nombre.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('');

    if (!validarFormulario()) return;

    if (editando) {
      const nuevasAreas = [...areas];
      nuevasAreas[indiceEdicion] = areaForm;
      setAreas(nuevasAreas);
      setEditando(false);
      setIndiceEdicion(null);
      setMensaje('Área actualizada correctamente.');

      // Llamada PUT al backend para actualizar el área
      fetch(`http://localhost:8000/api/areas/${areas[indiceEdicion].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(areaForm),
      })
        .then(res => res.json())
        .then(data => console.log('Área actualizada en backend:', data))
        .catch(err => console.log('Error al actualizar en backend:', err));
    } else {
      // Llamada POST al backend para registrar un nuevo área
      fetch('http://localhost:8000/api/areas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(areaForm),
      })
        .then(res => res.json())
        .then(data => {
          setAreas([...areas, data]); // Asumiendo que el backend devuelve el área registrada
          setMensaje('Área registrada correctamente.');
        })
        .catch(err => console.log('Error al guardar en backend:', err));
    }

    setAreaForm(initialAreaState);
  };

  const handleEditar = (indice) => {
    setAreaForm(areas[indice]);
    setEditando(true);
    setIndiceEdicion(indice);
  };

  const handleEliminar = (indice) => {
    const areaId = areas[indice].id;

    // Llamada DELETE al backend para eliminar el área
    fetch(`http://localhost:8000/api/areas/${areaId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const nuevasAreas = areas.filter((_, i) => i !== indice);
        setAreas(nuevasAreas);
        setMensaje('Área eliminada correctamente.');
      })
      .catch(err => console.log('Error al eliminar en backend:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registro de Áreas de Competencia</h2>
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Área:</label>
          <input
            type="text"
            name="nombre"
            value={areaForm.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Costo por Participante:</label>
          <input
            type="number"
            name="costo"
            value={areaForm.costo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Niveles:</p>
          {['basico', 'intermedio', 'avanzado'].map((nivel) => (
            <label key={nivel}>
              <input
                type="checkbox"
                name={nivel}
                checked={areaForm.niveles[nivel]}
                onChange={handleNivelChange}
              />
              {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
            </label>
          ))}
        </div>
        <div>
          <p>Datos Mínimos de Inscripción:</p>
          {['cedula', 'fechaNac', 'tutor', 'emailColegio'].map((dato) => (
            <label key={dato}>
              <input
                type="checkbox"
                name={dato}
                checked={areaForm.datosMinimos[dato]}
                onChange={handleDatosMinimosChange}
              />
              {dato === 'cedula'
                ? 'Cédula'
                : dato === 'fechaNac'
                ? 'Fecha Nac.'
                : dato === 'tutor'
                ? 'Tutor'
                : 'Email Colegio'}
            </label>
          ))}
        </div>
        <button type="submit">{editando ? 'Actualizar' : 'Registrar'}</button>
      </form>

      <h3>Áreas Registradas</h3>
      {areas.length === 0 ? (
        <p>No hay áreas registradas aún.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Niveles</th>
              <th>Datos Mínimos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area, i) => (
              <tr key={i}>
                <td>{area.nombre}</td>
                <td>{area.costo}</td>
                <td>
                  {Object.entries(area.niveles)
                    .filter(([_, val]) => val)
                    .map(([nivel]) => nivel)
                    .join(', ')}
                </td>
                <td>
                  {Object.entries(area.datosMinimos)
                    .filter(([_, val]) => val)
                    .map(([dato]) =>
                      dato === 'cedula'
                        ? 'Cédula'
                        : dato === 'fechaNac'
                        ? 'Fecha Nac.'
                        : dato === 'tutor'
                        ? 'Tutor'
                        : 'Email Colegio'
                    )
                    .join(', ')}
                </td>
                <td>
                  <button onClick={() => handleEditar(i)}>Editar</button>
                  <button onClick={() => handleEliminar(i)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegistroAreasCompetencia;
