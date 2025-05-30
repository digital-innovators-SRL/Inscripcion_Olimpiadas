import DashboardPageTutor from '../pages/Tutor/DashboardPageTutor';
import RegistrationPage from '../pages/Tutor/RegistrationPage';
import PaymentSlipPage from '../pages/Tutor/PaymentSlipPage';
import UploadProofPage from '../pages/Tutor/UploadProofPage'
import ProfilePage from '../pages/ProfilePage';

export default [
  { path: '/dashboard', element: <DashboardPageTutor />, allowedRoles: ['Tutor'] },
  { path: '/registration', element: <RegistrationPage />, allowedRoles: ['Tutor'] },
  { path: '/payment-slip', element: <PaymentSlipPage/>, allowedRoles: ['Tutor'] },
  { path: '/registration2', element: <UploadProofPage />, allowedRoles: ['Tutor'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Tutor'] },
]
