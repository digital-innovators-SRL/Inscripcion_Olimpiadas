import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import { 
  Trophy, 
  Filter, 
  BookOpen, 
  Tag, 
  ChevronDown, 
  Search, 
  Calendar, 
  Clock, 
  DollarSign, 
  UserPlus 
} from 'lucide-react'

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
  <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
    <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

    <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-6 sm:p-8`}>
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8" style={{borderColor: '#E8DDD4'}}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{
                background: 'linear-gradient(135deg, #5A4A3A, #8B7355)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Competencias Disponibles
              </h1>
              <p className="text-sm sm:text-base" style={{color: '#8B7355'}}>
                Explora y regístrate en las competencias académicas
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg border-2"
                   style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border" style={{borderColor: '#E8DDD4'}}>
          {/* Filters Header */}
          <div className="p-6 sm:p-8 pb-4 sm:pb-6 border-b" style={{
            background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
            borderColor: 'rgba(91, 74, 58, 0.3)'
          }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold" style={{color: '#5A4A3A'}}>
                  Filtros de Búsqueda
                </h2>
                <p className="text-xs sm:text-sm" style={{color: '#8B7355'}}>
                  Encuentra las competencias que te interesan
                </p>
              </div>
            </div>
          </div>

          {/* Filters Content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Área Filter */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                  Área de Competencia
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                  <select
                    onChange={(e) => setFiltroArea(e.target.value)}
                    value={filtroArea}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base appearance-none"
                    style={{
                      backgroundColor: '#FAF7F2',
                      borderColor: '#E8DDD4',
                      color: '#5A4A3A'
                    }}
                  >
                    <option value="">Todas las Áreas</option>
                    {areas.map((area) => (
                      <option key={area.id} value={area.nombre}>
                        {area.nombre}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" style={{color: '#8B7355'}} />
                </div>
              </div>

              {/* Categoría Filter */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                  Categoría
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                  <select
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    value={filtroCategoria}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base appearance-none"
                    style={{
                      backgroundColor: '#FAF7F2',
                      borderColor: '#E8DDD4',
                      color: '#5A4A3A'
                    }}
                  >
                    <option value="">Todas las Categorías</option>
                    {categorias.map((cat) => (
                      <option key={cat.id} value={cat.nombre}>
                        {cat.nombre}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" style={{color: '#8B7355'}} />
                </div>
              </div>

              {/* Results Counter */}
              <div className="flex items-end">
                <div className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border" style={{
                  backgroundColor: '#FAF7F2',
                  borderColor: '#E8DDD4'
                }}>
                  <div className="flex items-center space-x-2">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" style={{color: '#C8B7A6'}} />
                    <div>
                      <p className="text-xs font-medium" style={{color: '#8B7355'}}>Resultados</p>
                      <p className="font-bold text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                        {filtrarCompetencias().length} competencia{filtrarCompetencias().length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencias Grid */}
      {loading ? (
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-12 text-center" style={{borderColor: '#E8DDD4'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
                 style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
              <div className="w-8 h-8 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>
            </div>
            <div>
              <p className="font-semibold text-lg" style={{color: '#5A4A3A'}}>
                Cargando competencias...
              </p>
              <p className="text-sm" style={{color: '#8B7355'}}>
                Un momento por favor
              </p>
            </div>
          </div>
        </div>
      ) : filtrarCompetencias().length === 0 ? (
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-12 text-center" style={{borderColor: '#E8DDD4'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
                 style={{backgroundColor: '#FAF7F2'}}>
              <Trophy className="w-8 h-8" style={{color: '#C8B7A6'}} />
            </div>
            <div>
              <p className="font-semibold text-lg" style={{color: '#5A4A3A'}}>
                No se encontraron competencias
              </p>
              <p className="text-sm" style={{color: '#8B7355'}}>
                Intenta ajustar los filtros de búsqueda
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrarCompetencias().map((comp) => (
            <div
              key={comp.id}
              className="bg-white/90 backdrop-blur-md border rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
              style={{borderColor: '#E8DDD4'}}
            >
              {/* Card Header */}
              <div className="p-6 border-b" style={{
                background: 'linear-gradient(135deg, #FAF7F2, #F2EEE3)',
                borderColor: '#E8DDD4'
              }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold mb-2" style={{color: '#5A4A3A'}}>
                      {comp.nombre}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{backgroundColor: '#E8DDD4', color: '#5A4A3A'}}>
                        {comp.area_categoria.area.nombre}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{backgroundColor: '#D4C4B4', color: '#5A4A3A'}}>
                        {comp.area_categoria.categoria.nombre}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center ml-4"
                       style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 flex-shrink-0" style={{color: '#8B7355'}} />
                    <div>
                      <p className="text-xs font-medium" style={{color: '#8B7355'}}>Fecha de competencia</p>
                      <p className="font-semibold text-sm" style={{color: '#5A4A3A'}}>
                        {comp.fecha_competencia}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 flex-shrink-0" style={{color: '#8B7355'}} />
                    <div>
                      <p className="text-xs font-medium" style={{color: '#8B7355'}}>Inscripción hasta</p>
                      <p className="font-semibold text-sm" style={{color: '#5A4A3A'}}>
                        {comp.fecha_fin_inscripcion}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-4 h-4 flex-shrink-0" style={{color: '#8B7355'}} />
                    <div>
                      <p className="text-xs font-medium" style={{color: '#8B7355'}}>Monto de inscripción</p>
                      <p className="font-bold text-lg" style={{color: '#5A4A3A'}}>
                        Bs. {comp.monto}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t" style={{borderColor: '#E8DDD4'}}>
                  <button
                    onClick={() => handleInscripcion(comp.id)}
                    className="w-full flex items-center justify-center px-6 py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Inscribirse Ahora
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

export default CompetenciasTutor;
