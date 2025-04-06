import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Sidebar from '../components/Sidebar';
//import { UploadIcon, PlusIcon } from 'lucide-react';

const RegistrationPage = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();

  const handleAddArea = () => {
    setSelectedAreas([
      ...selectedAreas,
      {
        id: Date.now().toString(),
        name: '',
        level: '',
      },
    ]);
  };

  const handleAddTutor = () => {
    setTutors([
      ...tutors,
      {
        name: '',
        relationship: '',
        phone: '',
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment-slip');
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Inscripción</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <h2 className="text-xl font-semibold mb-6">Formulario de Inscripción</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre del estudiante</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
              </div>
              <div>
                <label htmlFor="id" className="block text-sm font-medium mb-1">Número de Cédula de Identidad</label>
                <input type="text" id="id" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
              </div>
              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium mb-1">Fecha de nacimiento</label>
                <input type="date" id="birthdate" className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
              </div>
            </div>
            <div className="border-t border-[#D9D9D9] pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Áreas de Competencia</h3>
                <button type="button" onClick={handleAddArea} className="text-[#A9B2AC] hover:text-opacity-80 flex items-center">
                  <PlusIcon size={18} className="mr-1" /> Agregar Área
                </button>
              </div>
              {selectedAreas.map((area) => (
                <div key={area.id} className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Área de competencia</label>
                    <select className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required>
                      <option value="">Seleccionar área</option>
                      <option value="matematicas">Matemáticas</option>
                      <option value="fisica">Física</option>
                      <option value="quimica">Química</option>
                      <option value="biologia">Biología</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Nivel/Categoría</label>
                    <select className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required>
                      <option value="">Seleccionar nivel</option>
                      <option value="basico">Básico</option>
                      <option value="intermedio">Intermedio</option>
                      <option value="avanzado">Avanzado</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-[#A9B2AC] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                Generar Boleta de Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
