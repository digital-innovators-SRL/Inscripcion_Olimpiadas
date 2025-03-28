import React, { useState } from 'react';

const initialAreaState = {
  nombre: '',
  costo: '',
  niveles: {
    basico: false,
    intermedio: false,
    avanzado: false,
  },
  // Sección de Datos Mínimos de Inscripción
  datosMinimos: {
    cedula: false,
    fechaNac: false,
    tutor: false,
    emailColegio: false,
  },
};

function RegistroAreasCompetencia() {
  // Estado para la lista de áreas registradas
  const [areas, setAreas] = useState([]);
  // Estado para el formulario (nuevo registro o edición)
  const [areaForm, setAreaForm] = useState(initialAreaState);
  // Mensajes de error o confirmación
  const [mensaje, setMensaje] = useState('');
  // Control para saber si se está editando
  const [editando, setEditando] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  // Manejo del cambio en los inputs de texto para nombre y costo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAreaForm({ ...areaForm, [name]: value });
  };

  // Manejo de cambio en los checkboxes de niveles/categorías
  const handleNivelChange = (e) => {
    const { name, checked } = e.target;
    setAreaForm({
      ...areaForm,
      niveles: { ...areaForm.niveles, [name]: checked },
    });
  };

  // Manejo de cambio en los checkboxes de Datos Mínimos
  const handleDatosMinimosChange = (e) => {
    const { name, checked } = e.target;
    setAreaForm({
      ...areaForm,
      datosMinimos: { ...areaForm.datosMinimos, [name]: checked },
    });
  };

  // Validar formulario: se requiere nombre, costo > 0 y evitar duplicados para registros nuevos
  const validarFormulario = () => {
    if (!areaForm.nombre.trim() || !areaForm.costo.trim()) {
      setMensaje('El nombre y el costo son obligatorios.');
      return false;
    }
    if (Number(areaForm.costo) <= 0) {
      setMensaje('El costo debe ser un número positivo.');
      return false;
    }
    // Evitar duplicados solo en nuevo registro
    if (
      !editando &&
      areas.some(
        (area) =>
          area.nombre.trim().toLowerCase() === areaForm.nombre.trim().toLowerCase()
      )
    ) {
      setMensaje('Ya existe un área registrada con ese nombre.');
      return false;
    }
    return true;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('');

    if (!validarFormulario()) return;

    if (editando) {
      // Actualizar el área existente
      const nuevasAreas = [...areas];
      nuevasAreas[indiceEdicion] = { ...areaForm };
      setAreas(nuevasAreas);
      setMensaje('Área actualizada con éxito.');
      setEditando(false);
      setIndiceEdicion(null);
    } else {
      // Agregar nueva área
      setAreas([...areas, { ...areaForm }]);
      setMensaje('Área registrada con éxito.');
    }
    // Reiniciar formulario
    setAreaForm(initialAreaState);
  };

  // Eliminar un área
  const handleEliminar = (indice) => {
    const nuevasAreas = areas.filter((_, i) => i !== indice);
    setAreas(nuevasAreas);
    setMensaje('Área eliminada.');
  };

  // Preparar el formulario para editar
  const handleEditar = (indice) => {
    setAreaForm({ ...areas[indice] });
    setEditando(true);
    setIndiceEdicion(indice);
    setMensaje('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registro de Áreas de Competencia</h2>
      {mensaje && <p style={{ color: 'blue' }}>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        {/* Datos del área */}
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
          <p>Niveles / Categorías:</p>
          <label>
            <input
              type="checkbox"
              name="basico"
              checked={areaForm.niveles.basico}
              onChange={handleNivelChange}
            />
            Básico
          </label>
          <label>
            <input
              type="checkbox"
              name="intermedio"
              checked={areaForm.niveles.intermedio}
              onChange={handleNivelChange}
            />
            Intermedio
          </label>
          <label>
            <input
              type="checkbox"
              name="avanzado"
              checked={areaForm.niveles.avanzado}
              onChange={handleNivelChange}
            />
            Avanzado
          </label>
        </div>
        {/* Sección de Datos Mínimos de Inscripción */}
        <div>
          <p>Datos Mínimos de Inscripción:</p>
          <label>
            <input
              type="checkbox"
              name="cedula"
              checked={areaForm.datosMinimos.cedula}
              onChange={handleDatosMinimosChange}
            />
            Cédula de Identidad
          </label>
          <label>
            <input
              type="checkbox"
              name="fechaNac"
              checked={areaForm.datosMinimos.fechaNac}
              onChange={handleDatosMinimosChange}
            />
            Fecha de Nacimiento
          </label>
          <label>
            <input
              type="checkbox"
              name="tutor"
              checked={areaForm.datosMinimos.tutor}
              onChange={handleDatosMinimosChange}
            />
            Tutor Responsable
          </label>
          <label>
            <input
              type="checkbox"
              name="emailColegio"
              checked={areaForm.datosMinimos.emailColegio}
              onChange={handleDatosMinimosChange}
            />
            Email del Colegio
          </label>
        </div>
        <button type="submit">{editando ? 'Actualizar Área' : 'Registrar Área'}</button>
      </form>

      {/* Listado de áreas registradas */}
      <h3>Áreas Registradas</h3>
      {areas.length === 0 ? (
        <p>No hay áreas registradas.</p>
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
                  {Object.keys(area.niveles)
                    .filter((nivel) => area.niveles[nivel])
                    .join(', ') || 'Ninguno'}
                </td>
                <td>
                  {Object.keys(area.datosMinimos)
                    .filter((dato) => area.datosMinimos[dato])
                    .map((dato) => {
                      // Formatear nombres para visualización
                      if(dato === 'cedula') return 'Cédula';
                      if(dato === 'fechaNac') return 'Fecha Nac.';
                      if(dato === 'tutor') return 'Tutor';
                      if(dato === 'emailColegio') return 'Email Colegio';
                      return dato;
                    })
                    .join(', ') || 'Ninguno'}
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
}

export default RegistroAreasCompetencia;
