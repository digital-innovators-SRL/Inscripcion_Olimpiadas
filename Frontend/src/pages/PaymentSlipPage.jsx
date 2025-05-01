import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { FileTextIcon, DownloadIcon } from 'lucide-react'

const PaymentSlipPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Obtener los datos del estudiante desde el state que se pasó en el navigate
  const { estudiantes } = location.state || {}

  // Si no hay estudiantes en el state o el array está vacío, mostramos un mensaje de error
  if (!estudiantes || estudiantes.length === 0) {
    return (
      <div className="flex min-h-screen bg-[#F2EEE3]">
        <Sidebar />
        <div className="ml-64 flex-grow p-8">
          <h1 className="text-2xl font-bold">Error</h1>
          <p>No se encontraron datos de la inscripción.</p>
        </div>
      </div>
    )
  }

  // Aquí estamos tomando solo el primer estudiante
  const estudiante = estudiantes[0] 

  // Verificación adicional para asegurarnos de que los datos existan
  if (!estudiante || !estudiante.nombre || !estudiante.ci) {
    return (
      <div className="flex min-h-screen bg-[#F2EEE3]">
        <Sidebar />
        <div className="ml-64 flex-grow p-8">
          <h1 className="text-2xl font-bold">Error</h1>
          <p>Faltan datos importantes del estudiante para generar la boleta de pago.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Boleta de Pago</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <FileTextIcon size={48} className="mx-auto mb-2 text-[#A9B2AC]" />
            <h2 className="text-xl font-semibold">Boleta de Pago Generada</h2>
          </div>

          <div className="border border-[#D9D9D9] rounded-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nombre del estudiante:</p>
                <p className="font-medium">{estudiante.nombre}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cédula de Identidad:</p>
                <p className="font-medium">{estudiante.ci}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Colegio:</p>
                <p className="font-medium">
                  {estudiante.colegio ? estudiante.colegio : (
                    <span className="text-red-500">No se registró el colegio.</span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Grado:</p>
                <p className="font-medium">
                  {estudiante.grado ? estudiante.grado : (
                    <span className="text-red-500">No se registró el grado.</span>
                  )}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Áreas inscritas:</p>
                {estudiante.areas && estudiante.areas.length > 0 ? (
                  estudiante.areas.map((area, index) => (
                    <p key={index} className="font-medium">
                      {area.nombre} - {area.nivel}
                    </p>
                  ))
                ) : (
                  <p className="font-medium text-red-500">No se encontraron áreas inscritas.</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">Monto total a pagar:</p>
                <p className="font-medium text-lg">Bs. {estudiante.montoTotal}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Código de orden de pago:</p>
                <p className="font-medium text-lg">{estudiante.codigoOrdenPago}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Fecha límite de pago:</p>
                <p className="font-medium">{estudiante.fechaLimitePago}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate('/registration')}
              className="border border-[#D9D9D9] text-[#4F4F4F] py-2 px-6 rounded-md hover:bg-[#F2EEE3] transition-colors"
            >
              Volver
            </button>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/upload-proof')}
                className="bg-[#A9B2AC] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subir Comprobante
              </button>
              <button className="bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <DownloadIcon size={18} className="mr-2" />
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSlipPage
