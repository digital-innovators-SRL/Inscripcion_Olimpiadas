
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import toast from "react-hot-toast";

const AdminCompetenciasPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [competencias, setCompetencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tutores, setTutores] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCompetencia, setSelectedCompetencia] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [modalError, setModalError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const [competRes, tutoresRes] = await Promise.all([
          fetch("http://localhost:8000/api/competencias"),
          fetch("http://localhost:8000/api/tutores")
        ]);
        const competenciasData = await competRes.json();
        const tutoresData = await tutoresRes.json();
        setCompetencias(Array.isArray(competenciasData) ? competenciasData : []);
        setTutores(Array.isArray(tutoresData.data) ? tutoresData.data : []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
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
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8B7355] border-opacity-30 mb-4"></div>
            <p className="text-[#8B7355] text-lg font-semibold">Cargando competencias...</p>
          </div>
        )}
        {error && <p className="text-red-500">Error al cargar competencias</p>}
        {Array.isArray(competencias) && competencias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencias.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-xl shadow-lg border border-[#E8DDD4] p-6 flex flex-col justify-between hover:scale-[1.03] hover:shadow-2xl transition-all duration-200"
              >
                <div>
                  <div className="text-xl font-bold text-[#5A4A3A] mb-1 truncate" title={comp.nombre}>{comp.nombre}</div>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="inline-block mr-2 px-2 py-1 bg-[#F2EEE3] rounded text-[#8B7355] font-semibold">
                      Área: {comp.area_categoria?.area?.nombre || "-"}
                    </span>
                    <span className="inline-block px-2 py-1 bg-[#F2EEE3] rounded text-[#8B7355] font-semibold">
                      Categoría: {comp.area_categoria?.categoria?.nombre || "-"}
                    </span>
                  </div>
                </div>
                <button
                  className="mt-4 bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-semibold"
                  onClick={() => {
                    setSelectedCompetencia(comp);
                    setModalOpen(true);
                    setSelectedTutor("");
                    setModalError(null);
                  }}
                >
                  Obtener comprobantes
                </button>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p>No hay competencias registradas.</p>
        )}

        {/* Modal para seleccionar tutor y descargar comprobantes */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 min-w-[320px] max-w-[90vw] relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setModalOpen(false)}
                aria-label="Cerrar"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Descargar comprobantes de tutor</h2>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Selecciona un tutor:</label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={selectedTutor}
                  onChange={e => setSelectedTutor(e.target.value)}
                >
                  <option value="">-- Selecciona un tutor --</option>
                  {tutores.map(t => (
                    <option key={t.id} value={t.id}>{t.name} ({t.email})</option>
                  ))}
                </select>
              </div>
              {modalError && <div className="text-red-500 mb-2">{modalError}</div>}
              <button
                className={`px-4 py-2 rounded-lg shadow hover:scale-105 transition-all font-semibold w-full text-white
                  ${!selectedTutor ? 'bg-black' : 'bg-green-600'}`}
                disabled={!selectedTutor || downloading}
                onClick={async () => {
                  if (!selectedTutor) return;
                  setDownloading(true);
                  setModalError(null);
                  try {
                    const response = await fetch(`http://localhost:8000/api/competencias/${selectedCompetencia.id}/comprobantes?tutor_id=${selectedTutor}`);
                    if (!response.ok) {
                      // Intentar extraer mensaje del backend si es JSON
                      let errorMsg = 'No se pudo descargar el archivo.';
                      try {
                        const data = await response.json();
                        if (data && data.message) {
                          errorMsg = data.message;
                        }
                      } catch {}
                      //setModalError(errorMsg);
                      toast.error(errorMsg);
                      setDownloading(false);
                      return;
                    }
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `comprobantes_${selectedCompetencia.nombre}_${selectedTutor}.zip`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  } catch (err) {
                    setModalError('Error al intentar descargar los comprobantes.');
                    toast.error(err?.message || 'Error al intentar descargar los comprobantes.');
                  }
                  setDownloading(false);
                }}
              >
                {downloading ? 'Descargando...' : 'Descargar comprobantes'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCompetenciasPage;
