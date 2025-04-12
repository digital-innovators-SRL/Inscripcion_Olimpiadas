import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {
  PlusIcon,
  SaveIcon,
  TrashIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  XIcon,
} from 'lucide-react'

const ConfigurationPage = () => {
  const [areas, setAreas] = useState([
    {
      id: '1',
      name: 'Matemáticas',
      cost: 350,
      levels: ['Básico', 'Intermedio', 'Avanzado'],
      isActive: true,
      maxStudents: 50,
      description: 'Competencia de matemáticas para todos los niveles',
    },
  ])

  const [newArea, setNewArea] = useState({
    name: '',
    cost: '',
    level: '',
    maxStudents: '',
    description: '',
  })

  const [errors, setErrors] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [editingArea, setEditingArea] = useState(null)

  const validateArea = () => {
    const newErrors = []
    if (!newArea.name.trim()) {
      newErrors.push({ field: 'name', message: 'El nombre es requerido' })
    }
    if (!newArea.cost || Number(newArea.cost) <= 0) {
      newErrors.push({ field: 'cost', message: 'El costo debe ser mayor a 0' })
    }
    if (newArea.maxStudents && Number(newArea.maxStudents) <= 0) {
      newErrors.push({ field: 'maxStudents', message: 'El número máximo de estudiantes debe ser mayor a 0' })
    }
    if (areas.some((area) => area.name.toLowerCase() === newArea.name.toLowerCase() && !editingArea)) {
      newErrors.push({ field: 'name', message: 'Ya existe un área con este nombre' })
    }
    setErrors(newErrors)
    return newErrors.length === 0
  }

  const addArea = () => {
    if (!validateArea()) return
    const newAreaData = {
      id: Date.now().toString(),
      name: newArea.name,
      cost: Number(newArea.cost),
      levels: [],
      isActive: true,
      maxStudents: Number(newArea.maxStudents) || undefined,
      description: newArea.description || undefined,
    }
    setAreas([...areas, newAreaData])
    setNewArea({ name: '', cost: '', level: '', maxStudents: '', description: '' })
    showSuccessMessage()
  }

  const addLevelToArea = (areaId, level) => {
    if (!level.trim()) {
      setErrors([{ field: 'level', message: 'El nivel no puede estar vacío' }])
      return
    }
    setAreas(
      areas.map((area) =>
        area.id === areaId ? { ...area, levels: [...new Set([...area.levels, level])] } : area
      )
    )
    setNewArea({ ...newArea, level: '' })
    showSuccessMessage()
  }

  const removeLevelFromArea = (areaId, levelToRemove) => {
    setAreas(
      areas.map((area) =>
        area.id === areaId ? { ...area, levels: area.levels.filter((level) => level !== levelToRemove) } : area
      )
    )
  }

  const removeArea = (areaId) => {
    setAreas(areas.filter((area) => area.id !== areaId))
    showSuccessMessage()
  }

  const toggleAreaStatus = (areaId) => {
    setAreas(
      areas.map((area) =>
        area.id === areaId ? { ...area, isActive: !area.isActive } : area
      )
    )
  }

  const showSuccessMessage = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Configuración del Sistema</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>
        {showSuccess && <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            Cambios guardados exitosamente
          </div>}
        {errors.length > 0 && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            {errors.map((error, index) => <div key={index} className="flex items-center text-red-700 mb-1">
                <AlertCircleIcon className="w-5 h-5 mr-2" />
                {error.message}
              </div>)}
          </div>}
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">
            {editingArea ? 'Editar Área' : 'Nueva Área de Competencia'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nombre del Área *
              </label>
              <input type="text" value={newArea.name} onChange={e => setNewArea({
              ...newArea,
              name: e.target.value
            })} className={`w-full px-3 py-2 border ${errors.some(e => e.field === 'name') ? 'border-red-300' : 'border-[#D9D9D9]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`} placeholder="Ej: Matemáticas" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Costo (Bs.) *
              </label>
              <input type="number" value={newArea.cost} onChange={e => setNewArea({
              ...newArea,
              cost: e.target.value
            })} className={`w-full px-3 py-2 border ${errors.some(e => e.field === 'cost') ? 'border-red-300' : 'border-[#D9D9D9]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`} placeholder="Ej: 350" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Máximo de Estudiantes
              </label>
              <input type="number" value={newArea.maxStudents} onChange={e => setNewArea({
              ...newArea,
              maxStudents: e.target.value
            })} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" placeholder="Ej: 50" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-1">
                Descripción
              </label>
              <textarea value={newArea.description} onChange={e => setNewArea({
              ...newArea,
              description: e.target.value
            })} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" rows={3} placeholder="Descripción del área de competencia" />
            </div>
            <div className="md:col-span-3 flex justify-end">
              <button onClick={addArea} className="bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <PlusIcon size={18} className="mr-2" />
                {editingArea ? 'Guardar Cambios' : 'Agregar Área'}
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {areas.map(area => <div key={area.id} className={`border border-[#D9D9D9] rounded-lg p-4 ${!area.isActive ? 'bg-gray-50' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold flex items-center">
                      {area.name}
                      {!area.isActive && <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          Inactiva
                        </span>}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Costo: Bs. {area.cost}
                    </p>
                    {area.maxStudents && <p className="text-sm text-gray-500">
                        Máximo: {area.maxStudents} estudiantes
                      </p>}
                    {area.description && <p className="text-sm text-gray-500 mt-2">
                        {area.description}
                      </p>}
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => toggleAreaStatus(area.id)} className={`text-sm px-2 py-1 rounded-md ${area.isActive ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-green-100 text-green-600 hover:bg-green-200'}`}>
                      {area.isActive ? 'Desactivar' : 'Activar'}
                    </button>
                    <button onClick={() => removeArea(area.id)} className="text-red-500 hover:text-red-600">
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <h4 className="text-sm font-medium mb-2">Niveles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.levels.map((level, index) => <span key={index} className="bg-gray-100 px-2 py-1 rounded-md text-sm flex items-center">
                        {level}
                        <button onClick={() => removeLevelFromArea(area.id, level)} className="ml-2 text-gray-500 hover:text-red-500">
                          <XIcon size={14} />
                        </button>
                      </span>)}
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" value={newArea.level} onChange={e => setNewArea({
                ...newArea,
                level: e.target.value
              })} className="flex-1 px-3 py-1 border border-[#D9D9D9] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" placeholder="Agregar nivel" />
                  <button onClick={() => addLevelToArea(area.id, newArea.level)} className="bg-[#A9B2AC] text-white py-1 px-3 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                    Agregar
                  </button>
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <h2 className="text-xl font-semibold mb-6">
            Datos Mínimos para Inscripción
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="requireId" className="mr-2" defaultChecked />
              <label htmlFor="requireId">Cédula de Identidad</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="requireBirth" className="mr-2" defaultChecked />
              <label htmlFor="requireBirth">Fecha de Nacimiento</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="requireTutor" className="mr-2" defaultChecked />
              <label htmlFor="requireTutor">Tutor Responsable</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="requireSchool" className="mr-2" defaultChecked />
              <label htmlFor="requireSchool">Información del Colegio</label>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
              <SaveIcon size={18} className="mr-2" />
              Guardar Configuración
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationPage;
