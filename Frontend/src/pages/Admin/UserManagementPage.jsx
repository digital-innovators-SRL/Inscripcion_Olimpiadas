import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { PlusIcon, PencilIcon, TrashIcon, UserIcon } from 'lucide-react';

const UserManagementPage = () => {
  // Estados para el sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Estados existentes para la gestión de usuarios
  const [users] = useState([
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
      status: 'active',
    },
    {
      id: '2',
      name: 'Juan Pérez',
      email: 'juan@example.com',
      role: 'tutor',
      status: 'active',
    },
    {
      id: '3',
      name: 'María García',
      email: 'maria@example.com',
      role: 'student',
      status: 'active',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
  <div className="flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]">
    {/* Sidebar condicional - usando tu componente exacto */}
    {!isLoginPage && (
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
    )}
    
    {/* Contenido principal con margen dinámico */}
    <div 
      className={`flex-grow p-8 transition-all duration-300 ${
        !isLoginPage ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02]">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent">
            Gestión de Usuarios
          </h1>
          <p className="text-[#8B7355] mt-1 text-sm font-medium">
            Administra usuarios del sistema
          </p>
        </div>
        
        <button
          onClick={() => {
            setSelectedUser(null);
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-[#5A4A3A] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 border border-[#E8DDD4] flex items-center gap-3"
        >
          <PlusIcon size={20} />
          Nuevo Usuario
        </button>
      </div>

      {/* Tabla de usuarios */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-[#E8DDD4] p-8 transition-all duration-300">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] border-b-2 border-[#E8DDD4] rounded-xl">
                <th className="text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider">Usuario</th>
                <th className="text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider">Email</th>
                <th className="text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider">Rol</th>
                <th className="text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider">Estado</th>
                <th className="text-left py-4 px-6 text-[#5A4A3A] font-bold text-sm uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-[#E8DDD4] hover:bg-[#FAF7F2]/50 transition-all duration-300">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-full flex items-center justify-center mr-4 shadow-md">
                        <UserIcon size={18} className="text-[#5A4A3A]" />
                      </div>
                      <span className="text-[#5A4A3A] font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#8B7355]">{user.email}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                        user.role === 'admin'
                          ? 'bg-gradient-to-r from-[#E8DDD4] to-[#C8B7A6] text-[#5A4A3A] border-[#B8A494]'
                          : user.role === 'tutor'
                          ? 'bg-gradient-to-r from-[#F2EEE3] to-[#E8DDD4] text-[#8B7355] border-[#C8B7A6]'
                          : 'bg-gradient-to-r from-[#FAF7F2] to-[#F2EEE3] text-[#5A4A3A] border-[#E8DDD4]'
                      }`}
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                        user.status === 'active'
                          ? 'bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-[#5A4A3A] border-[#8B7355]'
                          : 'bg-gradient-to-r from-[#E8DDD4] to-[#F2EEE3] text-[#8B7355] border-[#C8B7A6]'
                      }`}
                    >
                      {user.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-[#8B7355] hover:text-[#5A4A3A] hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-[#FAF7F2]"
                      >
                        <PencilIcon size={18} />
                      </button>
                      <button className="text-[#B8A494] hover:text-[#8B7355] hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-[#F2EEE3]">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para editar/crear usuario */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full p-8 border border-[#E8DDD4] transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent">
              {selectedUser ? 'Editar Usuario' : 'Nuevo Usuario'}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#5A4A3A]">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]"
                  defaultValue={selectedUser?.name}
                  placeholder="Ingresa el nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#5A4A3A]">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A] placeholder-[#8B7355]"
                  defaultValue={selectedUser?.email}
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#5A4A3A]">Rol</label>
                <select
                  className="w-full px-4 py-3 border border-[#E8DDD4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8B7A6] focus:border-[#B8A494] transition-all duration-300 bg-white/80 backdrop-blur-sm text-[#5A4A3A]"
                  defaultValue={selectedUser?.role}
                >
                  <option value="admin" className="text-[#5A4A3A] bg-[#FAF7F2]">Administrador</option>
                  <option value="tutor" className="text-[#5A4A3A] bg-[#FAF7F2]">Tutor</option>
                  <option value="student" className="text-[#5A4A3A] bg-[#FAF7F2]">Estudiante</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-[#E8DDD4] rounded-xl text-[#8B7355] font-semibold hover:bg-[#FAF7F2] transition-all duration-300 hover:scale-[1.02]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-[#5A4A3A] rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  {selectedUser ? 'Guardar Cambios' : 'Crear Usuario'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default UserManagementPage;