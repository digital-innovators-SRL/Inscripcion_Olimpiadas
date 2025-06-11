import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import * as XLSX from "xlsx";
import {
  UploadIcon,
  PlusIcon,
  TrashIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const RegistrationPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    documentId: "",
    birthDate: "",
    school: "",
    grade: "",
    course: '',         // nuevo
    department: '',     // nuevo
    province: '',       // nuevo
    email: '',          // nuevo
    phone: '',          // nuevo
    areas: [],
    tutors: [],
  });
  const gradosEstandar = [
    '3ro Primaria', '4to Primaria', '5to Primaria', '6to Primaria',
    '1ro Secundaria', '2do Secundaria', '3ro Secundaria',
    '4to Secundaria', '5to Secundaria', '6to Secundaria'
  ];
  const [errors, setErrors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [availableAreas, setAvailableAreas] = useState([]);
  const [availableGrades, setAvailableGrades] = useState([]);
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);
  const [availableCompetencias, setCompetenciasDisponibles] = useState([]);
  const [areas, setAreas] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [excelFile, setExcelFile] = useState(null);


 
  // ---------------------- Obtener datos iniciales ----------------------
    useEffect(() => {
      obtenerDatosIniciales();
    }, []);

    const obtenerDatosIniciales = async () => {
      try {
        const [areasRes, categoriasRes, competenciasRes] = await Promise.all([
          axios.get('/api/areas'),
          axios.get('/api/categorias'),
          axios.get('/api/competencias'),
        ]);

        setAvailableAreas(areasRes.data);
        setCategoriasDisponibles(categoriasRes.data);
        setCompetenciasDisponibles(competenciasRes.data);
      } catch (error) {
        console.error('Error al obtener datos del backend:', error);
      }
    };
  // ---------------------- Validación del formulario ----------------------
const validateForm = () => {
  const newErrors = [];
  if (!student.name.trim()) {
    newErrors.push({ field: "name", message: "El nombre es requerido" });
  }
  if (!student.documentId.trim()) {
    newErrors.push({
      field: "documentId",
      message: "La cédula de identidad es requerida",
    });
  }
  if (!student.birthDate) {
    newErrors.push({
      field: "birthDate",
      message: "La fecha de nacimiento es requerida",
    });
  }
  if (student.areas.length === 0) {
    newErrors.push({
      field: "areas",
      message: "Debe seleccionar al menos un área",
    });
  }
  if (student.areas.length > 2) {
    newErrors.push({
      field: "areas",
      message: "No puede inscribirse en más de 2 áreas",
    });
  }
  if (student.tutors.length === 0) {
    newErrors.push({
      field: "tutors",
      message: "Debe registrar al menos un tutor",
    });
  }
  setErrors(newErrors);
  return newErrors.length === 0;
};

// ---------------------- Envío de inscripción ----------------------
const registrarInscripcion = async () => {
  try {
    const response = await fetch("http://dis.tis.cs.umss.edu.bo/inscripciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}` si usas autenticación
      },
      body: JSON.stringify(student),
    });

    if (!response.ok) throw new Error("Error al registrar la inscripción");

    const data = await response.json();
    console.log("Inscripción guardada:", data);
    setShowSuccess(true);
    setTimeout(() => navigate("/payment-slip"), 1500);
  } catch (error) {
    console.error(error);
    setErrors([
      {
        field: "general",
        message: "Hubo un problema al guardar la inscripción.",
      },
    ]);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  await registrarInscripcion();
};

// ---------------------- Manejo de áreas ----------------------
const handleAddArea = () => {
  if (student.areas.length >= 2) {
    setErrors([
      ...errors,
      { field: "areas", message: "No puede  inscribirse en más de 2 áreas" },
    ]);
    return;
  }
  setStudent({
    ...student,
    areas: [
      ...student.areas,
      { id: Date.now().toString(), name: "", level: "", cost: 0 },
    ],
  });
};

const handleAreaChange = (index, areaId) => {
  const areaSeleccionada = availableAreas.find((a) => a.id === areaId);
  if (areaSeleccionada) {
    const newAreas = [...student.areas];
    newAreas[index] = {
      ...newAreas[index],
      id: areaId,
      name: areaSeleccionada.name,
      level: "",
      cost: 0,
    };
    setStudent({ ...student, areas: newAreas });
    setAvailableGrades(areaSeleccionada.levels);
  }
};

const handleGradeChange = (index, grade) => {
  const newAreas = [...student.areas];
  const selectedArea = newAreas[index];
  const areaData = availableAreas.find((a) => a.id === selectedArea.id);
  const gradeData = areaData?.levels.find((l) => l.grade === grade);

  newAreas[index] = {
    ...selectedArea,
    level: grade,
    cost: gradeData ? gradeData.cost : 0,
  };
  setStudent({ ...student, areas: newAreas });
};

const handleRemoveArea = (index) => {
  const newAreas = student.areas.filter((_, i) => i !== index);
  setStudent({ ...student, areas: newAreas });

  if (newAreas.length === 0) {
    setAvailableGrades([]);
  } else {
    const lastAreaId = newAreas[newAreas.length - 1].id;
    const lastArea = availableAreas.find((area) => area.id === lastAreaId);
    if (lastArea) setAvailableGrades(lastArea.levels);
  }
};

// ---------------------- Manejo de tutores ----------------------
const handleAddTutor = () => {
  setStudent({
    ...student,
    tutors: [
      ...student.tutors,
      {
        id: Date.now().toString(),
        name: "",
        relationship: "",
        phone: "",
        email: "",
      },
    ],
  });
};

const handleTutorChange = (index, field, value) => {
  const newTutors = [...student.tutors];
  newTutors[index] = { ...newTutors[index], [field]: value };
  setStudent({ ...student, tutors: newTutors });
};

const handleRemoveTutor = (index) => {
  setStudent({
    ...student,
    tutors: student.tutors.filter((_, i) => i !== index),
  });
};

// ---------------------- Manejo de archivos Excel ----------------------
const sanitizeText = (text) => {
  return String(text || "")
    .replace(/[^\w\sáéíóúÁÉÍÓÚñÑ.-]/gi, "")
    .trim();
};

const readExcel = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const MAX_SIZE_MB = 5;
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    alert("El archivo excede los 5MB permitidos.");
    return;
  }
  
  setExcelFile(file); 
  const reader = new FileReader();
  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const headers = parsedData[0];
    const rows = parsedData.slice(1).map((row) => {
      const entry = {};
      headers.forEach((header, i) => {
        entry[sanitizeText(header)] = sanitizeText(row[i]);
      });
      return entry;
    });

    setExcelData(rows);
    console.log("Datos cargados desde Excel:", rows);
  };

  reader.readAsArrayBuffer(file);
};
const subirArchivoExcel = async () => {
  if (!excelFile) {
    alert("No hay archivo para subir");
    return;
  }

  const formData = new FormData();
  formData.append("archivo", excelFile);

  try {
    const response = await fetch("http://dis.tis.cs.umss.edu.bo/api/importar-inscripciones", {
      method: "POST",
      body: formData,
      // headers: { Authorization: `Bearer ${token}` }, // si usas JWT
    });

    if (!response.ok) throw new Error("Error al subir el archivo Excel");

    const data = await response.json();
    console.log("Archivo subido exitosamente:", data);
    alert("Archivo Excel subido correctamente");
  } catch (error) {
    console.error("Error al subir el archivo Excel:", error);
    alert("Error al subir el archivo Excel");
  }
};

const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
      readExcel({ target: { files: [file] } });
    } else {
      alert("Por favor sube un archivo Excel (.xls o .xlsx)");
    }
  }
};

const handleDragOver = (event) => {
  event.preventDefault();
};


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
          {errors.length > 0 && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              {errors.map((error, index) => (
                <div key={index} className="flex items-center text-red-700 mb-1">
                  <AlertCircleIcon className="w-5 h-5 mr-2" />
                  {error.message}
                </div>
              ))}
            </div>
          )}
          {showSuccess && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
              <CheckCircleIcon className="w-5 h-5 mr-2" />
              Inscripción registrada exitosamente
            </div>
          )}
          <div className="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
            <h2 className="text-xl font-semibold mb-6">Formulario de Inscripción</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Competencia *</label>
                  <select
                    value={student.competencia}
                    onChange={(e) => setStudent({ ...student, competencia: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      errors.some((e) => e.field === "competencia")
                        ? "border-red-300"
                        : "border-[#D9D9D9]"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                    required
                  >
                    <option value="">Seleccionar competencia</option>
                    {availableCompetencias.map((comp) => (
                      <option key={comp.id} value={comp.id}>
                        {comp.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nombre del estudiante *
                  </label>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) =>
                      setStudent({ ...student, name: e.target.value })
                    }
                    className={`w-full px-3 py-2 border ${
                      errors.some((e) => e.field === "name")
                        ? "border-red-300"
                        : "border-[#D9D9D9]"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Número de Cédula de Identidad *
                  </label>
                  <input
                    type="text"
                    value={student.documentId}
                    onChange={(e) =>
                      setStudent({ ...student, documentId: e.target.value })
                    }
                    className={`w-full px-3 py-2 border ${
                      errors.some((e) => e.field === "documentId")
                        ? "border-red-300"
                        : "border-[#D9D9D9]"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Fecha de nacimiento *
                  </label>
                  <input
                    type="date"
                    value={student.birthDate}
                    onChange={(e) =>
                      setStudent({ ...student, birthDate: e.target.value })
                    }
                    className={`w-full px-3 py-2 border ${
                      errors.some((e) => e.field === "birthDate")
                        ? "border-red-300"
                        : "border-[#D9D9D9]"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Colegio *</label>
                  <input
                    type="text"
                    value={student.school}
                    onChange={(e) =>
                      setStudent({ ...student, school: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Curso</label>
                  <input
                    type="text"
                    value={student.course}
                    onChange={(e) => setStudent({ ...student, course: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Departamento</label>
                  <input
                    type="text"
                    value={student.department}
                    onChange={(e) => setStudent({ ...student, department: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Provincia</label>
                  <input
                    type="text"
                    value={student.province}
                    onChange={(e) => setStudent({ ...student, province: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={student.email}
                    onChange={(e) => setStudent({ ...student, email: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Número de Celular</label>
                  <input
                    type="tel"
                    value={student.phone}
                    onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                

                <div>
                  <label className="block text-sm font-medium mb-1">Nivel de competencia *</label>
                  <select
                    value={student.nivel}
                    onChange={(e) => setStudent({ ...student, nivel: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      errors.some((e) => e.field === "nivel")
                        ? "border-red-300"
                        : "border-[#D9D9D9]"
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                    required
                  >
                    <option value="">Seleccionar nivel</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
                    <div>
                  <label className="block text-sm font-medium mb-1">Grado *</label>
                  <select
                  value={student.grade}
                  onChange={(e) => setStudent({ ...student, grade: e.target.value })}
                  className={`w-full px-3 py-2 border ${
                    errors.some((e) => e.field === "grade") ? "border-red-300" : "border-[#D9D9D9]"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`}
                  required
                >
                  <option value="">Seleccionar grado</option>
                  {availableGrades.map((grade, index) => (
                    <option key={index} value={gradosEstandar}>
                      {gradosEstandar}
                    </option>
                  ))}
                </select>

                </div>
              </div>
              <div className="border-t border-[#D9D9D9] pt-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Áreas de Competencia *</h3>
                  <button
                    type="button"
                    onClick={handleAddArea}
                    className="text-[#A9B2AC] hover:text-opacity-80 flex items-center"
                    disabled={student.areas.length >= 2}
                  >
                    <PlusIcon size={18} className="mr-1" />
                    Agregar Área
                  </button>
                </div>
                {student.areas.length === 0 && (
                  <p className="text-gray-500 text-sm mb-4">
                    Agregue al menos un área de competencia
                  </p>
                )}
                {student.areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <select
                        value={area.id}
                        onChange={(e) => handleAreaChange(index, e.target.value)}
                        className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                        required
                      >
                        <option value="">Seleccionar área</option>
                        {availableAreas.map((a) => (
                          <option key={a.id} value={a.id}>
                          {a.name} - {a.level} (Bs. {a.cost})
                        </option>                        
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveArea(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                ))}
                {student.areas.length > 0 && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="font-medium">Costo total: Bs. {totalCost}</p>
                  </div>
                )}
              </div>
              <div className="border-t border-[#D9D9D9] pt-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Tutores *</h3>
                  <button
                    type="button"
                    onClick={handleAddTutor}
                    className="text-[#A9B2AC] hover:text-opacity-80 flex items-center"
                  >
                    <PlusIcon size={18} className="mr-1" />
                    Agregar Tutor
                  </button>
                </div>
                {student.tutors.length === 0 && (
                  <p className="text-gray-500 text-sm mb-4">
                    Agregue al menos un tutor responsable
                  </p>
                )}
                {student.tutors.map((tutor, index) => (
                  <div key={tutor.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nombre del tutor *</label>
                      <input
                        type="text"
                        value={tutor.name}
                        onChange={(e) =>
                          handleTutorChange(index, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Parentesco *</label>
                      <input
                        type="text"
                        value={tutor.relationship}
                        onChange={(e) =>
                          handleTutorChange(index, "relationship", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Teléfono *</label>
                      <input
                        type="tel"
                        value={tutor.phone}
                        onChange={(e) =>
                          handleTutorChange(index, "phone", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]"
                        required
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={() => handleRemoveTutor(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#D9D9D9] pt-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Subir lista en archivo Excel</h3>
                  <div
                    className="border-2 border-dashed border-[#D9D9D9] rounded-md p-8 text-center cursor-pointer hover:bg-gray-50"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                      border: '2px dashed gray',
                      padding: '20px',
                      textAlign: 'center',
                      marginTop: '20px',
                      borderRadius: '10px',
                    }}
                  >
                    <UploadIcon size={32} className="mx-auto mb-2 text-[#A9B2AC]" />
                    <p className="text-sm text-gray-500 mb-2">
                      Arrastra y suelta el archivo aquí, o selecciona uno desde tu computadora
                    </p>
                    <input
                      type="file"
                      accept=".xls,.xlsx"
                      onChange={(e) => {
                        const archivo = e.target.files[0];
                        setExcelFile(archivo); // guardar para subir
                        readExcel(e);          // opcional si sigues previsualizando
                      }}
                      className="block mx-auto mt-2 text-sm text-gray-600"
                    />
                  </div>

                  {/* Previsualización de datos cargados */}
                  {excelData.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-md font-semibold mb-2">Previsualización de datos:</h4>
                      <div className="overflow-auto max-h-64 border border-gray-200 rounded-md">
                        <table className="min-w-full text-left text-sm table-auto">
                          <thead className="bg-gray-100">
                            <tr>
                              {Object.keys(excelData[0]).map((header, i) => (
                                <th key={i} className="px-4 py-2 font-medium text-gray-700 border-b">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {excelData.map((row, rowIndex) => (
                              <tr key={rowIndex} className="hover:bg-gray-50">
                                {Object.values(row).map((cell, cellIndex) => (
                                  <td key={cellIndex} className="px-4 py-2 border-b">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-2 border border-[#D9D9D9] rounded-md hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#A9B2AC] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Generar Boleta de Pago
                </button>
                <button type="button" onClick={subirArchivoExcel} className="btn btn-primary">
  Subir archivo Excel al backend
</button>
<a
  href="/plantilla_inscripcion.xlsx"
  download
  className="text-blue-600 underline hover:text-blue-800"
>
  Descargar plantilla de inscripción
</a>

              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default RegistrationPage;