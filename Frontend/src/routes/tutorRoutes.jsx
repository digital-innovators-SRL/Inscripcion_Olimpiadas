import DashboardPageTutor from '../pages/Tutor/DashboardPageTutor';
import RegistrationPage from '../pages/Tutor/RegistrationPage';
import PaymentSlipPage from '../pages/Tutor/PaymentSlipPage';
import UploadProofPage from '../pages/Tutor/UploadProofPage'
import ProfilePage from '../pages/ProfilePage';
import Pago from '../pages/Tutor/Pago';
import Boleta from '../pages/Tutor/Boleta';
import CompetenciasTutor from '../pages/Tutor/CompetenciasTutor';
import OrdenDePago from '../pages/Tutor/OrdenDePago';

export default [
  { path: '/dashboard', element: <DashboardPageTutor />, allowedRoles: ['Tutor'] },
  { path: '/registro', element: <CompetenciasTutor />, allowedRoles: ['Tutor'] },
  { path: '/payment-slip', element: <Pago/>, allowedRoles: ['Tutor'] },
  { path: '/registration2', element: <UploadProofPage />, allowedRoles: ['Tutor'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Tutor'] },
  { path: '/boleta/:id', element: <Boleta />, allowedRoles: ['Tutor'] },
  { path: '/registration/:id', element: <OrdenDePago />, allowedRoles: ['Tutor'] }
]
