import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {
  UploadIcon,
  LoaderIcon,
  FileText,
  Eye,
  Scan,
  FileUp
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import imageCompression from "browser-image-compression";

const UploadProofPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true); // ← Añade esto
  const isLoginPage = location.pathname === '/login'; // ← Añade esto
  const [imagen, setImagen] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [textoOCR, setTextoOCR] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [showOCRText, setShowOCRText] = useState(false);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setTextoOCR("");
      setShowOCRText(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImagen(e.dataTransfer.files[0]);
      setTextoOCR("");
      setShowOCRText(false);
    }
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
        const match = linea.match(/Bs\.?\s*([\d,.]+)/i) || linea.match(/MONTO\s+PAGADO\s+([\d,.]+)/i);
        if (match) monto = match[1].replace(",", ".").trim();
      }
    }

    return { numero, inscripcion_id: inscripcionId, tutor, monto };
  };

  const handleUpload = async () => {
    if (!imagen) return;
    setUploading(true);
    setProcessing(false);

    const formData = new FormData();
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
        headers: { apikey: "K83603773288957" },
        body: formData,
      });

      const data = await res.json();

      if (data.IsErroredOnProcessing || !data.ParsedResults) {
        throw new Error(data.ErrorMessage || "Error en el OCR.");
      }

      const texto = data.ParsedResults[0].ParsedText;
      setTextoOCR(texto);

      const datos = procesarTexto(texto);
      enviarAlBackend(datos);
    } catch (err) {
      console.error("Error en OCR:", err);
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
    } catch (err) {
      console.error("Error al enviar al backend:", err);
    } finally {
      setProcessing(false);
    }
  };

  const formatFileSize = (bytes) => {
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${['Bytes', 'KB', 'MB'][i]}`;
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)' }}>
{!isLoginPage && (
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
    )}      <div className="ml-64 p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border"
            style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4' }}>
            <FileUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #5A4A3A, #8B7355)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Comprobante de Pago
            </h1>
            <p className="text-sm" style={{ color: '#8B7355' }}>
              Sube tu comprobante para validación automática
            </p>
          </div>
        </div>

        {/* Panel de Subida */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden" style={{ borderColor: '#E8DDD4' }}>
          <div className="p-4 border-b"
            style={{ background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)' }}>
            <h2 className="text-lg font-bold flex items-center space-x-2" style={{ color: '#5A4A3A' }}>
              <UploadIcon className="w-5 h-5" style={{ color: '#8B7355' }} />
              <span>Subir Comprobante</span>
            </h2>
            <p className="text-sm mt-1" style={{ color: '#8B7355' }}>
              Formatos: JPG, PNG, PDF (máx. 5MB)
            </p>
          </div>

          <div className="p-6">
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              style={{
                borderColor: dragActive ? '#C8B7A6' : '#E8DDD4',
                backgroundColor: dragActive ? '#FAF7F2' : 'transparent'
              }}
            >
              {!imagen ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
                    <FileUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#5A4A3A' }}>
                    Arrastra tu archivo aquí
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#8B7355' }}>
                    o haz clic para seleccionar
                  </p>
                  <label className="inline-flex items-center px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md text-white font-medium"
                    style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
                    <FileText className="w-4 h-4 mr-2" />
                    Seleccionar archivo
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleImagenChange}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">✓</div>
                  <h3 className="font-semibold text-lg" style={{ color: '#5A4A3A' }}>{imagen.name}</h3>
                  <p className="text-sm" style={{ color: '#8B7355' }}>{formatFileSize(imagen.size)}</p>
                  <button onClick={() => setImagen(null)} className="mt-2 text-sm text-red-600 hover:underline">
                    Eliminar archivo
                  </button>
                </div>
              )}
            </div>

            {imagen && (
              <button
                onClick={handleUpload}
                disabled={uploading || processing}
                className="w-full mt-6 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}
              >
                {uploading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <LoaderIcon className="w-5 h-5 animate-spin" />
                    <span>Analizando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Scan className="w-5 h-5" />
                    <span>Procesar Comprobante</span>
                  </div>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Panel de Texto OCR Abajo */}
        {textoOCR && (
          <div className="bg-white/90 backdrop-blur-md border rounded-xl shadow-lg overflow-hidden"
            style={{ borderColor: '#E8DDD4' }}>
            <div className="p-4 border-b flex justify-between items-center"
              style={{ background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)' }}>
              <h3 className="font-bold flex items-center space-x-2" style={{ color: '#5A4A3A' }}>
                <Eye className="w-5 h-5" style={{ color: '#8B7355' }} />
                <span>Texto Detectado</span>
              </h3>
              <button
                onClick={() => setShowOCRText(!showOCRText)}
                className="text-sm px-3 py-1 rounded-lg transition-all duration-300 hover:shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #C8B7A6, #B8A494)',
                  color: 'white'
                }}
              >
                {showOCRText ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
            {showOCRText && (
              <div className="p-6">
                <pre className="text-sm whitespace-pre-wrap p-4 rounded-lg"
                  style={{ backgroundColor: '#FAF7F2', color: '#5A4A3A', border: '1px solid #E8DDD4' }}>
                  {textoOCR}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadProofPage;