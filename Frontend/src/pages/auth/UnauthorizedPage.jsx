import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlertIcon } from 'lucide-react';
const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen flex items-center justify-center bg-[#F2EEE3]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <ShieldAlertIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Acceso Denegado
        </h1>
        <p className="text-gray-600 mb-6">
          No tienes permisos suficientes para acceder a esta página.
        </p>
        <button onClick={() => navigate(-1)} className="bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Volver
        </button>
      </div>
    </div>;
};
export default UnauthorizedPage;