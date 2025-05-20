import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {
  PlusIcon,
  UsersIcon,
  ClipboardCheckIcon,
  AlertCircleIcon,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Inscripciones Totales",
      value: "254",
      icon: <UsersIcon size={24} className="text-[#A9B2AC]" />,
      color: "bg-blue-50",
    },
    {
      title: "Pagos Confirmados",
      value: "187",
      icon: <ClipboardCheckIcon size={24} className="text-green-600" />,
      color: "bg-green-50",
    },
    {
      title: "Pagos Pendientes",
      value: "67",
      icon: <AlertCircleIcon size={24} className="text-yellow-600" />,
      color: "bg-yellow-50",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4">{user?.role || "Usuario"}</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.color} p-6 rounded-lg shadow-sm border border-[#D9D9D9]`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {metric.title}
                  </h3>
                  <p className="text-3xl font-bold mt-1">{metric.value}</p>
                </div>
                {metric.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D9D9D9] mb-8">
          <h2 className="text-xl font-semibold mb-4">

            Inscripciones Recientes
            
          </h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D9D9D9]">
                <th className="text-left py-3">Estudiante</th>
                <th className="text-left py-3">Área</th>
                <th className="text-left py-3">Fecha</th>
                <th className="text-left py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b border-[#D9D9D9]">
                  <td className="py-3">Estudiante {item}</td>
                  <td className="py-3">Matemáticas</td>
                  <td className="py-3">{new Date().toLocaleDateString()}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item % 2 === 0
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item % 2 === 0 ? "Confirmado" : "Pendiente"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={() => navigate("/registration")}
          className="fixed bottom-8 right-8 bg-[#C8B7A6] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors"
        >
          <PlusIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
