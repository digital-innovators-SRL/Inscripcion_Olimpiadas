import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  HomeIcon,
  ClipboardIcon,
  CreditCardIcon,
  BarChartIcon,
  UserIcon,
  SettingsIcon,
  UsersIcon,
  LogOutIcon,
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const baseItems = [
    {
      path: '/dashboard',
      icon: <HomeIcon size={20} />,
      label: 'Inicio',
    }
  ]

  const adminItems = [
    {
      path: '/configuration',
      icon: <SettingsIcon size={20} />,
      label: 'Configuración',
    },
    {
      path: '/users',
      icon: <UsersIcon size={20} />,
      label: 'Usuarios',
    },
  ]

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
  ]

  const organizadorItems = [
    {
      path: '/reports',
      icon: <BarChartIcon size={20} />,
      label: 'Reportes',
    }
  ]

  const profileItem = {
    path: '/profile',
    icon: <UserIcon size={20} />,
    label: 'Perfil',
  }

  let roleItems = []

  if (user?.role === 'Administrador') {
    roleItems = adminItems
  } else if (user?.role === 'Tutor') {
    roleItems = tutorItems
  } else if (user?.role === 'Organizador') {
    roleItems = organizadorItems
  }

  const menuItems = [...baseItems, ...roleItems, profileItem]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="w-64 h-full bg-white shadow-lg fixed left-0 top-0 p-4 flex flex-col justify-between">
      <div>
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

      {/* Botón de Cerrar sesión */}
      <button
        onClick={handleLogout}
        className="flex items-center mt-6 p-3 rounded-md text-red-600 hover:bg-red-100 transition-colors"
      >
        <LogOutIcon size={20} className="mr-2" />
        Salir
      </button>
    </div>
  )
}

export default Sidebar
