import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import { ArrowLeftIcon, CheckCircle2, XCircle } from "lucide-react";

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
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 p-8 w-full max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm mb-4 text-[#4F4F4F] hover:underline"
        >
          <ArrowLeftIcon className="mr-2" size={18} /> Volver
        </button>

        <h1 className="text-2xl font-bold mb-2">Generar Orden de Pago</h1>

        {competencia && (
          <div className="bg-white border border-[#D9D9D9] rounded-md p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-1">{competencia.nombre}</h2>
            <p className="text-sm text-gray-700">
              <strong>Área:</strong> {competencia.area_categoria.area.nombre} &nbsp;|&nbsp;
              <strong>Categoría:</strong> {competencia.area_categoria.categoria.nombre}
            </p>
          </div>
        )}

        {notificacion.mensaje && (
          <div className={`flex items-center mb-4 p-3 rounded-md text-white shadow-sm
            ${notificacion.tipo === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {notificacion.tipo === "success" ? (
              <CheckCircle2 size={20} className="mr-2" />
            ) : (
              <XCircle size={20} className="mr-2" />
            )}
            {notificacion.mensaje}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-sm border border-[#D9D9D9]"
        >
          <h2 className="text-lg font-semibold mb-4">Datos del Estudiante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "nombres", "apellidos", "ci", "fecha_nacimiento", "email",
              "colegio", "curso", "departamento", "provincia"
            ].map((field, idx) => (
              <input
                key={idx}
                name={field}
                type={field === "fecha_nacimiento" ? "date" : "text"}
                onChange={(e) => handleChange(e, "estudiante", true)}
                placeholder={field.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                className="p-2 border border-[#D9D9D9] rounded-md"
              />
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Datos de Contacto</h2>
          <input
            name="contacto_email"
            onChange={handleChange}
            placeholder="Email de contacto"
            className="p-2 border border-[#D9D9D9] rounded-md w-full mb-3"
          />
          <input
            name="contacto_celular"
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
