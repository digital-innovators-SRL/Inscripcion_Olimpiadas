import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../../components/Sidebar';
import { DownloadIcon, SearchIcon } from 'lucide-react';
import * as XLSX from 'xlsx';

const DashboardPageTutor = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [grados, setGrados] = useState([]);
  const [niveles, setNiveles] = useState([]);

  const [categoriaFilter, setCategoriaFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [gradoFilter, setGradoFilter] = useState('');
  const [nivelFilter, setNivelFilter] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('Confirmado');
  const [fechaFilter, setFechaFilter] = useState('');

  useEffect(() => {
    const fetchFiltros = async () => {
      try {
        const token = localStorage.getItem('token');

        const [catRes, areaRes, gradoRes, nivelRes] = await Promise.all([
          fetch('/api/filtros/categorias', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/filtros/areas', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/filtros/grados', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/filtros/niveles', { headers: { Authorization: `Bearer ${token}` } })
        ]);

        const [catData, areaData, gradoData, nivelData] = await Promise.all([
          catRes.json(),
          areaRes.json(),
          gradoRes.json(),
          nivelRes.json()
        ]);

        setCategorias(catData);
        setAreas(areaData);
        setGrados(gradoData);
        setNiveles(nivelData);

        if (catData.length) setCategoriaFilter(catData[0].categoria_id);
        if (areaData.length) setAreaFilter(areaData[0].area_id);
        if (gradoData.length) setGradoFilter(gradoData[0].grado);
        if (nivelData.length) setNivelFilter(nivelData[0].nivel);
      } catch (error) {
        console.error('Error cargando filtros:', error);
      }
    };

    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://dis.tis.cs.umss.edu.bo/api/tutor/getDashboardData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Error al obtener los datos del dashboard');

        const data = await response.json();
        setRegistrations(data.inscripciones);
      } catch (error) {
        console.error('Error en el fetch del dashboard:', error);
      }
    };

    fetchFiltros();
    fetchDashboardData();
  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    let sortable = [...registrations];
    if (searchTerm) {
      sortable = sortable.filter(reg =>
        Object.values(reg).some(val =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (sortConfig.key !== null) {
      sortable.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortable.slice(0, 20); // Paginación simple
  }, [registrations, searchTerm, sortConfig]);

  const exportToExcel = () => {
    const dataToExport = sortedData.map(reg => ({
      ID: reg.id,
      Estudiante: `${reg.estudiante_nombre} ${reg.estudiante_apellido}`,
      Área: reg.area_nombre,
      Nivel: reg.categoria_nombre,
      Estado: reg.habilitado ? 'Habilitado' : 'Deshabilitado'
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Inscripciones');
    XLSX.writeFile(workbook, 'Reporte_Inscripciones.xlsx');
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

        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Inscripciones Registradas</h2>
            <button onClick={exportToExcel} className="bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
              <DownloadIcon size={18} className="mr-2" />
              Exportar a Excel
            </button>
          </div>

          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-[#D9D9D9]">
                  <th onClick={() => requestSort('id')} className="py-3 px-4 cursor-pointer">ID</th>
                  <th onClick={() => requestSort('estudiante_nombre')} className="py-3 px-4 cursor-pointer">Estudiante</th>
                  <th onClick={() => requestSort('area_nombre')} className="py-3 px-4 cursor-pointer">Área</th>
                  <th onClick={() => requestSort('categoria_nombre')} className="py-3 px-4 cursor-pointer">Nivel</th>
                  <th onClick={() => requestSort('habilitado')} className="py-3 px-4 cursor-pointer">Estado</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      No se encontraron resultados
                    </td>
                  </tr>
                ) : (
                  sortedData.map(reg => (
                    <tr key={reg.id} className="border-b border-[#D9D9D9]">
                      <td className="py-3 px-4">{reg.id}</td>
                      <td className="py-3 px-4">{reg.estudiante_nombre} {reg.estudiante_apellido}</td>
                      <td className="py-3 px-4">{reg.area_nombre}</td>
                      <td className="py-3 px-4">{reg.categoria_nombre}</td>
                      <td className="py-3 px-4">
                        {reg.habilitado ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Habilitado</span>
                        ) : (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Deshabilitado</span>
                        )}
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
