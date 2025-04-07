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
  const [areas, setAreas] = useState([
    {
      nombre: 'Danza Moderna',
      costo: '30',
      niveles: { basico: true, intermedio: true, avanzado: false },
      datosMinimos: { cedula: true, fechaNac: true, tutor: false, emailColegio: true },
    },
    {
      nombre: 'Folklore',
      costo: '25',
      niveles: { basico: true, intermedio: false, avanzado: true },
      datosMinimos: { cedula: true, fechaNac: false, tutor: true, emailColegio: false },
    },
  ]);

  const [areaForm, setAreaForm] = useState(initialAreaState);
  const [mensaje, setMensaje] = useState('');
  const [editando, setEditando] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  // Cargar desde backend (si ya tienes uno)
  useEffect(() => {
    fetch('http://localhost:8000/api/areas')
      .then(res => res.json())
      .then(data => {
        console.log('Desde el backend:', data);
        // setAreas(data); // Descomenta esto cuando el backend esté funcionando
      })
      .catch(err => console.log('Error cargando backend:', err));
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
    } else {
      setAreas([...areas, areaForm]);
      setMensaje('Área registrada correctamente.');

      // Simulación POST al backend
      fetch('http://localhost:8000/api/areas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(areaForm),
      })
        .then(res => res.json())
        .then(data => console.log('Registrado en backend:', data))
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
    const nuevasAreas = areas.filter((_, i) => i !== indice);
    setAreas(nuevasAreas);
    setMensaje('Área eliminada.');

    // Simulación DELETE al backend
    fetch(`http://localhost:8000/api/areas/${indice}`, {
      method: 'DELETE',
    })
      .then(() => console.log('Eliminado en backend'))
      .catch(err => console.log('Error al eliminar:', err));
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
