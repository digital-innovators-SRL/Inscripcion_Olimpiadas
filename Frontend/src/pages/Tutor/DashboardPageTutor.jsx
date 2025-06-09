import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const DashboardPageTutor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={`flex-grow p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard del Tutor</h1>
        </div>
        
        {/* Resto del contenido de tu dashboard */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Bienvenido, Tutor</h2>
          <p className="text-gray-600">
            Aquí puedes gestionar todas las actividades relacionadas con las inscripciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageTutor;