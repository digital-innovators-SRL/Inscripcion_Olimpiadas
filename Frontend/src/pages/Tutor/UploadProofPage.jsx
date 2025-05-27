import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { UploadIcon, CheckCircleIcon, LoaderIcon, XCircle } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import Tesseract from "tesseract.js";
import axios from "axios";

const UploadProofPage = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processedData, setProcessedData] = useState(null);
  const [error, setError] = useState("");

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
    setProcessedData(null);
    setError("");
  };

  const procesarTexto = (text) => {
    const lineas = text.split('\n').map(l => l.trim());

    // Nuevo patrón para detectar "Número de transacción"
    let numero = null;
    for (let linea of lineas) {
      const match = linea.match(/n[úu]mero de transacci[oó]n\s*(\d+)/i);
      if (match) {
        numero = match[1];
        break;
      }
    }

    const inscripcionId = text.match(/ID DE INSCRIPC[IÍ]ON\s*(\d+)/i)?.[1] || null;
    const tutor = text.match(/Tutor:\s*(.*)/i)?.[1]?.trim() || null;
    const monto = text.match(/Bs\.\s*([\d,.]+)/i)?.[1]?.replace(",", ".") || null;

    const datos = { numero, inscripcion_id: inscripcionId, tutor, monto };
    console.log("📄 Datos extraídos:", datos);
    setProcessedData(datos);
    return datos;
  };


  const handleUpload = () => {
    if (!imagen) return;
    setUploading(true);
    setProcessing(false);
    setError("");

    Tesseract.recognize(imagen, "spa", {
      logger: (m) => console.log("OCR progreso:", m),
    })
      .then(({ data: { text } }) => {
        const datos = procesarTexto(text);
        if (datos.numero && datos.inscripcion_id) {
          enviarAlBackend(datos);
        } else {
          setError("No se pudieron extraer los datos correctamente del comprobante.");
        }
      })
      .catch((err) => {
        console.error("Error OCR:", err);
        setError("Error durante el procesamiento del OCR.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const enviarAlBackend = async (datos) => {
    setProcessing(true);
    try {
      await axios.post(
        "http://localhost:8000/api/tutor/confirmar-comprobante",
        datos,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProcessing(false);
    } catch (err) {
      console.error("Error al enviar al backend:", err);
      setError("Error al guardar el comprobante. Verifica los datos.");
      setProcessing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Subir Comprobante de Pago</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Comprobante OCR</h2>
            <p className="text-gray-500 mt-1">
              Sube el comprobante de transferencia para su validación
            </p>
          </div>

          <div className="border-2 border-dashed border-[#D9D9D9] rounded-md p-12 text-center mb-6">
            <UploadIcon size={48} className="mx-auto mb-4 text-[#A9B2AC]" />
            <input type="file" accept="image/*" onChange={handleImagenChange} />
            <button
              className="mt-4 text-[#A9B2AC] font-medium hover:underline"
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Procesando imagen..." : "Procesar Comprobante"}
            </button>
          </div>

          {processing && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md flex items-center">
              <LoaderIcon className="animate-spin text-[#A9B2AC] mr-2" size={20} />
              <span>Guardando comprobante...</span>
            </div>
          )}

          {processedData && !processing && (
            <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
              <CheckCircleIcon className="text-green-500 mb-2" />
              <h3 className="font-medium mb-2">Información extraída:</h3>
              <p><strong>ID Inscripción:</strong> {processedData.inscripcion_id}</p>
              <p><strong>Número comprobante:</strong> {processedData.numero}</p>
              <p><strong>Tutor:</strong> {processedData.tutor}</p>
              <p><strong>Monto:</strong> Bs. {processedData.monto}</p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md border border-red-300 flex items-center">
              <XCircle className="mr-2" /> {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProofPage;
