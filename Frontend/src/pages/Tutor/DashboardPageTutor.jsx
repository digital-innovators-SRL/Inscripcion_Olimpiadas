import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { DownloadIcon, FilterIcon, SearchIcon } from 'lucide-react';

const DashboardPageTutor = () => {
  // Estados para filtros dinámicos
  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [grados, setGrados] = useState([]);
  const [niveles, setNiveles] = useState([]);

  // Estados para filtros seleccionados
  const [categoriaFilter, setCategoriaFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [gradoFilter, setGradoFilter] = useState('');
  const [nivelFilter, setNivelFilter] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('');
  const [fechaFilter, setFechaFilter] = useState('');

  // Resultados filtrados
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);

  // Obtener datos de filtros dinámicos al cargar la página
  useEffect(() => {
    fetch('/api/tutor/dashboard/filtros', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setCategorias(data.categorias || []);
        setAreas(data.areas || []);
        setGrados(data.grados || []);
        setNiveles(data.niveles || []);
      })
      .catch(err => console.error('Error cargando filtros:', err));
  }, []);

  // Función para buscar inscripciones filtradas
  const handleBuscar = async () => {
    const body = {
      categoria_id: categoriaFilter || undefined,
      area_id: areaFilter || undefined,
      grado: gradoFilter || undefined,
      nivel: nivelFilter || undefined,
      estado: estadoFilter || undefined,
      fecha: fechaFilter || undefined,
    };

    try {
      const response = await fetch('/api/tutor/dashboard/inscripciones-filtradas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error en la consulta');
      }

      const data = await response.json();
      setFilteredRegistrations(data);
    } catch (error) {
      console.error('Error buscando inscripciones:', error);
      setFilteredRegistrations([]);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Reportes</h1>
          <div className="flex items-center">
            <span className="mr-4">Tutor User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8">
          <div className="flex items-center mb-4">
            <FilterIcon size={20} className="mr-2 text-[#4F4F4F]" />
            <h2 className="text-lg font-semibold">Filtros</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <label htmlFor="categoria" className="block text-sm font-medium mb-1">Categoría</label>
              <select
                id="categoria"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={categoriaFilter}
                onChange={e => setCategoriaFilter(e.target.value)}
              >
                <option value="">Todas</option>
                {categorias.map(cat => (
                  <option key={cat.categoria_id} value={cat.categoria_id}>
                    {`Categoría ${cat.categoria_id}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-medium mb-1">Área</label>
              <select
                id="area"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={areaFilter}
                onChange={e => setAreaFilter(e.target.value)}
              >
                <option value="">Todas</option>
                {areas.map(area => (
                  <option key={area.area_id} value={area.area_id}>
                    {`Área ${area.area_id}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="grado" className="block text-sm font-medium mb-1">Grado</label>
              <select
                id="grado"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={gradoFilter}
                onChange={e => setGradoFilter(e.target.value)}
              >
                <option value="">Todos</option>
                {grados.map(g => (
                  <option key={g.grado} value={g.grado}>
                    {`Grado ${g.grado}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="nivel" className="block text-sm font-medium mb-1">Nivel</label>
              <select
                id="nivel"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={nivelFilter}
                onChange={e => setNivelFilter(e.target.value)}
              >
                <option value="">Todos</option>
                {niveles.map(n => (
                  <option key={n.nivel} value={n.nivel}>
                    {n.nivel}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="estado" className="block text-sm font-medium mb-1">Estado</label>
              <select
                id="estado"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={estadoFilter}
                onChange={e => setEstadoFilter(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="Confirmado">Confirmado</option>
                <option value="Pendiente">Pendiente</option>
              </select>
            </div>

            <div>
              <label htmlFor="fecha" className="block text-sm font-medium mb-1">Fecha</label>
              <input
                type="date"
                id="fecha"
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                value={fechaFilter}
                onChange={e => setFechaFilter(e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={handleBuscar}
                className="bg-[#A9B2AC] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
              >
                <SearchIcon size={18} className="mr-2" />
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Tabla de resultados */}
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Inscripciones Registradas</h2>
            <button className="bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
              <DownloadIcon size={18} className="mr-2" />
              Exportar a Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-[#D9D9D9]">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Estudiante</th>
                  <th className="text-left py-3 px-4">Área</th>
                  <th className="text-left py-3 px-4">Nivel</th>
                  <th className="text-left py-3 px-4">Fecha</th>
                  <th className="text-left py-3 px-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No se encontraron resultados
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map(reg => (
                    <tr key={reg.id} className="border-b border-[#D9D9D9]">
                      <td className="py-3 px-4">{reg.id}</td>
                      <td className="py-3 px-4">{reg.estudiante?.nombre || 'N/A'}</td>
                      <td className="py-3 px-4">{reg.areaCategoria?.area_id || 'N/A'}</td>
                      <td className="py-3 px-4">{reg.areasCompetencia?.nivel || 'N/A'}</td>
                      <td className="py-3 px-4">{new Date(reg.created_at).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            reg.estado_pago === 'Confirmado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {reg.estado_pago}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageTutor;
