import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ClipboardIcon,
  CreditCardIcon,
  BarChartIcon,
  UserIcon,
  SettingsIcon,
  UsersIcon,
  LogOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileUp,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const baseItems = [
    {
      path: "/dashboard",
      icon: <HomeIcon size={20} />,
      label: "Inicio",
    },
  ];

  const adminItems = [
    {
      path: "/configuration",
      icon: <SettingsIcon size={20} />,
      label: "Configuración",
    },
    {
      path: "/users",
      icon: <UsersIcon size={20} />,
      label: "Usuarios",
    },
  ];

  const tutorItems = [
    {
      path: "/registro",
      icon: <ClipboardIcon size={20} />,
      label: "Inscripción",
    },
    {
      path: "/registration2",
      icon: <FileUp size={20} />,
      label: "Comprobante",
    },
    {
      path: "/payment-slip",
      icon: <CreditCardIcon size={20} />,
      label: "Pagos",
    },
  ];

  const organizadorItems = [
    {
      path: "/reports",
      icon: <BarChartIcon size={20} />,
      label: "Reportes",
    },
  ];

  const profileItem = {
    path: "/profile",
    icon: <UserIcon size={20} />,
    label: "Perfil",
  };

  let roleItems = [];

  if (user?.role === "Administrador") {
    roleItems = adminItems;
  } else if (user?.role === "Tutor") {
    roleItems = tutorItems;
  } else if (user?.role === "Organizador") {
    roleItems = organizadorItems;
  }

  const menuItems = [...baseItems, ...roleItems, profileItem];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div 
      className={`h-full bg-white shadow-lg fixed left-0 top-0 p-4 flex flex-col justify-between transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-20"}`}
      style={{ borderRight: "1px solid #E8DDD4" }}
    >
      <div>
        <div className="flex justify-between items-center mb-8 mt-4">
          {isOpen && (
            <h2 className="text-2xl font-bold text-[#4F4F4F]">
              Sistema de Inscripciones
            </h2>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-md hover:bg-[#F2EEE3] transition-colors"
          >
            {isOpen ? (
              <ChevronLeftIcon size={20} className="text-[#4F4F4F]" />
            ) : (
              <ChevronRightIcon size={20} className="text-[#4F4F4F]" />
            )}
          </button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path} className="mb-2">
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-[#C8B7A6] text-white"
                      : "hover:bg-[#F2EEE3]"
                  } ${isOpen ? "justify-start" : "justify-center"}`}
                  title={!isOpen ? item.label : ""}
                >
                  <span className={isOpen ? "mr-3" : ""}>{item.icon}</span>
                  {isOpen && item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Botón de Cerrar sesión */}
      <button
        onClick={handleLogout}
        className={`flex items-center mt-6 p-3 rounded-md text-red-600 hover:bg-red-100 transition-colors ${
          isOpen ? "justify-start" : "justify-center"
        }`}
        title={!isOpen ? "Salir" : ""}
      >
        <LogOutIcon size={20} className={isOpen ? "mr-2" : ""} />
        {isOpen && "Salir"}
      </button>
    </div>
  );
};

export default Sidebar;