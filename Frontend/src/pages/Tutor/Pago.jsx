import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Pagos = () => {
  const { token } = useAuth();
  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // ← Añade esto
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    axios.get("http://localhost:8000/api/tutor/inscripciones", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      const habilitados = res.data.data.filter(p => p.habilitado === 1);
      setPagos(habilitados);
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
  }, [token]);

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
        {!isLoginPage && (  
           <Sidebar 
            isOpen={sidebarOpen}  
            onToggle={() => setSidebarOpen(!sidebarOpen)} 
            />
        )}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Pagos de Estudiantes</h1>
        {loading ? (
          <div className="text-center mt-10">Cargando pagos...</div>
        ) : (
          <div className="grid gap-4">
            {pagos.map((pago) => (
              <div key={pago.id} className="bg-white p-4 rounded-md shadow-sm border border-[#D9D9D9]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{pago.estudiante.nombres} {pago.estudiante.apellidos}</p>
                    <p className="text-sm text-gray-600">{pago.estudiante.ci} | {pago.competencia.nombre}</p>
                    <p className="text-sm text-gray-600">Área: {pago.competencia.area_categoria.area.nombre} - {pago.competencia.area_categoria.categoria.nombre} ({pago.competencia.area_categoria.grado})</p>
                    <p className="text-sm font-medium text-gray-800 mt-1">Bs. {pago.competencia.monto}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/boleta/${pago.id}`, { state: { pago } })}
                    className="bg-[#C8B7A6] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
                  >
                    Ver Boleta
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagos;
