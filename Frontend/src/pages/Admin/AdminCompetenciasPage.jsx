import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const AdminCompetenciasPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [competencias, setCompetencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/competencias")
      .then((res) => res.json())
      .then((data) => {
        setCompetencias(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className={`flex-grow p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02] mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent">
            Lista de Competencias
          </h1>
        </div>
        {loading && <p>Cargando competencias...</p>}
        {error && <p className="text-red-500">Error al cargar competencias</p>}
        {Array.isArray(competencias) && competencias.length > 0 ? (
          <ul className="divide-y divide-gray-200 bg-white rounded shadow">
            {competencias.map((comp) => (
              <li key={comp.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-semibold">{comp.nombre}</div>
                  <div className="text-sm text-gray-500">
                    Área: {comp.area_categoria?.area?.nombre || "-"} | Categoría: {comp.area_categoria?.categoria?.nombre || "-"}
                  </div>
                </div>
                <button
                  className="mt-2 sm:mt-0 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-semibold"
                  onClick={() => window.open(`http://localhost:8000/api/competencias/${comp.id}/comprobantes`, '_blank')}
                >
                  Obtener comprobantes
                </button>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No hay competencias registradas.</p>
        )}
      </div>
    </div>
  );
};

export default AdminCompetenciasPage;
