import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { UploadIcon, CheckCircleIcon, LoaderIcon, XCircle } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import imageCompression from "browser-image-compression";

const UploadProofPage = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [imagen, setImagen] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processedData, setProcessedData] = useState(null);
  const [error, setError] = useState("");
  const [textoOCR, setTextoOCR] = useState(""); 
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Determinar si estamos en la página de login
  const isLoginPage = location.pathname === '/login';

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
    setProcessedData(null);
    setError("");
  };

  const procesarTexto = (text) => {
    const lineas = text.split('\n').map(l => l.trim()).filter(Boolean);
    let numero = null;
    let inscripcionId = null;
    let tutor = null;
    let monto = null;

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i];

      if (!numero && /N[úu]mero de transacci[oó]n/i.test(linea)) {
        const inline = linea.match(/(\d{4,})/);
        const nextline = lineas[i + 1]?.match(/^\d{4,}$/);
        numero = inline?.[1] || nextline?.[0] || null;
      }

      if (!inscripcionId && /ID\s+DE\s+INSCRIPC[IÍ][OÓ]N/i.test(linea)) {
        const inline = linea.match(/ID\s+DE\s+INSCRIPC[IÍ]ON[\s:]*([\d]+)/i);
        const nextline = lineas[i + 1]?.match(/^\d+$/);
        inscripcionId = inline?.[1] || nextline?.[0] || null;
      }

      if (!tutor) {
        if (linea.match(/^Tutor[:]?$/i)) {
          tutor = lineas[i + 1]?.trim();
        } else {
          const match = linea.match(/Tutor[:\s]*([A-ZÁÉÍÓÚÑ\s]+)/i);
          if (match) tutor = match[1].trim();
        }
      }

      if (!monto) {
        const match = linea.match(/Bs\.?\s*([\d,.]+)/i);
        if (match) monto = match[1].replace(",", ".").trim();
      }
    }

    const datos = { numero, inscripcion_id: inscripcionId, tutor, monto };
    console.log("📄 Datos extraídos:", datos);
    setProcessedData(datos);
    return datos;
  };

  const handleUpload = async () => {
    if (!imagen) return;
    setUploading(true);
    setProcessing(false);
    setError("");

    const formData = new FormData();
    let filename = "";
    let filetype = "";

    try {
      if (imagen.type === "application/pdf") {
        formData.append("file", imagen, "comprobante.pdf");
        filetype = "pdf";
      } else if (imagen.type.startsWith("image/")) {
        const compressedFile = await imageCompression(imagen, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1000,
          useWebWorker: true,
        });

        formData.append("file", compressedFile, "comprobante.png");
        filetype = "png";
      } else {
        throw new Error("Tipo de archivo no soportado.");
      }

      formData.append("language", "spa");
      formData.append("isOverlayRequired", "false");
      formData.append("filetype", filetype);

      const res = await fetch("https://api.ocr.space/parse/image", {
        method: "POST",
        headers: {
          apikey: "K83603773288957",
        },
        body: formData,
      });

      const data = await res.json();

      if (data.IsErroredOnProcessing || !data.ParsedResults) {
        throw new Error(data.ErrorMessage || "Error en el OCR.");
      }

      const texto = data.ParsedResults[0].ParsedText;
      console.log("Texto detectado:", texto);
      setTextoOCR(texto); 

      const datos = procesarTexto(texto);
      if (datos.numero && datos.inscripcion_id) {
        enviarAlBackend(datos);
      } else {
        setError("No se pudieron extraer los datos correctamente del comprobante.");
      }
    } catch (err) {
      console.error("Error al usar OCR.Space:", err);
      setError(err.message || "Error durante el reconocimiento OCR.");
    } finally {
      setUploading(false);
    }
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
      {/* Sidebar con control de visibilidad y estado */}
      {!isLoginPage && (
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
        />
      )}
      
      {/* Contenido principal con margen condicional */}
      <div 
        className={`flex-grow p-8 transition-all duration-300 ${
          !isLoginPage ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''
        }`}
      >
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
            <input type="file" accept="image/*,.pdf" onChange={handleImagenChange} />
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

          {textoOCR && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-md border border-yellow-300">
              <h3 className="font-medium mb-2 text-yellow-700">Texto completo detectado:</h3>
              <pre className="text-sm text-yellow-900 whitespace-pre-wrap">{textoOCR}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProofPage;