import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../contexts/AuthContext";

const CompetenciasTutor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [competencias, setCompetencias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtroArea, setFiltroArea] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [loading, setLoading] = useState(true);

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [compRes, areasRes, categoriasRes] = await Promise.all([
          axios.get("http://localhost:8000/api/tutor/competencias", { headers }),
          axios.get("http://localhost:8000/api/tutor/areas", { headers }),
          axios.get("http://localhost:8000/api/categorias", { headers }),
        ]);

        setCompetencias(compRes.data);
        setAreas(areasRes.data);
        setCategorias(categoriasRes.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const filtrarCompetencias = () => {
    return competencias.filter((comp) => {
      const area = comp.area_categoria.area.nombre.toLowerCase();
      const categoria = comp.area_categoria.categoria.nombre.toLowerCase();

      return (
        (!filtroArea || area === filtroArea.toLowerCase()) &&
        (!filtroCategoria || categoria === filtroCategoria.toLowerCase())
      );
    });
  };

  const handleInscripcion = (idCompetencia) => {
    navigate(`/registration/${idCompetencia}`);
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`flex-grow p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <h1 className="text-2xl font-bold mb-6">Competencias Disponibles</h1>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            onChange={(e) => setFiltroArea(e.target.value)}
            value={filtroArea}
            className="p-2 border border-[#D9D9D9] rounded-md"
          >
            <option value="">Todas las Áreas</option>
            {areas.map((area) => (
              <option key={area.id} value={area.nombre}>
                {area.nombre}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setFiltroCategoria(e.target.value)}
            value={filtroCategoria}
            className="p-2 border border-[#D9D9D9] rounded-md"
          >
            <option value="">Todas las Categorías</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Lista de competencias */}
        {loading ? (
          <div className="text-center mt-10">Cargando competencias...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrarCompetencias().map((comp) => (
              <div
                key={comp.id}
                className="bg-white border border-[#E0DAD0] rounded-2xl p-6 shadow hover:shadow-md transition duration-300"
              >
                <h2 className="text-lg font-bold text-gray-800 mb-3">{comp.nombre}</h2>

                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-semibold">Área:</span> {comp.area_categoria.area.nombre}</p>
                  <p><span className="font-semibold">Categoría:</span> {comp.area_categoria.categoria.nombre}</p>
                  <p><span className="font-semibold">Fecha competencia:</span> {comp.fecha_competencia}</p>
                  <p><span className="font-semibold">Inscripción hasta:</span> {comp.fecha_fin_inscripcion}</p>
                  <p><span className="font-semibold">Monto:</span> Bs. {comp.monto}</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleInscripcion(comp.id)}
                    className="bg-[#C8B7A6] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
                  >
                    Inscribirse
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
// CompetenciasTutor.jsx

export default CompetenciasTutor;
