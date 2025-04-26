import DashboardPage from '../pages/Organizador/DashboardPage'
import ReportsPage from '../pages/Organizador/ReportsPage'
import ProfilePage from '../pages/ProfilePage'

export default [
  { path: '/dashboard', element: <DashboardPage />, allowedRoles: ['Organizador'] },
  { path: '/reports', element: <ReportsPage />, allowedRoles: ['Organizador'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Organizador'] },
]
