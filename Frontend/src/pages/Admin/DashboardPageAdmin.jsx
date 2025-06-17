import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import necesario
import Sidebar from '../../components/Sidebar';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Estado del sidebar
  const location = useLocation(); // Hook para la ubicación
  const isLoginPage = location.pathname === '/login'; // Detección de página de login

  return (
  <div className="flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]">
    {/* Sidebar condicional */}
    {!isLoginPage && (
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
    )}
    
    {/* Contenido principal con margen dinámico */}
    <div 
      className={`flex-grow p-8 transition-all duration-300 ${
        !isLoginPage ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''
      }`}
    >
      {/* Título con ancho completo */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02] mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent">
          Dashboard del Administrador
        </h1>
        <p className="text-[#8B7355] mt-1 text-sm font-medium">
          Panel de control y gestión
        </p>
      </div>

      {/* Mensaje de bienvenida */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#E8DDD4] mb-8 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👋</span>
          </div>
          <h2 className="text-2xl font-bold text-[#5A4A3A] mb-4">¡Bienvenido de vuelta!</h2>
          <p className="text-[#8B7355] text-lg mb-6">
            Nos alegra verte hoy. Esperamos que tengas un excelente día administrando el sistema.
          </p>
        </div>
      </div>

      {/* Consejos del día */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-[#E8DDD4] transition-all duration-300">
        <h3 className="text-xl font-bold text-[#5A4A3A] mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Consejo del día
        </h3>
        <div className="bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] rounded-xl p-4 border border-[#E8DDD4]">
          <p className="text-[#5A4A3A] font-medium mb-2">
            Mantén tu espacio de trabajo organizado
          </p>
          <p className="text-[#8B7355]">
            Recuerda revisar regularmente las diferentes secciones del sistema para mantener 
            todo actualizado y funcionando sin problemas. ¡Tu trabajo es muy importante!
          </p>
          <div><button><a href="http://dis.tis.cs.umss.edu.bo/registro">Register</a></button></div>
        </div>
      </div>
    </div>
  </div>
);
}

export default DashboardPage;