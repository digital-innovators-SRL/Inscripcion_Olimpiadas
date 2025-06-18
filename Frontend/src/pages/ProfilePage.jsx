import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../contexts/AuthContext'
import {
  SaveIcon,
  KeyIcon,
  Camera,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Eye,
  EyeOff,
  CheckCircle,
  Settings,
  Bell,
  Lock
} from 'lucide-react'


const ProfilePage = () => {
  const { user } = useAuth()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
 
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    bio: ''
  })


  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }


  const handleSave = async (e) => {
    e.preventDefault()
    setIsSaving(true)
   
    // Simular guardado
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      // Aquí iría la lógica para guardar el perfil
    }, 1500)
  }


  const handlePasswordChange = async (e) => {
    e.preventDefault()
    // Aquí iría la lógica para cambiar contraseña
    setShowPasswordModal(false)
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }


 return (
  <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
    <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
    <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-6 sm:p-8`}>
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border p-6 sm:p-8" style={{borderColor: '#E8DDD4'}}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{
                background: 'linear-gradient(135deg, #5A4A3A, #8B7355)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Mi Perfil
              </h1>
              <p className="text-sm sm:text-base" style={{color: '#8B7355'}}>
                Gestiona tu información personal y configuración
              </p>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-sm sm:text-base" style={{color: '#5A4A3A'}}>
                    {user?.name}
                  </p>
                  <p className="text-xs sm:text-sm" style={{color: '#8B7355'}}>
                    {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                  </p>
                </div>
                <div className="relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg border-2 cursor-pointer transition-all duration-300 group-hover:shadow-xl"
                       style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                    <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                       style={{borderColor: '#E8DDD4'}}>
                    <Camera className="w-3 h-3" style={{color: '#8B7355'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Profile Form */}
        <div className="xl:col-span-2">
          <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border" style={{borderColor: '#E8DDD4'}}>
            {/* Form Header */}
            <div className="p-6 sm:p-8 pb-4 sm:pb-6 border-b" style={{
              background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
              borderColor: 'rgba(91, 74, 58, 0.3)'
            }}>
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                       style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold" style={{color: '#5A4A3A'}}>
                      Información Personal
                    </h2>
                    <p className="text-xs sm:text-sm" style={{color: '#8B7355'}}>
                      Actualiza tus datos personales
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium hover:shadow-md w-full sm:w-auto"
                  style={{
                    backgroundColor: isEditing ? '#FAF7F2' : 'white',
                    borderColor: '#E8DDD4',
                    color: '#5A4A3A'
                  }}
                >
                  {isEditing ? 'Cancelar' : 'Editar'}
                </button>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSave} className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60"
                      style={{
                        backgroundColor: isEditing ? '#FAF7F2' : '#F8F8F8',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A'
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60"
                      style={{
                        backgroundColor: isEditing ? '#FAF7F2' : '#F8F8F8',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A'
                      }}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60"
                      style={{
                        backgroundColor: isEditing ? '#FAF7F2' : '#F8F8F8',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A'
                      }}
                      placeholder="+591 xxx xxxx"
                    />
                  </div>
                </div>

                {/* Dirección */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                    Dirección
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                    <input
                      type="text"
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60"
                      style={{
                        backgroundColor: isEditing ? '#FAF7F2' : '#F8F8F8',
                        borderColor: '#E8DDD4',
                        color: '#5A4A3A'
                      }}
                      placeholder="Cochabamba, Bolivia"
                    />
                  </div>
                </div>
              </div>

              {/* Biografía */}
              <div className="mt-6 space-y-2 sm:space-y-3">
                <label className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                  Biografía (Opcional)
                </label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  disabled={!isEditing}
                  rows="4"
                  className="w-full p-3 sm:p-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base disabled:opacity-60 resize-none"
                  style={{
                    backgroundColor: isEditing ? '#FAF7F2' : '#F8F8F8',
                    borderColor: '#E8DDD4',
                    color: '#5A4A3A'
                  }}
                  placeholder="Cuéntanos un poco sobre ti..."
                />
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setShowPasswordModal(true)}
                    className="flex items-center justify-center px-6 py-3 border rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 text-sm font-medium"
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#E8DDD4',
                      color: '#5A4A3A'
                    }}
                  >
                    <KeyIcon size={18} className="mr-2" />
                    Cambiar Contraseña
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex items-center justify-center px-6 py-3 text-white rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'
                    }}
                  >
                    {isSaving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2"></div>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <SaveIcon size={18} className="mr-2" />
                        Guardar Cambios
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Account Summary */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border" style={{borderColor: '#E8DDD4'}}>
            <div className="p-6 border-b" style={{
              background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
              borderColor: 'rgba(91, 74, 58, 0.3)'
            }}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold" style={{color: '#5A4A3A'}}>
                  Resumen de Cuenta
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: '#FAF7F2'}}>
                <div>
                  <p className="text-xs font-medium" style={{color: '#8B7355'}}>Tipo de Usuario</p>
                  <p className="font-semibold text-sm" style={{color: '#5A4A3A'}}>
                    {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                  </p>
                </div>
                <User className="w-5 h-5" style={{color: '#C8B7A6'}} />
              </div>
             
              <div className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: '#FAF7F2'}}>
                <div>
                  <p className="text-xs font-medium" style={{color: '#8B7355'}}>Fecha de Registro</p>
                  <p className="font-semibold text-sm" style={{color: '#5A4A3A'}}>15/11/2023</p>
                </div>
                <Calendar className="w-5 h-5" style={{color: '#C8B7A6'}} />
              </div>
             
              <div className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: '#FAF7F2'}}>
                <div>
                  <p className="text-xs font-medium" style={{color: '#8B7355'}}>Estado</p>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Activo
                    </span>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border" style={{borderColor: '#E8DDD4'}}>
            <div className="p-6 border-b" style={{
              background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
              borderColor: 'rgba(91, 74, 58, 0.3)'
            }}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                  <Bell className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold" style={{color: '#5A4A3A'}}>
                  Acciones Rápidas
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full p-3 text-left rounded-lg hover:shadow-md transition-all duration-300 border"
                      style={{backgroundColor: '#FAF7F2', borderColor: '#E8DDD4'}}>
                <div className="flex items-center space-x-3">
                  <Bell className="w-4 h-4" style={{color: '#C8B7A6'}} />
                  <div>
                    <p className="font-medium text-sm" style={{color: '#5A4A3A'}}>Notificaciones</p>
                    <p className="text-xs" style={{color: '#8B7355'}}>Gestionar preferencias</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Password Change Modal */}
    {showPasswordModal && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full border" style={{borderColor: '#E8DDD4'}}>
          {/* Modal Header */}
          <div className="p-6 border-b" style={{
            background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
            borderColor: 'rgba(91, 74, 58, 0.3)'
          }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}>
                <KeyIcon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold" style={{color: '#5A4A3A'}}>
                Cambiar Contraseña
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <form onSubmit={handlePasswordChange} className="p-6 space-y-4">
            {/* Current Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                Contraseña Actual
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{color: '#8B7355'}} />
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderColor: '#E8DDD4',
                    color: '#5A4A3A'
                  }}
                  placeholder="••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200"
                  style={{color: '#8B7355'}}
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                Nueva Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{color: '#8B7355'}} />
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderColor: '#E8DDD4',
                    color: '#5A4A3A'
                  }}
                  placeholder="••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200"
                  style={{color: '#8B7355'}}
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#5A4A3A'}}>
                Confirmar Nueva Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{color: '#8B7355'}} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderColor: '#E8DDD4',
                    color: '#5A4A3A'
                  }}
                  placeholder="••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200"
                  style={{color: '#8B7355'}}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
              <button
                type="button"
                onClick={() => {
                  setShowPasswordModal(false)
                  setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
                }}
                className="px-6 py-3 border rounded-lg font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#E8DDD4',
                  color: '#5A4A3A'
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'
                }}
              >
                Cambiar Contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
)
}


export default ProfilePage
