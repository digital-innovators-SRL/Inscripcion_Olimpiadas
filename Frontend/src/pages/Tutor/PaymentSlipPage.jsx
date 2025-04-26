import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { FileTextIcon, DownloadIcon } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const PaymentSlipPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Boleta de Pago</h1>
          <div className="flex items-center">
            <span className="mr-4">{user?.role || "Usuario"}</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
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
                <p className="font-medium">Juan Pérez</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cédula de Identidad:</p>
                <p className="font-medium">12345678</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Áreas inscritas:</p>
                <p className="font-medium">Matemáticas - Nivel Avanzado</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monto total a pagar:</p>
                <p className="font-medium text-lg">Bs. 350.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Código de orden de pago:
                </p>
                <p className="font-medium text-lg">ORD-2023-0587</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Fecha límite de pago:</p>
                <p className="font-medium">30/11/2023</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate("/registration")}
              className="border border-[#D9D9D9] text-[#4F4F4F] py-2 px-6 rounded-md hover:bg-[#F2EEE3] transition-colors"
            >
              Volver
            </button>
            <div className="space-x-4">
              <button
                onClick={() => navigate("/upload-proof")}
                className="bg-[#A9B2AC] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subir Comprobante
              </button>
              <button className="bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
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

export default PaymentSlipPage;
