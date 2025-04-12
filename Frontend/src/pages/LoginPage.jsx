import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  UserIcon,
  UsersIcon,
  GraduationCapIcon,
  AlertCircleIcon,
} from 'lucide-react'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, loginError } = useAuth()
  const [selectedRole, setSelectedRole] = useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showError, setShowError] = useState(false)

  const roleOptions = [
    {
      role: 'admin',
      label: 'Administrador',
      icon: <UserIcon className="w-6 h-6" />,
      description: 'Acceso total al sistema',
      credentials: {
        email: 'admin@example.com',
        password: 'admin123',
      },
    },
    {
      role: 'tutor',
      label: 'Tutor',
      icon: <UsersIcon className="w-6 h-6" />,
      description: 'Gestión de estudiantes y pagos',
      credentials: {
        email: 'tutor@example.com',
        password: 'tutor123',
      },
    },
    {
      role: 'student',
      label: 'Estudiante',
      icon: <GraduationCapIcon className="w-6 h-6" />,
      description: 'Acceso a inscripciones y pagos',
      credentials: {
        email: 'student@example.com',
        password: 'student123',
      },
    },
  ]

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    const roleOption = roleOptions.find((opt) => opt.role === role)
    if (roleOption) {
      setFormData(roleOption.credentials)
    }
    setShowError(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!selectedRole) {
      setShowError(true)
      return
    }
    try {
      await login(formData.email, formData.password, selectedRole)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error de inicio de sesión:', error)
    }
  }

  return (
    <div className="min-h-screen flex bg-[#F2EEE3]">
      <div className="hidden lg:flex lg:w-1/3 xl:w-1/4 bg-white flex-col">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#4F4F4F] mb-6">
            Selecciona tu rol
          </h2>
          <div className="space-y-4">
            {roleOptions.map((option) => (
              <button
                key={option.role}
                onClick={() => handleRoleSelect(option.role)}
                className={`w-full p-4 rounded-lg border transition-all ${
                  selectedRole === option.role
                    ? 'border-[#C8B7A6] bg-[#F2EEE3]'
                    : 'border-[#D9D9D9] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-full mr-4 ${
                      selectedRole === option.role
                        ? 'bg-[#C8B7A6] text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {option.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[#4F4F4F]">
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#4F4F4F]">
              Sistema de Inscripciones
            </h1>
            <div className="mt-4 bg-[#A9B2AC] h-16 w-16 mx-auto rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">LOGO</span>
            </div>
          </div>
          <div className="lg:hidden mb-6">
            <label className="block text-sm font-medium mb-2">
              Selecciona tu rol
            </label>
            <select
              value={selectedRole || ''}
              onChange={(e) => handleRoleSelect(e.target.value)}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
            >
              <option value="">Seleccionar rol</option>
              {roleOptions.map((option) => (
                <option key={option.role} value={option.role}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {showError && !selectedRole && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
              <AlertCircleIcon className="w-5 h-5 mr-2" />
              Por favor, selecciona un rol
            </div>
          )}

          {loginError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
              <AlertCircleIcon className="w-5 h-5 mr-2" />
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="mb-6 text-right">
              <a href="#" className="text-sm text-[#4F4F4F] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Iniciar Sesión
            </button>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="w-full border border-[#A9B2AC] text-[#4F4F4F] py-2 px-4 rounded-md hover:bg-[#F2EEE3] transition-colors"
              >
                Registrarse
              </button>
            </div>
          </form>

          {selectedRole && (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-600">
                <strong>Credenciales de prueba:</strong>
                <br />
                Email:{' '}
                {roleOptions.find((opt) => opt.role === selectedRole)?.credentials
                  .email}
                <br />
                Password:{' '}
                {roleOptions.find((opt) => opt.role === selectedRole)?.credentials
                  .password}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
