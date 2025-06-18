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
  const [sidebarOpen, setSidebarOpen] = useState(true);


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
    contacto_email: user?.email || "",
    contacto_celular: user?.celular || "",
    nombre_tutor: user?.name || "",
  });


  const [competencia, setCompetencia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notificacion, setNotificacion] = useState({ tipo: "", mensaje: "" });


  useEffect(() => {
    const fetchCompetencia = async () => {
      try {
        const res = await axios.get(`http://dis.tis.cs.umss.edu.bo/api/tutor/competencias`, {
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
      const res = await axios.post("http://dis.tis.cs.umss.edu.bo/api/tutor/ordenPago", {
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
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
     
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-6 lg:p-8`}>
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
          <div className="bg-white border border-[#D9D9D9] rounded-md p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-1">{competencia.nombre}</h2>
            <p className="text-sm text-gray-700">
              <strong>Área:</strong> {competencia.area_categoria.area.nombre} &nbsp;|&nbsp;
              <strong>Categoría:</strong> {competencia.area_categoria.categoria.nombre} &nbsp;|&nbsp;
              <strong>Grado:</strong> {competencia.area_categoria.grado}
            </p>
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

          <div className="mt-4 mb-4">
            <button
              type="button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "http://dis.tis.cs.umss.edu.bo/assets/planilla.xlsx"; // Asegúrate de que exista
                link.setAttribute("download", "planilla_ejemplo.xlsx");
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
              className="flex items-center bg-[#8B7355] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar planilla de ejemplo
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden mb-8"
              style={{ borderColor: '#E8DDD4' }}>
            <div className="p-4 border-b"
                style={{ background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)' }}>
              <h2 className="text-lg font-bold flex items-center space-x-2" style={{ color: '#5A4A3A' }}>
                <FileText className="w-5 h-5" style={{ color: '#8B7355' }} />
                <span>Importar estudiantes desde Excel</span>
              </h2>
              <p className="text-sm mt-1" style={{ color: '#8B7355' }}>
                Cargue un archivo Excel (.xlsx, .xls, .csv) con varios estudiantes.
              </p>
            </div>

            <div className="p-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#5A4A3A' }}>
                Seleccionar archivo
              </label>

              <div className="flex items-center space-x-4">
                <label
                  htmlFor="archivoExcel"
                  className="cursor-pointer bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow"
                >
                  Elegir archivo
                </label>
                <span className="text-sm text-gray-700" id="archivoSeleccionado">Ningún archivo seleccionado</span>
              </div>

              <input
                id="archivoExcel"
                type="file"
                accept=".xlsx,.xls,.csv"
                style={{ display: 'none' }}
                onChange={async (e) => {
                            const label = document.getElementById("archivoSeleccionado");
                            if (!e.target.files[0]) {
                              label.textContent = "Ningún archivo seleccionado";
                              return;
                            }

                            const file = e.target.files[0];
                            label.textContent = file.name;

                            const formData = new FormData();
                            formData.append("archivo", file);
                            formData.append("competencia_id", id);

                            try {
                              setLoading(true);

                              // 1. Enviar archivo Excel
                              const res = await axios.post(
                                "http://dis.tis.cs.umss.edu.bo/api/tutor/importar-inscripciones",
                                formData,
                                {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                    "Content-Type": "multipart/form-data",
                                  },
                                }
                              );

                              // 2. Mostrar notificación
                              setNotificacion({ tipo: "success", mensaje: res.data.message });

                              // 3. Descargar automáticamente el ZIP
                              const zipRes = await axios.get(
                                `http://dis.tis.cs.umss.edu.bo/api/tutor/ordenes-masivas/${id}`,
                                {
                                  headers: { Authorization: `Bearer ${token}` },
                                  responseType: "blob",
                                }
                              );

                              const blob = new Blob([zipRes.data], { type: "application/zip" });
                              const url = window.URL.createObjectURL(blob);
                              const link = document.createElement("a");
                              link.href = url;
                              link.setAttribute("download", `ordenes_pago_${id}.zip`);
                              document.body.appendChild(link);
                              link.click();
                              link.remove();

                            } catch (err) {
                              console.error(err);
                              setNotificacion({
                                tipo: "error",
                                mensaje: err.response?.data?.error || "Error al importar archivo o generar ZIP",
                              });
                            } finally {
                              setLoading(false);
                            }
                          }}
              />
            </div>
          </div>
          
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

          <h2 className="text-lg font-semibold mt-6 mb-4">Datos de Contacto</h2>
          <input
            name="contacto_email"
            value={form.contacto_email}
            onChange={handleChange}
            placeholder="Email de contacto"
            className="p-2 border border-[#D9D9D9] rounded-md w-full mb-3"
          />
          <input
            name="contacto_celular"
            value={form.contacto_celular}
            onChange={handleChange}
            placeholder="Celular de contacto"
            className="p-2 border border-[#D9D9D9] rounded-md w-full mb-3"
          />

          <h2 className="text-lg font-semibold mt-6 mb-4">Nombre del Tutor</h2>
          <input
            name="nombre_tutor"
            value={form.nombre_tutor}
            onChange={handleChange}
            placeholder="Nombre del tutor"
            className="p-2 border border-[#D9D9D9] rounded-md w-full mb-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#C8B7A6] text-white px-6 py-2 rounded-md hover:bg-opacity-90"
          >
            {loading ? "Generando PDF..." : "Obtener orden de pago"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default OrdenDePago;