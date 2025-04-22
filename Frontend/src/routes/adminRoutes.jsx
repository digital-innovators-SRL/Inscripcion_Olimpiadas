import DashboardPage from '../pages/DashboardPage'
import ConfigurationPage from '../pages/ConfigurationPage'
import UserManagementPage from '../pages/UserManagementPage'
import ProfilePage from '../pages/ProfilePage'

export default [
  { path: '/dashboard', element: <DashboardPage />, allowedRoles: ['Administrador'] },
  { path: '/configuration', element: <ConfigurationPage />, allowedRoles: ['Administrador'] },
  { path: '/users', element: <UserManagementPage />, allowedRoles: ['Administrador'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Administrador'] },
]

