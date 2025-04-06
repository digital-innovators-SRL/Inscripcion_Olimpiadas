import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardIcon,
  CreditCardIcon,
  BarChartIcon,
  UserIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';
//import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const getMenuItems = () => {
    const baseItems = [
      {
        path: '/dashboard',
        icon: <HomeIcon size={20} />,
        label: 'Inicio',
      },
    ];

    const adminItems = [
      {
        path: '/registration',
        icon: <ClipboardIcon size={20} />,
        label: 'Inscripción',
      },
      {
        path: '/payment-slip',
        icon: <CreditCardIcon size={20} />,
        label: 'Pagos',
      },
      {
        path: '/reports',
        icon: <BarChartIcon size={20} />,
        label: 'Reportes',
      },
      {
        path: '/users',
        icon: <UsersIcon size={20} />,
        label: 'Usuarios',
      },
      {
        path: '/configuration',
        icon: <SettingsIcon size={20} />,
        label: 'Configuración',
      },
    ];

    const tutorItems = [
      {
        path: '/registration',
        icon: <ClipboardIcon size={20} />,
        label: 'Inscripción',
      },
      {
        path: '/payment-slip',
        icon: <CreditCardIcon size={20} />,
        label: 'Pagos',
      },
    ];

    const studentItems = [
      {
        path: '/payment-slip',
        icon: <CreditCardIcon size={20} />,
        label: 'Mis Pagos',
      },
    ];

    const profileItem = {
      path: '/profile',
      icon: <UserIcon size={20} />,
      label: 'Perfil',
    };

    let items = [...baseItems];

    switch (user && user.role) {
      case 'admin':
        items = [...items, ...adminItems];
        break;
      case 'tutor':
        items = [...items, ...tutorItems];
        break;
      case 'student':
        items = [...items, ...studentItems];
        break;
      default:
        break;
    }

    items.push(profileItem);
    return items;
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 h-full bg-white shadow-lg fixed left-0 top-0 p-4">
      <div className="flex justify-center mb-8 mt-4">
        <h2 className="text-2xl font-bold text-[#4F4F4F]">
          Sistema de Inscripciones
        </h2>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#C8B7A6] text-white'
                    : 'hover:bg-[#F2EEE3]'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
