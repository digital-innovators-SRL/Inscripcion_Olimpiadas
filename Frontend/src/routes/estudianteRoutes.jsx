import DashboardPageEstudiante from '../pages/Estudiante/DashboardPageEstudiante';

export default [
  { path: '/dashboard', element: <DashboardPageEstudiante />, allowedRoles: ['estudiante'] },
]
