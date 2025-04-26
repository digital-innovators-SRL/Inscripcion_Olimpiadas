import DashboardPageAdmin from '../pages/Admin/DashboardPageAdmin'
import ConfigurationPage from '../pages/Admin/ConfigurationPage'
import UserManagementPage from '../pages/Admin/UserManagementPage'
import ProfilePage from '../pages/ProfilePage'

export default [
  { path: '/dashboard', element: <DashboardPageAdmin />, allowedRoles: ['Administrador'] },
  { path: '/configuration', element: <ConfigurationPage />, allowedRoles: ['Administrador'] },
  { path: '/users', element: <UserManagementPage />, allowedRoles: ['Administrador'] },
  { path: '/profile', element: <ProfilePage />, allowedRoles: ['Administrador'] },
]

