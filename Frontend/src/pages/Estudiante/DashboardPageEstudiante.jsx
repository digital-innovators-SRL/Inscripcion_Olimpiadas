import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { 
  Calendar,
  Clock,
  Trophy,
  DollarSign,
  UserPlus,
  CheckCircle2,
  XCircle
} from 'lucide-react';


const DashboardPageEstudiante = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [competencias, setCompetencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tutores, setTutores] = useState([]);
  const [tutoresSeleccionados, setTutoresSeleccionados] = useState({});
  const [notificacion, setNotificacion] = useState({ tipo: "", mensaje: "" });
  const [inscribiendo, setInscribiendo] = useState(false);
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const compRes = await axios.get("http://localhost:8000/api/competencias-estudiante", { headers });
        const tutoRes = await axios.get("http://localhost:8000/api/tutores", { headers });
        setCompetencias(compRes.data);
        setTutores(tutoRes.data.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleInscripcion = async (idCompetencia) => {
    const tutorId = tutoresSeleccionados[idCompetencia];
    setNotificacion({ tipo: "", mensaje: "" });
    setInscribiendo(true);
    if (!tutorId) {
      alert("Por favor selecciona un tutor.");
      return;
    }

    const tutor = tutores.find((t) => t.id === parseInt(tutorId));
    if (!tutor) {
      alert("Tutor no encontrado.");
      return;
    }

    const payload = {
      estudiante: {
        nombres: user.nombres,
        apellidos: user.apellidos,
        ci: user.ci,
        fecha_nacimiento: user.fecha_nacimiento,
        email: user.email,
        colegio: user.colegio,
        curso: user.curso,
        departamento: user.departamento,
        provincia: user.provincia,
      },
      contacto_email: tutor.email,
      contacto_celular: tutor.celular,
      tutor_id: tutor.id,
      nombre_tutor: tutor.name,
      competencia_id: idCompetencia.toString()
    };

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const response = await axios.post("http://localhost:8000/api/inscribirse", payload, { headers, responseType: 'blob' });

      const blob = new Blob([response.data], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `inscripcion_${user.nombres}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      //alert("Inscripción exitosa.");
      setNotificacion({ tipo: "success", mensaje: "Orden de pago generada exitosamente." });
      setCompetencias((prev) => prev.map((comp) => {
        if (comp.id === idCompetencia) {
          return { ...comp, ya_inscrito: true };
        }
        return comp;
      }));
    } catch (error) {
      console.error("Error al inscribirse:", error);
      alert("Error durante la inscripción.");
    } finally {
      setInscribiendo(false);
    }
  };

  return (
  <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
    <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

    <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-6 sm:p-8`}>
      {notificacion.mensaje && (
        <div className={`flex items-center mb-6 p-4 rounded-xl text-white shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 duration-300
          ${notificacion.tipo === "success" ? "bg-green-500/90" : "bg-red-500/90"}`}>
          {notificacion.tipo === "success" ? (
            <CheckCircle2 size={20} className="mr-3 flex-shrink-0" />
          ) : (
            <XCircle size={20} className="mr-3 flex-shrink-0" />
          )}
          <span className="font-medium">{notificacion.mensaje}</span>
        </div>
      )}
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
              </div>
            </div>
          </div>
        </div>
      </div>
          
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
      ) : competencias.length === 0 ? 
        (<p>No existen competencias</p>) : 
        (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencias.map((comp) => (
            <div
              key={comp.id}
              className="bg-white/90 backdrop-blur-md border rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
              style={{borderColor: '#E8DDD4'}}
            >

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

                  <div className="flex items-center space-x-3">
                    <XCircle className="w-4 h-4 flex-shrink-0" style={{color: '#8B7355'}} />
                    <div>
                      <p className="text-xs font-medium" style={{color: '#8B7355'}}>Estado</p>
                      <p className="font-semibold text-sm" style={{color: '#5A4A3A'}}>
                        {comp.ya_inscrito ? 'Inscrito' : 'No Inscrito'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{color: '#5A4A3A'}}>
                      Selecciona un tutor
                    </label>
                    <select
                      className="w-full border rounded-lg p-2 text-sm"
                      style={{ borderColor: '#E8DDD4', color: '#5A4A3A' }}
                      value={tutoresSeleccionados[comp.id] || ''}
                      onChange={(e) =>
                        setTutoresSeleccionados((prev) => ({
                          ...prev,
                          [comp.id]: e.target.value,
                        }))
                      }
                    >
                      <option value="">-- Seleccionar tutor --</option>
                      {tutores.map((tutor) => (
                        <option key={tutor.id} value={tutor.id}>
                          {tutor.name} ({tutor.email})
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                <div className="pt-4 border-t" style={{borderColor: '#E8DDD4'}}>
                  <button
                    onClick={() => handleInscripcion(comp.id)}
                    className="w-full flex items-center justify-center px-6 py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={comp.ya_inscrito || !tutoresSeleccionados[comp.id] || inscribiendo}
                    style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    {comp.ya_inscrito ? 'Ya se encuentra inscrito' : 'Inscribirse Ahora'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>)
      }
    </div>
  </div>);
};

export default DashboardPageEstudiante;