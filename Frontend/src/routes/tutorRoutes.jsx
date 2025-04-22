import DashboardPage from '../pages/DashboardPage'
import RegistrationPage from '../pages/RegistrationPage'
import ProfilePage from '../pages/ProfilePage'

export default [
  { path: '/dashboard', element: <DashboardPage />, allowedRoles: ['Tutor'] },
  { path: '/registration', element: <RegistrationPage />, allowedRoles: ['Tutor'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Tutor'] },
]
