import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../src/contexts/AuthContext'

import LoginPage from '../src/pages/auth/LoginPage'
import RegisterPage from '../src/pages/auth/RegisterPage'
import UnauthorizedPage from '../src/pages/auth/UnauthorizedPage'
import LandingPage from '../src/pages/LandingPage' // ✅ NUEVO

import ProtectedRoute from './components/ProtectedRoute'

import adminRoutes from '../src/routes/adminRoutes'
import tutorRoutes from '../src/routes/tutorRoutes'
import organizadorRoutes from '../src/routes/organizadorRoutes'
import estudianteRoutes from './routes/estudianteRoutes'

import { Toaster } from 'react-hot-toast' // 🟢 Importamos el Toaster

const App = () => {
  const { user, isLoading } = useAuth()

  const getRoutesByRole = () => {
    switch (user?.role) {
      case 'Administrador':
        return adminRoutes
      case 'Tutor':
        return tutorRoutes
      case 'Organizador':
        return organizadorRoutes
      case 'estudiante':
        return estudianteRoutes
      default:
        return []
    }
  }

  const roleRoutes = getRoutesByRole()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2EEE3]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#A9B2AC]"></div>
      </div>
    )
  }

  return (
    <Router>
      {/* Toaster global para notificaciones */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} /> {/* ✅ NUEVA RUTA INICIAL */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Rutas protegidas según rol */}
        {user && roleRoutes.map(({ path, element, allowedRoles }, i) => (
          <Route
            key={i}
            path={path}
            element={<ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>}
          />
        ))}

        {/* Redirección por defecto (cambia login por landing) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
