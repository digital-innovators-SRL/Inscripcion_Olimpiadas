import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { PlusIcon, PencilIcon, TrashIcon, UserIcon } from 'lucide-react'

const UserManagementPage = () => {
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
  ])

  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleEditUser = (user) => {
    setSelectedUser(user)
    setShowModal(true)
  }

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
          <button
            onClick={() => {
              setSelectedUser(null)
              setShowModal(true)
            }}
            className="bg-[#C8B7A6] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
          >
            <PlusIcon size={18} className="mr-2" />
            Nuevo Usuario
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-[#D9D9D9]">
                  <th className="text-left py-3 px-4">Usuario</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Rol</th>
                  <th className="text-left py-3 px-4">Estado</th>
                  <th className="text-left py-3 px-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-[#D9D9D9]">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#A9B2AC] rounded-full flex items-center justify-center mr-3">
                          <UserIcon size={16} className="text-white" />
                        </div>
                        {user.name}
                      </div>
                    </td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'admin'
                            ? 'bg-purple-100 text-purple-800'
                            : user.role === 'tutor'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {user.status === 'active' ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <PencilIcon size={18} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
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
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedUser ? 'Editar Usuario' : 'Nuevo Usuario'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                  defaultValue={selectedUser?.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                  defaultValue={selectedUser?.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rol</label>
                <select
                  className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                  defaultValue={selectedUser?.role}
                >
                  <option value="admin">Administrador</option>
                  <option value="tutor">Tutor</option>
                  <option value="student">Estudiante</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-[#D9D9D9] rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C8B7A6] text-white rounded-md hover:bg-opacity-90"
                >
                  {selectedUser ? 'Guardar Cambios' : 'Crear Usuario'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserManagementPage;
