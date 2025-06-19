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
      if (!numero && /N[uú]mero de transacci[oó]n/i.test(linea)) {
        const inline = linea.match(/transacci[oó]n[:\s]*([0-9]+)/i);
        const nextline = lineas[i + 1]?.match(/^\d+$/);
        numero = inline?.[1] || nextline?.[0] || null;
      }

      if (!inscripcionId && /ID\s+DE\s+INSCRIPC[IÍ][OÓ]N/i.test(linea)) {
        const inline = linea.match(/ID\s+DE\s+INSCRIPC[IÍ]ON[\s:]*([\d]+)/i);
        const nextline = lineas[i + 1]?.match(/^\d+$/);
        inscripcionId = inline?.[1] || nextline?.[0] || null;
      }

      if (!tutor && /^TUTOR$/i.test(linea)) {
        const next = lineas[i + 1]?.trim();
        if (next) {
          tutor = next;
        }
      }

      if (!monto) {
        if (/MONTO\s+PAGADO/i.test(linea)) {
          const next = lineas[i + 1]?.trim();
          if (next?.match(/^[\d.,]+$/)) {
            monto = next.replace(",", ".").trim();
          }
        } else {
          const match = linea.match(/Bs\.?\s*([\d,.]+)/i);
          if (match) monto = match[1].replace(",", ".").trim();
        }
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
      await enviarAlBackend(datos);
    } catch (err) {
      console.error("Error en OCR:", err);
    } finally {
      setUploading(false);
    }
  };

  const enviarAlBackend = async (datos) => {
    console.log(datos);
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
    )}
    <div className="ml-64 p-6 lg:p-8 max-w-5xl mx-auto space-y-8 transition-all duration-300">
      
      {/* Header mejorado */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border overflow-hidden" style={{ borderColor: '#E8DDD4' }}>
        <div className="flex items-center space-x-4 mb-2">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border"
            style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4' }}>
            <FileUp className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-1"
              style={{
                background: 'linear-gradient(135deg, #5A4A3A, #8B7355)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Comprobante de Pago
            </h1>
            <p className="text-base" style={{ color: '#8B7355' }}>
              Sube tu comprobante para validación automática con IA
            </p>
          </div>
        </div>
      </div>

      {/* Panel de Subida mejorado */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300" style={{ borderColor: '#E8DDD4' }}>
        <div className="p-6 border-b"
          style={{ background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)' }}>
          <h2 className="text-xl font-bold flex items-center space-x-3" style={{ color: '#5A4A3A' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
              <UploadIcon className="w-4 h-4 text-white" />
            </div>
            <span>Subir Comprobante</span>
          </h2>
          <div className="mt-3 flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-sm border"
              style={{ backgroundColor: 'rgba(200, 183, 166, 0.2)', color: '#5A4A3A', borderColor: 'rgba(200, 183, 166, 0.3)' }}>
              JPG
            </span>
            <span className="px-3 py-1 rounded-full text-sm border"
              style={{ backgroundColor: 'rgba(184, 164, 148, 0.2)', color: '#5A4A3A', borderColor: 'rgba(184, 164, 148, 0.3)' }}>
              PNG
            </span>
            <span className="px-3 py-1 rounded-full text-sm border"
              style={{ backgroundColor: 'rgba(139, 115, 85, 0.2)', color: '#5A4A3A', borderColor: 'rgba(139, 115, 85, 0.3)' }}>
              PDF
            </span>
            <span className="text-sm ml-2" style={{ color: '#8B7355' }}>máx. 5MB</span>
          </div>
        </div>

        <div className="p-8">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 hover:scale-[1.01] ${
              dragActive ? 'shadow-inner' : ''
            }`}
            style={{
              borderColor: dragActive ? '#C8B7A6' : '#E8DDD4',
              backgroundColor: dragActive ? 'rgba(250, 247, 242, 0.5)' : 'transparent'
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!imagen ? (
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
                  <FileUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#5A4A3A' }}>
                    Arrastra tu archivo aquí
                  </h3>
                  <p className="mb-6" style={{ color: '#8B7355' }}>
                    o haz clic para seleccionar desde tu dispositivo
                  </p>
                </div>
                <label className="inline-flex items-center px-8 py-4 text-white rounded-xl cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
                  <FileText className="w-5 h-5 mr-3" />
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
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#5A4A3A' }}>{imagen.name}</h3>
                  <p className="mb-4" style={{ color: '#8B7355' }}>{formatFileSize(imagen.size)}</p>
                  <button 
                    onClick={() => setImagen(null)}
                    className="font-medium hover:underline transition-colors duration-300"
                    style={{ color: '#dc2626' }}
                  >
                    Eliminar archivo
                  </button>
                </div>
              </div>
            )}
          </div>

          {imagen && (
            <button
              onClick={handleUpload}
              disabled={uploading || processing}
              className="w-full mt-8 text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}
            >
              {uploading ? (
                <div className="flex items-center justify-center space-x-3">
                  <LoaderIcon className="w-6 h-6 animate-spin" />
                  <span>Analizando comprobante...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <Scan className="w-6 h-6" />
                  <span>Procesar Comprobante con IA</span>
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Panel de Texto OCR mejorado */}
      {textoOCR && (
        <div className="bg-white/90 backdrop-blur-md border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          style={{ borderColor: '#E8DDD4' }}>
          <div className="p-6 border-b flex justify-between items-center"
            style={{ background: 'linear-gradient(135deg, #E8DDD4, #D4C4B4)', borderColor: 'rgba(91, 74, 58, 0.3)' }}>
            <h3 className="font-bold text-xl flex items-center space-x-3" style={{ color: '#5A4A3A' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}>
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span>Texto Detectado por IA</span>
            </h3>
            <button
              onClick={() => setShowOCRText(!showOCRText)}
              className="px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-white"
              style={{ background: 'linear-gradient(135deg, #C8B7A6, #B8A494)' }}
            >
              {showOCRText ? (
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464" />
                  </svg>
                  <span>Ocultar</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Mostrar</span>
                </span>
              )}
            </button>
          </div>
          {showOCRText && (
            <div className="p-8">
              <div className="rounded-xl p-6 shadow-inner border"
                style={{ backgroundColor: '#FAF7F2', borderColor: '#E8DDD4' }}>
                <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed" style={{ color: '#5A4A3A' }}>
                  {textoOCR}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
};

export default UploadProofPage;