import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../contexts/AuthContext'
import { SaveIcon, KeyIcon } from 'lucide-react'

const ProfilePage = () => {
  const { user } = useAuth()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
  })

  const handleSave = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el perfil
  }

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
          <div className="flex items-center">
            <span className="mr-4">{user?.name}</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
              <h2 className="text-xl font-semibold mb-6">Información Personal</h2>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Teléfono</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Dirección</label>
                    <input
                      type="text"
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowPasswordModal(true)}
                    className="flex items-center px-4 py-2 border border-[#D9D9D9] rounded-md hover:bg-[#F2EEE3] transition-colors"
                  >
                    <KeyIcon size={18} className="mr-2" />
                    Cambiar Contraseña
                  </button>
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-[#C8B7A6] text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <SaveIcon size={18} className="mr-2" />
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
              <h2 className="text-xl font-semibold mb-6">Resumen</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Tipo de Usuario</p>
                  <p className="font-medium">
                    {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fecha de Registro</p>
                  <p className="font-medium">15/11/2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estado</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Activo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Cambiar Contraseña</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 border border-[#D9D9D9] rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C8B7A6] text-white rounded-md hover:bg-opacity-90"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage;
