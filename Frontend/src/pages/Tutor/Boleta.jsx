import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { FileTextIcon, DownloadIcon } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const Boleta = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { token } = useAuth();
  const pago = state?.pago;

  if (!pago) return <div className="p-10">No hay datos</div>;

  const estudiante = pago.estudiante;
  const competencia = pago.competencia;
  const area = competencia.area_categoria.area.nombre;
  const categoria = competencia.area_categoria.categoria.nombre;
  const grado = competencia.area_categoria.grado;
  const fecha = new Date(pago.created_at).toLocaleDateString();
  const codigo = `ORD-${pago.id.toString().padStart(4, "0")}`;

  const handleDownloadPDF = async (id, codigo) => {
    try {
      const res = await axios.get(
        `http://dis.tis.cs.umss.edu.bo/api/tutor/boleta/${id}/pdf`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `boleta_de_pago_${codigo}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error al descargar PDF:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Boleta de Pago</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <FileTextIcon size={48} className="mx-auto mb-2 text-[#A9B2AC]" />
            <h2 className="text-xl font-semibold">Boleta de Pago Generada</h2>
          </div>

          <div className="border border-[#D9D9D9] rounded-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nombre del estudiante:</p>
                <p className="font-medium">
                  {estudiante.nombres} {estudiante.apellidos}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cédula de Identidad:</p>
                <p className="font-medium">{estudiante.ci}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Área inscrita:</p>
                <p className="font-medium">
                  {area} - {categoria} ({grado})
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monto total a pagar:</p>
                <p className="font-medium text-lg">Bs. {competencia.monto}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Código de orden de pago:
                </p>
                <p className="font-medium text-lg">{codigo}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Fecha límite de pago:</p>
                <p className="font-medium">{fecha}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate("/payment-slip")}
              className="border border-[#D9D9D9] text-[#4F4F4F] py-2 px-6 rounded-md hover:bg-[#F2EEE3] transition-colors"
            >
              Volver
            </button>
            <div className="space-x-4">
              <button
                onClick={() => handleDownloadPDF(pago.id, codigo)}
                className="bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
              >
                <DownloadIcon size={18} className="mr-2" />
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boleta;
