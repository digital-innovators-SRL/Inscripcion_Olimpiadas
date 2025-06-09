import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import { 
  ArrowLeftIcon, 
  CheckCircle2, 
  XCircle, 
  FileText,
  User,
  Mail,
  Phone,
  School,
  MapPin,
  Calendar,
  CreditCard,
  Download,
  Loader2
} from "lucide-react";

const OrdenDePago = () => {
  const { id } = useParams();
  const { token, user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    estudiante: {
      nombres: "",
      apellidos: "",
      ci: "",
      fecha_nacimiento: "",
      email: "",
      colegio: "",
      curso: "",
      departamento: "",
      provincia: ""
    },
    contacto_email: "",
    contacto_celular: "",
    nombre_tutor: user?.name || "",
  });

  const [competencia, setCompetencia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notificacion, setNotificacion] = useState({ tipo: "", mensaje: "" });

  useEffect(() => {
    const fetchCompetencia = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/tutor/competencias`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const encontrada = res.data.find(c => c.id === parseInt(id));
        setCompetencia(encontrada || null);
      } catch (error) {
        console.error("Error al cargar competencia:", error);
      }
    };
    fetchCompetencia();
  }, [id, token]);

  const handleChange = (e, campo, nested = false) => {
    const { name, value } = e.target;
    if (nested) {
      setForm(prev => ({ ...prev, [campo]: { ...prev[campo], [name]: value } }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotificacion({ tipo: "", mensaje: "" });

    try {
      const res = await axios.post("http://localhost:8000/api/tutor/ordenPago", {
        ...form,
        competencia_id: id,
      }, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob"
      });

      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "orden_pago.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();

      setNotificacion({ tipo: "success", mensaje: "Orden de pago generada exitosamente." });
      setTimeout(() => navigate("/payment-slip"), 1800);
    } catch (err) {
      console.error("Error al generar orden:", err);
      const mensaje = err?.response?.data?.message || "No se pudo generar la orden de pago.";
      setNotificacion({ tipo: "error", mensaje });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
      <Sidebar />
      
      <div className="ml-64 p-6 lg:p-8">
        {/* Header con botón de volver */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-sm mb-4 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md border bg-white/80 backdrop-blur-md hover:bg-white/90"
            style={{borderColor: '#E8DDD4', color: '#5A4A3A'}}
          >
            <ArrowLeftIcon className="mr-2" size={18} />
            Volver
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border" 
                 style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold" 
                style={{background: 'linear-gradient(135deg, #5A4A3A, #8B7355)', 
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Generar Orden de Pago
            </h1>
          </div>
          <p className="text-sm" style={{color: '#8B7355'}}>
            Complete los datos para generar la orden de pago de la competencia
          </p>
        </div>

        {/* Información de la competencia */}
        {competencia && (
          <div className="bg-white/90 backdrop-blur-md border rounded-xl shadow-lg mb-6 overflow-hidden"
               style={{borderColor: '#E8DDD4'}}>
            <div className="p-4 border-b" 
                 style={{background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)'}}>
              <h2 className="text-lg font-bold flex items-center space-x-2" style={{color: '#5A4A3A'}}>
                <CreditCard className="w-5 h-5" style={{color: '#8B7355'}} />
                <span>{competencia.nombre}</span>
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <School className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium" style={{color: '#5A4A3A'}}>Área:</span>
                    <span className="ml-1" style={{color: '#8B7355'}}>{competencia.area_categoria.area.nombre}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium" style={{color: '#5A4A3A'}}>Categoría:</span>
                    <span className="ml-1" style={{color: '#8B7355'}}>{competencia.area_categoria.categoria.nombre}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notificación */}
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

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Datos del Estudiante */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden"
               style={{borderColor: '#E8DDD4'}}>
            <div className="p-4 border-b" 
                 style={{background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)'}}>
              <h2 className="text-lg font-bold flex items-center space-x-2" style={{color: '#5A4A3A'}}>
                <User className="w-5 h-5" style={{color: '#8B7355'}} />
                <span>Datos del Estudiante</span>
              </h2>
              <p className="text-sm mt-1" style={{color: '#8B7355'}}>Información personal del participante</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { field: "nombres", label: "Nombres", icon: User, type: "text" },
                  { field: "apellidos", label: "Apellidos", icon: User, type: "text" },
                  { field: "ci", label: "Cédula de Identidad", icon: FileText, type: "text" },
                  { field: "fecha_nacimiento", label: "Fecha de Nacimiento", icon: Calendar, type: "date" },
                  { field: "email", label: "Correo Electrónico", icon: Mail, type: "email" },
                  { field: "colegio", label: "Colegio", icon: School, type: "text" },
                  { field: "curso", label: "Curso", icon: FileText, type: "text" },
                  { field: "departamento", label: "Departamento", icon: MapPin, type: "text" },
                  { field: "provincia", label: "Provincia", icon: MapPin, type: "text" }
                ].map(({ field, label, icon: Icon, type }, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                      {label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                            style={{color: '#8B7355'}} />
                      <input
                        name={field}
                        type={type}
                        value={form.estudiante[field]}
                        onChange={(e) => handleChange(e, "estudiante", true)}
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                        style={{
                          backgroundColor: '#FAF7F2',
                          borderColor: '#E8DDD4',
                          color: '#5A4A3A',
                          focusRingColor: '#C8B7A6'
                        }}
                        placeholder={`Ingrese ${label.toLowerCase()}`}
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Datos de Contacto */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden"
               style={{borderColor: '#E8DDD4'}}>
            <div className="p-4 border-b" 
                 style={{background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)'}}>
              <h2 className="text-lg font-bold flex items-center space-x-2" style={{color: '#5A4A3A'}}>
                <Phone className="w-5 h-5" style={{color: '#8B7355'}} />
                <span>Datos de Contacto</span>
              </h2>
              <p className="text-sm mt-1" style={{color: '#8B7355'}}>Información para comunicaciones</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Email de Contacto
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                          style={{color: '#8B7355'}} />
                    <input
                      name="contacto_email"
                      type="email"
                      value={form.contacto_email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        backgroundColor: '#FAF7F2',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A',
                        focusRingColor: '#C8B7A6'
                      }}
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Celular de Contacto
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                           style={{color: '#8B7355'}} />
                    <input
                      name="contacto_celular"
                      type="tel"
                      value={form.contacto_celular}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                      style={{
                        backgroundColor: '#FAF7F2',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A',
                        focusRingColor: '#C8B7A6'
                      }}
                      placeholder="(+591) 12345678"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Datos del Tutor */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden"
               style={{borderColor: '#E8DDD4'}}>
            <div className="p-4 border-b" 
                 style={{background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)'}}>
              <h2 className="text-lg font-bold flex items-center space-x-2" style={{color: '#5A4A3A'}}>
                <User className="w-5 h-5" style={{color: '#8B7355'}} />
                <span>Datos del Tutor</span>
              </h2>
              <p className="text-sm mt-1" style={{color: '#8B7355'}}>Responsable del estudiante</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                  Nombre del Tutor
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                        style={{color: '#8B7355'}} />
                  <input
                    name="nombre_tutor"
                    type="text"
                    value={form.nombre_tutor}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                    style={{
                      backgroundColor: '#FAF7F2',
                      borderColor: '#E8DDD4',
                      color: '#5A4A3A',
                      focusRingColor: '#C8B7A6'
                    }}
                    placeholder="Nombre completo del tutor"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border p-6"
               style={{borderColor: '#E8DDD4'}}>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-base"
              style={{
                background: 'linear-gradient(135deg, #C8B7A6, #B8A494)',
                focusRingColor: '#C8B7A6'
              }}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generando orden de pago...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5" />
                  <span>Generar Orden de Pago</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrdenDePago;