import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { UploadIcon, CheckCircleIcon, LoaderIcon } from 'lucide-react';
const UploadProofPage = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const handleUpload = () => {
    setUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      setProcessing(true);
      // Simulate OCR processing delay
      setTimeout(() => {
        setProcessing(false);
        setProcessed(true);
      }, 2000);
    }, 1500);
  };
  return <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Subir Comprobante de Pago</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <div className="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">
              Comprobante para Orden: ORD-2023-0587
            </h2>
            <p className="text-gray-500 mt-1">
              Sube el comprobante de transferencia o depósito
            </p>
          </div>
          {!uploaded ? <div className="border-2 border-dashed border-[#D9D9D9] rounded-md p-12 text-center mb-6">
              <UploadIcon size={48} className="mx-auto mb-4 text-[#A9B2AC]" />
              <p className="mb-4">Arrastra y suelta tu comprobante o</p>
              <button type="button" className="text-[#A9B2AC] font-medium hover:underline" onClick={handleUpload}>
                Selecciona un archivo
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Formatos aceptados: JPG, PNG, PDF (Max. 5MB)
              </p>
            </div> : <div className="mb-6">
              <div className="bg-gray-50 border border-[#D9D9D9] rounded-md p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FileIcon />
                  <span className="ml-2">comprobante.jpg</span>
                </div>
                <CheckCircleIcon className="text-green-500" size={20} />
              </div>
              {processing && <div className="mt-4 p-4 bg-blue-50 rounded-md flex items-center">
                  <LoaderIcon className="animate-spin text-[#A9B2AC] mr-2" size={20} />
                  <span>Procesando OCR...</span>
                </div>}
              {processed && <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                  <h3 className="font-medium mb-2">Información extraída:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-500">
                        Número de comprobante:
                      </p>
                      <p className="font-medium">TRX-982374</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Nombre del pagador:
                      </p>
                      <p className="font-medium">María Pérez</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha de pago:</p>
                      <p className="font-medium">15/11/2023</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Monto:</p>
                      <p className="font-medium">Bs. 350.00</p>
                    </div>
                  </div>
                </div>}
            </div>}
          <div className="flex justify-between">
            <button onClick={() => navigate('/payment-slip')} className="border border-[#D9D9D9] text-[#4F4F4F] py-2 px-6 rounded-md hover:bg-[#F2EEE3] transition-colors">
              Volver
            </button>
            <button onClick={() => navigate('/reports')} className={`bg-[#A9B2AC] text-white py-2 px-6 rounded-md transition-colors ${processed ? 'hover:bg-opacity-90' : 'opacity-50 cursor-not-allowed'}`} disabled={!processed}>
              Confirmar Pago
            </button>
          </div>
        </div>
      </div>
    </div>;
};
// Simple file icon component
const FileIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2V8H20" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
export default UploadProofPage;