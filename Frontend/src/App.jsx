import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegistrationPage from './pages/RegistrationPage';
import PaymentSlipPage from './pages/PaymentSlipPage';
import UploadProofPage from './pages/UploadProofPage';
import ReportsPage from './pages/ReportsPage';
import ConfigurationPage from './pages/ConfigurationPage';
import UserManagementPage from './pages/UserManagementPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (<AuthProvider>
      <Router>
        <div className="font-['Roboto', 'Open Sans', sans-serif] text-[#4F4F4F] bg-[#F2EEE3] min-h-screen">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/dashboard" element={<ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>} />
            <Route path="/registration" element={<ProtectedRoute allowedRoles={['admin', 'tutor']}>
                  <RegistrationPage />
                </ProtectedRoute>} />
            <Route path="/payment-slip" element={<ProtectedRoute>
                  <PaymentSlipPage />
                </ProtectedRoute>} />
            <Route path="/upload-proof" element={<ProtectedRoute>
                  <UploadProofPage />
                </ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute allowedRoles={['admin']}>
                  <ReportsPage />
                </ProtectedRoute>} />
            <Route path="/configuration" element={<ProtectedRoute allowedRoles={['admin']}>
                  <ConfigurationPage />
                </ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}>
                  <UserManagementPage />
                </ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>)

}

export default App;