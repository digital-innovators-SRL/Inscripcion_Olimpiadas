import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import {
  UploadIcon,
  PlusIcon,
  TrashIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from 'lucide-react'

const RegistrationPage = () => {
  const navigate = useNavigate()
  const [student, setStudent] = useState({
    name: '',
    documentId: '',
    birthDate: '',
    school: '',
    grade: '',
    areas: [],
    tutors: [],
  })
  const [errors, setErrors] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [totalCost, setTotalCost] = useState(0)
  const [availableAreas, setAvailableAreas] = useState([])

  useEffect(() => {
    setAvailableAreas([
      { id: '1', name: 'Matemáticas', level: 'Básico', cost: 350 },
      { id: '2', name: 'Matemáticas', level: 'Intermedio', cost: 350 },
      { id: '3', name: 'Física', level: 'Básico', cost: 350 },
      { id: '4', name: 'Química', level: 'Avanzado', cost: 350 },
    ])
  }, [])

  useEffect(() => {
    const newTotal = student.areas.reduce((sum, area) => sum + area.cost, 0)
    setTotalCost(newTotal)
  }, [student.areas])

  const validateForm = () => {
    const newErrors = []
    if (!student.name.trim()) {
      newErrors.push({ field: 'name', message: 'El nombre es requerido' })
    }
    if (!student.documentId.trim()) {
      newErrors.push({ field: 'documentId', message: 'La cédula de identidad es requerida' })
    }
    if (!student.birthDate) {
      newErrors.push({ field: 'birthDate', message: 'La fecha de nacimiento es requerida' })
    }
    if (student.areas.length === 0) {
      newErrors.push({ field: 'areas', message: 'Debe seleccionar al menos un área' })
    }
    if (student.areas.length > 2) {
      newErrors.push({ field: 'areas', message: 'No puede inscribirse en más de 2 áreas' })
    }
    if (student.tutors.length === 0) {
      newErrors.push({ field: 'tutors', message: 'Debe registrar al menos un tutor' })
    }
    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setShowSuccess(true)
    setTimeout(() => navigate('/payment-slip'), 1500)
  }

  const handleAddArea = () => {
    if (student.areas.length >= 2) {
      setErrors([...errors, { field: 'areas', message: 'No puede inscribirse en más de 2 áreas' }])
      return
    }
    setStudent({
      ...student,
      areas: [...student.areas, { id: Date.now().toString(), name: '', level: '', cost: 0 }],
    })
  }

  const handleAreaChange = (index, areaId) => {
    const selectedArea = availableAreas.find((a) => a.id === areaId)
    if (!selectedArea) return
    const newAreas = [...student.areas]
    newAreas[index] = selectedArea
    setStudent({ ...student, areas: newAreas })
  }

  const handleRemoveArea = (index) => {
    setStudent({ ...student, areas: student.areas.filter((_, i) => i !== index) })
  }

  const handleAddTutor = () => {
    setStudent({
      ...student,
      tutors: [...student.tutors, { id: Date.now().toString(), name: '', relationship: '', phone: '', email: '' }],
    })
  }

  const handleTutorChange = (index, field, value) => {
    const newTutors = [...student.tutors]
    newTutors[index] = { ...newTutors[index], [field]: value }
    setStudent({ ...student, tutors: newTutors })
  }

  const handleRemoveTutor = (index) => {
    setStudent({ ...student, tutors: student.tutors.filter((_, i) => i !== index) })
  }

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Inscripción</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>
        {errors.length > 0 && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            {errors.map((error, index) => <div key={index} className="flex items-center text-red-700 mb-1">
                <AlertCircleIcon className="w-5 h-5 mr-2" />
                {error.message}
              </div>)}
          </div>}
        {showSuccess && <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            Inscripción registrada exitosamente
          </div>}
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
          <h2 className="text-xl font-semibold mb-6">
            Formulario de Inscripción
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nombre del estudiante *
                </label>
                <input type="text" value={student.name} onChange={e => setStudent({
                ...student,
                name: e.target.value
              })} className={`w-full px-3 py-2 border ${errors.some(e => e.field === 'name') ? 'border-red-300' : 'border-[#D9D9D9]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Número de Cédula de Identidad *
                </label>
                <input type="text" value={student.documentId} onChange={e => setStudent({
                ...student,
                documentId: e.target.value
              })} className={`w-full px-3 py-2 border ${errors.some(e => e.field === 'documentId') ? 'border-red-300' : 'border-[#D9D9D9]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Fecha de nacimiento *
                </label>
                <input type="date" value={student.birthDate} onChange={e => setStudent({
                ...student,
                birthDate: e.target.value
              })} className={`w-full px-3 py-2 border ${errors.some(e => e.field === 'birthDate') ? 'border-red-300' : 'border-[#D9D9D9]'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Colegio *
                </label>
                <input type="text" value={student.school} onChange={e => setStudent({
                ...student,
                school: e.target.value
              })} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
              </div>
            </div>
            <div className="border-t border-[#D9D9D9] pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Áreas de Competencia *</h3>
                <button type="button" onClick={handleAddArea} className="text-[#A9B2AC] hover:text-opacity-80 flex items-center" disabled={student.areas.length >= 2}>
                  <PlusIcon size={18} className="mr-1" />
                  Agregar Área
                </button>
              </div>
              {student.areas.length === 0 && <p className="text-gray-500 text-sm mb-4">
                  Agregue al menos un área de competencia
                </p>}
              {student.areas.map((area, index) => <div key={index} className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <select value={area.id} onChange={e => handleAreaChange(index, e.target.value)} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required>
                      <option value="">Seleccionar área</option>
                      {availableAreas.map(a => <option key={a.id} value={a.id}>
                          {a.name} - {a.level} (Bs. {a.cost})
                        </option>)}
                    </select>
                  </div>
                  <button type="button" onClick={() => handleRemoveArea(index)} className="text-red-500 hover:text-red-700">
                    <TrashIcon size={18} />
                  </button>
                </div>)}
              {student.areas.length > 0 && <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p className="font-medium">Costo total: Bs. {totalCost}</p>
                </div>}
            </div>
            <div className="border-t border-[#D9D9D9] pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Tutores *</h3>
                <button type="button" onClick={handleAddTutor} className="text-[#A9B2AC] hover:text-opacity-80 flex items-center">
                  <PlusIcon size={18} className="mr-1" />
                  Agregar Tutor
                </button>
              </div>
              {student.tutors.length === 0 && <p className="text-gray-500 text-sm mb-4">
                  Agregue al menos un tutor responsable
                </p>}
              {student.tutors.map((tutor, index) => <div key={tutor.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nombre del tutor *
                    </label>
                    <input type="text" value={tutor.name} onChange={e => handleTutorChange(index, 'name', e.target.value)} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Parentesco *
                    </label>
                    <input type="text" value={tutor.relationship} onChange={e => handleTutorChange(index, 'relationship', e.target.value)} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Teléfono *
                    </label>
                    <input type="tel" value={tutor.phone} onChange={e => handleTutorChange(index, 'phone', e.target.value)} className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]" required />
                  </div>
                  <div className="flex items-end">
                    <button type="button" onClick={() => handleRemoveTutor(index)} className="text-red-500 hover:text-red-700">
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </div>)}
            </div>
            <div className="border-t border-[#D9D9D9] pt-6 mb-6">
              <h3 className="text-lg font-medium mb-4">
                Subir lista en archivo Excel
              </h3>
              <div className="border-2 border-dashed border-[#D9D9D9] rounded-md p-8 text-center">
                <UploadIcon size={32} className="mx-auto mb-2 text-[#A9B2AC]" />
                <p className="mb-2">Arrastra y suelta un archivo Excel o</p>
                <button type="button" className="text-[#A9B2AC] font-medium hover:underline">
                  Selecciona un archivo
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Formato: XLS, XLSX (Max. 5MB)
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button type="button" onClick={() => navigate(-1)} className="px-6 py-2 border border-[#D9D9D9] rounded-md hover:bg-gray-50">
                Cancelar
              </button>
              <button type="submit" className="bg-[#A9B2AC] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                Generar Boleta de Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;
