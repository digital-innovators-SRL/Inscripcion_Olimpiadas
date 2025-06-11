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
    <div className="flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]">
      {!isLoginPage && (
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}
      <div className="ml-64 p-8 w-full transition-all duration-300">
        {/* Header con glassmorphism */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-[#E8DDD4]/50">
          <h1 className="text-3xl font-bold text-[#5A4A3A] mb-2">Pagos de Estudiantes</h1>
          <p className="text-[#8B7355]">Gestiona y visualiza los pagos registrados</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[#E8DDD4] border-t-[#C8B7A6] rounded-full animate-spin"></div>
            </div>
            <p className="text-[#8B7355] mt-4 text-lg">Cargando pagos...</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {pagos.map((pago) => (
              <div 
                key={pago.id} 
                className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-[#E8DDD4]/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    {/* Información del estudiante */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#5A4A3A] mb-1">
                        {pago.estudiante.nombres} {pago.estudiante.apellidos}
                      </h3>
                      <div className="flex items-center gap-2 text-[#8B7355]">
                        <span className="bg-[#FAF7F2] px-3 py-1 rounded-lg text-sm font-medium border border-[#E8DDD4]">
                          CI: {pago.estudiante.ci}
                        </span>
                      </div>
                    </div>

                    {/* Información de la competencia */}
                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] rounded-lg p-4 border border-[#E8DDD4]/30">
                        <p className="font-semibold text-[#5A4A3A] mb-2">{pago.competencia.nombre}</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-[#C8B7A6]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#C8B7A6]/30">
                            {pago.competencia.area_categoria.area.nombre}
                          </span>
                          <span className="bg-[#B8A494]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#B8A494]/30">
                            {pago.competencia.area_categoria.categoria.nombre}
                          </span>
                          <span className="bg-[#8B7355]/20 text-[#5A4A3A] px-3 py-1 rounded-full border border-[#8B7355]/30">
                            Grado: {pago.competencia.area_categoria.grado}
                          </span>
                        </div>
                      </div>
                      
                      {/* Monto destacado */}
                      <div className="flex items-center justify-between">
                        <div className="bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-6 py-3 rounded-xl shadow-md">
                          <span className="text-lg font-bold">Bs. {pago.competencia.monto}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <div className="ml-6 flex flex-col items-end">
                    <button
                      onClick={() => navigate(`/boleta/${pago.id}`, { state: { pago } })}
                      className="bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-[#B8A494] group-hover:to-[#C8B7A6] border border-[#B8A494]/20"
                    >
                      <span className="flex items-center gap-2">
                        Ver Boleta
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
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
