import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { DownloadIcon, FilterIcon, SearchIcon } from 'lucide-react';
const ReportsPage = () => {
  const [dateFilter, setDateFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  // Mock data for the table
  const registrations = [{
    id: 1,
    student: 'Juan Pérez',
    area: 'Matemáticas',
    level: 'Avanzado',
    date: '15/11/2023',
    status: 'Confirmado'
  }, {
    id: 2,
    student: 'María García',
    area: 'Física',
    level: 'Intermedio',
    date: '14/11/2023',
    status: 'Pendiente'
  }, {
    id: 3,
    student: 'Carlos López',
    area: 'Química',
    level: 'Básico',
    date: '13/11/2023',
    status: 'Confirmado'
  }, {
    id: 4,
    student: 'Ana Martínez',
    area: 'Biología',
    level: 'Avanzado',
    date: '12/11/2023',
    status: 'Confirmado'
  }, {
    id: 5,
    student: 'Pedro Ramírez',
    area: 'Matemáticas',
    level: 'Intermedio',
    date: '11/11/2023',
    status: 'Pendiente'
  }, {
    id: 6,
    student: 'Laura Sánchez',
    area: 'Física',
    level: 'Básico',
    date: '10/11/2023',
    status: 'Confirmado'
  }, {
    id: 7,
    student: 'Miguel Torres',
    area: 'Química',
    level: 'Avanzado',
    date: '09/11/2023',
    status: 'Pendiente'
  }, {
    id: 8,
    student: 'Sofía Flores',
    area: 'Biología',
    level: 'Intermedio',
    date: '08/11/2023',
    status: 'Confirmado'
  }];
  return <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Reportes</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8">
          <div className="flex items-center mb-4">
            <FilterIcon size={20} className="mr-2 text-[#4F4F4F]" />
            <h2 className="text-lg font-semibold">Filtros</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Fecha
              </label>
              <input type="date" id="date" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" value={dateFilter} onChange={e => setDateFilter(e.target.value)} />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium mb-1">
                Área
              </label>
              <select id="area" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" value={areaFilter} onChange={e => setAreaFilter(e.target.value)}>
                <option value="">Todas</option>
                <option value="matematicas">Matemáticas</option>
                <option value="fisica">Física</option>
                <option value="quimica">Química</option>
                <option value="biologia">Biología</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-1">
                Estado de Pago
              </label>
              <select id="status" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="">Todos</option>
                <option value="confirmado">Confirmado</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="bg-[#A9B2AC] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <SearchIcon size={18} className="mr-2" />
                Buscar
              </button>
            </div>
          </div>
        </div>
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
                {registrations.map(reg => <tr key={reg.id} className="border-b border-[#D9D9D9]">
                    <td className="py-3 px-4">{reg.id}</td>
                    <td className="py-3 px-4">{reg.student}</td>
                    <td className="py-3 px-4">{reg.area}</td>
                    <td className="py-3 px-4">{reg.level}</td>
                    <td className="py-3 px-4">{reg.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${reg.status === 'Confirmado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {reg.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">
              Mostrando 1-8 de 24 resultados
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-[#D9D9D9] rounded-md bg-gray-50">
                1
              </button>
              <button className="px-3 py-1 border border-[#D9D9D9] rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-[#D9D9D9] rounded-md hover:bg-gray-50">
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ReportsPage;