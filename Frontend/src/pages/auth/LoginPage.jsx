import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import {
  UserIcon,
  UsersIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
} from 'lucide-react'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, loginError } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowError(false)

    try {
      await login(formData.email, formData.password)
      navigate('/dashboard')
    } catch (err) {
      setShowError(true)
    }
  }

  return (
    <div className="min-h-screen flex bg-[#F2EEE3]">
      <div className="hidden lg:flex lg:w-1/3 xl:w-1/4 bg-white flex-col">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#4F4F4F] mb-6">
            Bienvenido de nuevo
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="p-2 bg-[#C8B7A6] text-white rounded-full mr-4">
                <UserIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#4F4F4F]">Administrador</p>
                <p className="text-sm text-gray-500">Gestión completa</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-[#C8B7A6] text-white rounded-full mr-4">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#4F4F4F]">Tutor</p>
                <p className="text-sm text-gray-500">Control de estudiantes</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-[#C8B7A6] text-white rounded-full mr-4">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#4F4F4F]">Organizador</p>
                <p className="text-sm text-gray-500">Revisión y reportes</p>
              </div>
            </div>
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

          {showError || loginError ? (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
              <AlertCircleIcon className="w-5 h-5 mr-2" />
              {loginError || 'Credenciales inválidas'}
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
