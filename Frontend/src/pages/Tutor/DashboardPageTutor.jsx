import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../../components/Sidebar';
import { DownloadIcon, 
  Search, 
  ArrowUpDown, 
  FileText, 
  User, 
  CheckCircle, 
  XCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import * as XLSX from 'xlsx';

const DashboardPageTutor = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [grados, setGrados] = useState([]);
  const [niveles, setNiveles] = useState([]);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

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
  <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
    {!isLoginPage && (
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
    )}
    <div className={`transition-all duration-300 ${
      !isLoginPage ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''
    } p-6 sm:p-8`}>
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8" style={{borderColor: '#E8DDD4'}}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{
                background: 'linear-gradient(135deg, #5A4A3A, #8B7355)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Reportes
              </h1>
              <p className="text-sm sm:text-base" style={{color: '#8B7355'}}>
                Gestión y exportación de inscripciones
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                    Tutor User
                  </p>
                  <p className="text-xs sm:text-sm" style={{color: '#8B7355'}}>
                    Sistema de Reportes
                  </p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg border-2"
                     style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border" style={{borderColor: '#E8DDD4'}}>
        {/* Content Header */}
        <div className="p-6 sm:p-8 pb-4 sm:pb-6 border-b" style={{
          background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
          borderColor: 'rgba(91, 74, 58, 0.3)'
        }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold" style={{color: '#5A4A3A'}}>
                  Inscripciones Registradas
                </h2>
                <p className="text-xs sm:text-sm" style={{color: '#8B7355'}}>
                  Visualización y exportación de datos
                </p>
              </div>
            </div>
            <button 
              onClick={exportToExcel} 
              className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm"
              style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}
            >
              <DownloadIcon size={16} className="mr-2" />
              Exportar a Excel
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {/* Search Input */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
              <input
                type="text"
                placeholder="Buscar inscripciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base"
                style={{
                  backgroundColor: '#FAF7F2',
                  borderColor: '#E8DDD4',
                  color: '#5A4A3A'
                }}
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-lg sm:rounded-xl border" style={{borderColor: '#E8DDD4'}}>
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{
                  background: 'linear-gradient(135deg, #FAF7F2, #F2EEE3)',
                  borderColor: '#E8DDD4'
                }}>
                  <th 
                    onClick={() => requestSort('id')} 
                    className="py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base"
                    style={{color: '#5A4A3A'}}
                  >
                    <div className="flex items-center space-x-2">
                      <span>ID</span>
                      <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" style={{color: '#8B7355'}} />
                    </div>
                  </th>
                  <th 
                    onClick={() => requestSort('estudiante_nombre')} 
                    className="py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base"
                    style={{color: '#5A4A3A'}}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Estudiante</span>
                      <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" style={{color: '#8B7355'}} />
                    </div>
                  </th>
                  <th 
                    onClick={() => requestSort('area_nombre')} 
                    className="py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base"
                    style={{color: '#5A4A3A'}}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Área</span>
                      <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" style={{color: '#8B7355'}} />
                    </div>
                  </th>
                  <th 
                    onClick={() => requestSort('categoria_nombre')} 
                    className="py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base"
                    style={{color: '#5A4A3A'}}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Nivel</span>
                      <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" style={{color: '#8B7355'}} />
                    </div>
                  </th>
                  <th 
                    onClick={() => requestSort('habilitado')} 
                    className="py-4 px-4 sm:px-6 text-left cursor-pointer hover:bg-black/5 transition-colors duration-200 font-semibold text-sm sm:text-base"
                    style={{color: '#5A4A3A'}}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Estado</span>
                      <ArrowUpDown className="w-3 h-3 sm:w-4 sm:h-4" style={{color: '#8B7355'}} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-12">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                             style={{backgroundColor: '#FAF7F2'}}>
                          <Search className="w-8 h-8" style={{color: '#C8B7A6'}} />
                        </div>
                        <div>
                          <p className="font-medium text-base" style={{color: '#5A4A3A'}}>
                            No se encontraron resultados
                          </p>
                          <p className="text-sm" style={{color: '#8B7355'}}>
                            Intenta con otros términos de búsqueda
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  sortedData.map((reg, index) => (
                    <tr 
                      key={reg.id} 
                      className={`border-b hover:bg-black/5 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-white/50' : 'bg-white/20'
                      }`}
                      style={{borderColor: '#E8DDD4'}}
                    >
                      <td className="py-4 px-4 sm:px-6 font-medium text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                        #{reg.id}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                               style={{backgroundColor: '#FAF7F2'}}>
                            <User className="w-4 h-4" style={{color: '#C8B7A6'}} />
                          </div>
                          <span className="font-medium">
                            {reg.estudiante_nombre} {reg.estudiante_apellido}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                        <span className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{backgroundColor: '#FAF7F2', color: '#8B7355'}}>
                          {reg.area_nombre}
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                        <span className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{backgroundColor: '#FAF7F2', color: '#8B7355'}}>
                          {reg.categoria_nombre}
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        {reg.habilitado ? (
                          <span className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            <span>Habilitado</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                            <XCircle className="w-3 h-3" />
                            <span>Deshabilitado</span>
                          </span>
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
  </div>
);
};

export default DashboardPageTutor;
