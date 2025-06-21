import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { 
  User, 
  Users, 
  ShieldCheck, 
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  BookOpen,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, loginError } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showError, setShowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showUserTypes, setShowUserTypes] = useState(false)

  const [isStudent, setIsStudent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowError(false)
    setIsLoading(true)

    // Simular login - credenciales válidas ahora son email vacío o cualquier contraseña
    setTimeout(() => {
      if (formData.email.trim() !== '' && formData.password.trim() !== '') {
        //alert('Login exitoso!')
            setIsLoading(false)
      } else {
        setShowError(true)
      }
      
    }, 1500)

    // Aquí iría la lógica real de autenticación
     try {
      if (isStudent) {
        await login(formData.email, formData.password, true)
      } else {
        await login(formData.email, formData.password)
      }
      navigate('/dashboard')
    } catch (err) {
      setShowError(true)
    }
  }

  // Manejar el evento de tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

const userTypes = [
    {
      icon: User,
      title: 'Administrador',
      description: 'Gestión completa del sistema',
      color: '#8B5A3C',
      bgColor: '#FAF7F2',
      borderColor: '#E8DDD4'
    },
    {
      icon: Users,
      title: 'Tutor',
      description: 'Supervisión de estudiantes',
      color: '#6B4423',
      bgColor: '#FAF7F2',
      borderColor: '#DDD0C4'
    },
    {
      icon: ShieldCheck,
      title: 'Organizador',
      description: 'Revisión y reportes',
      color: '#5A4A3A',
      bgColor: '#FAF7F2',
      borderColor: '#D4C4B4'
    }
  ]


  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
      {/* Floating Users Panel */}
  


      {/* Main Content */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          {/* Left Column - Logo */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-4 sm:mb-6 border" style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
              <BookOpen className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{background: 'linear-gradient(135deg, #5A4A3A, #8B7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Oh Sansi!
            </h1>
            <p className="text-sm sm:text-base md:text-lg" style={{color: '#8B7355'}}>
              Sistema Integral de Gestión Académica
            </p>
          </div>


          {/* Right Column - Login Form */}
          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border overflow-hidden w-full max-w-md"
              style={{borderColor: '#E8DDD4'}}
            >
              {/* Header */}
              <div className="p-6 sm:p-8 pb-4 sm:pb-6 text-center border-b" style={{
                background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)',
                borderColor: 'rgba(91, 74, 58, 0.3)'
              }}>
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{color: '#5A4A3A'}}>
                  Sistema de inscripciones
                </h2>
                <p className="text-xs sm:text-sm font-medium" style={{color: '#5A4A3A'}}>
                  Ingresa tus credenciales para continuar
                </p>
              </div>


              {/* Form */}
              <div className="p-4 sm:p-6 md:p-8 pt-4 sm:pt-6">
                {showError && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl flex items-center text-red-700 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Por favor ingresa tanto el email como la contraseña</span>
                  </div>
                )}


                <div className="space-y-4 sm:space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base"
                        style={{
                          backgroundColor: '#FAF7F2',
                          borderColor: '#E8DDD4',
                          color: '#5A4A3A',
                          focusRingColor: '#C8B7A6'
                        }}
                        placeholder="tu-email@ejemplo.com"
                        required
                      />
                    </div>
                  </div>


                  {/* Password Field */}
                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="password" className="block text-xs sm:text-sm font-semibold" style={{color: '#5A4A3A'}}>
                      Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" style={{color: '#8B7355'}} />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm sm:text-base"
                        style={{
                          backgroundColor: '#FAF7F2',
                          borderColor: '#E8DDD4',
                          color: '#5A4A3A',
                          focusRingColor: '#C8B7A6'
                        }}
                        placeholder="••••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-all duration-200"
                        style={{color: '#8B7355'}}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-4">
                    <label htmlFor="estudiante" className="text-sm font-medium" style={{color: '#5A4A3A'}}>
                      ¿Eres estudiante?
                    </label>
                    <input type="checkbox" name="estudiante" id="estudiante" onChange={() => setIsStudent(!isStudent)} className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/40 border-t-white rounded-full" />
                  </div>


                  {/* Forgot Password */}
                  <div className="text-right">
                    <button type="button" className="text-xs sm:text-sm hover:underline transition-all duration-200 font-medium" style={{color: '#8B7355'}}>
                      ¿Recuperar contraseña?
                    </button>
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                    style={{
                      background: 'linear-gradient(135deg, #C8B7A6, #B8A494)',
                      focusRingColor: '#C8B7A6'
                    }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                        <span>Verificando credenciales...</span>
                      </div>
                    ) : (
                      'Iniciar Sesión'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-2 sm:p-4">
        <p className="text-xs" style={{color: '#8B7355'}}>
          © 2025 Oh Sansi! Plataforma educativa de nueva generación.
        </p>
      </div>


      {/* Overlay for mobile when dropdown is open */}
      {showUserTypes && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setShowUserTypes(false)}
        />
      )}
    </div>
  )
}


export default LoginPage
