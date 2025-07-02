import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import axios from 'axios'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    ci: '',
    fecha_nacimiento: '',
    colegio: '',
    curso: '',
    departamento: '',
    provincia: '',
    password: '',
    password_confirmation: '',
    role: 'student',
  })

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    setErrors({})
    if (formData.password !== formData.password_confirmation) {
      setErrors({ password_confirmation: 'Las contraseñas no coinciden' })
      return
    }
    console.log(formData)
    delete formData.role;
    try {
      const res = await axios.post('http://localhost:8000/api/register-estudiante', {
        nombres: formData.nombres.trim(),
        apellidos: formData.apellidos.trim(),
        email: formData.email.trim(),
        ci: formData.ci.trim(),
        fecha_nacimiento: formData.fecha_nacimiento.trim(),
        colegio: formData.colegio.trim(),
        curso: formData.curso.trim(),
        departamento: formData.departamento.trim(),
        provincia: formData.provincia.trim(),
        password: formData.password.trim(),
        password_confirmation: formData.password_confirmation.trim(),
      })

      console.log('Respuesta del servidor:', res.data);
      navigate('/login')
    } catch (error) {
      console.error('Error al registrar:', error);
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors)
      } else {
        alert('Error en el servidor')
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2EEE3] p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#4F4F4F] hover:text-opacity-80"
          >
            <ArrowLeftIcon size={20} />
          </button>
          <h1 className="text-2xl font-bold text-[#4F4F4F] ml-4">Crear Cuenta</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex gap-x-4 flex-col md:flex-row">
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Nombres <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.nombres}
                name='nombres'
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.nombres && <small className="text-red-500 text-sm">{errors.nombres}</small>}
            </div>
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Apellidos <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.apellidos}
                name='apellidos'
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.apellidos && <small className="text-red-500 text-sm">{errors.apellidos}</small>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correo Electrónico <span className="text-red-500">*</span></label>
            <input
              type="email"
              value={formData.email}
              name='email'
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
              required
            />
            {errors.email && <small className="text-red-500 text-sm">{errors.email}</small>}
          </div>
          <div className="flex gap-x-4 flex-col md:flex-row">
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Contraseña <span className="text-red-500">*</span></label>
              <input
                type="password"
                value={formData.password}
                name='password'
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.password && <small className="text-red-500 text-sm">{errors.password}</small>}
            </div>
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Confirmar Contraseña <span className="text-red-500">*</span></label>
              <input
                type="password"
                name='password_confirmation'
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.password_confirmation && <small className="text-red-500 text-sm">{errors.password_confirmation}</small>}
            </div>
          </div>
          <div className="flex gap-x-4 flex-col md:flex-row">
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Fecha de Nacimiento <span className="text-red-500">*</span></label>
              <input
                type="date"
                name='fecha_nacimiento'
                value={formData.fecha_nacimiento}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.fecha_nacimiento && <small className="text-red-500 text-sm">{errors.fecha_nacimiento}</small>}
            </div>
            <div className='w-full md:w-1/2'>
              <label className="block text-sm font-medium mb-1">Cédula de Identidad <span className="text-red-500">*</span></label>
              <input
                type="number"
                name='ci'
                min={0}
                value={formData.ci}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                required
              />
              {errors.ci && <small className="text-red-500 text-sm">{errors.ci}</small>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Colegio <span className="text-red-500">*</span></label>
            <input
              type="text"
              name='colegio'
              value={formData.colegio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
              required
            />
            {errors.colegio && <small className="text-red-500 text-sm">{errors.colegio}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Curso <span className="text-red-500">*</span></label>
            <input
              type="text"
              name='curso'
              value={formData.curso}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
              required
            />
            {errors.curso && <small className="text-red-500 text-sm">{errors.curso}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Departamento <span className="text-red-500">*</span></label>
            <input
              type="text"
              name='departamento'
              value={formData.departamento}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
              required
            />
            {errors.departamento && <small className="text-red-500 text-sm">{errors.departamento}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Provincia <span className="text-red-500">*</span></label>
            <input
              type="text"
              name='provincia'
              value={formData.provincia}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
              required
            />
            {errors.provincia && <small className="text-red-500 text-sm">{errors.provincia}</small>}
          </div>
          <div className='hidden'>
            <label className="block text-sm font-medium mb-1">Tipo de Usuario <span className="text-red-500">*</span></label>
            <select
              value={formData.role}
              name='role'
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
            >
              <option value="student">Estudiante</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;