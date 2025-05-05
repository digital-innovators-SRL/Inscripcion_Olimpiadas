import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
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
  const [errors, setErrors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [availableAreas, setAvailableAreas] = useState([]);
  const [availableGrades, setAvailableGrades] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // Datos simulados según tu estructura
    const mockAreas = [
      { id: '1', name: 'Astronomía - Astrofísica', levels: [
        { grade: '3ro Primaria', cost: 150 },
        { grade: '4to Primaria', cost: 150 },
        { grade: '5to Primaria', cost: 150 },
        { grade: '6to Primaria', cost: 150 },
        { grade: '1ro Secundaria', cost: 180 },
        { grade: '2do Secundaria', cost: 180 },
        { grade: '3ro Secundaria', cost: 180 },
        { grade: '4to Secundaria', cost: 180 },
        { grade: '5to Secundaria', cost: 180 },
        { grade: '6to Secundaria', cost: 180 }
      ]},
      { id: '2', name: 'Biología', levels: [
        { grade: '2do Secundaria', cost: 160 },
        { grade: '3ro Secundaria', cost: 160 },
        { grade: '4to Secundaria', cost: 160 },
        { grade: '5to Secundaria', cost: 160 },
        { grade: '6to Secundaria', cost: 160 }
      ]},
      { id: '3', name: 'Física', levels: [
        { grade: '4to Secundaria', cost: 170 },
        { grade: '5to Secundaria', cost: 170 },
        { grade: '6to Secundaria', cost: 170 }
      ]},
      { id: '4', name: 'Informática', levels: [
        { grade: 'Guacamayo 5to a 6to Primaria', cost: 200 },
        { grade: 'Guanaco 1ro a 3ro Secundaria', cost: 200 },
        { grade: 'Londra 1ro a 3ro Secundaria', cost: 200 },
        { grade: 'Jucumari 4to a 6to Secundaria', cost: 200 },
        { grade: 'Bufeo 1ro a 3ro Secundaria', cost: 200 },
        { grade: 'Puma 4to a 6to Secundaria', cost: 200 }
      ]},
      { id: '5', name: 'Matemáticas', levels: [
        { grade: 'Primer Nivel 1ro Secundaria', cost: 180 },
        { grade: 'Segundo Nivel 2do Secundaria', cost: 180 },
        { grade: 'Tercer Nivel 3ro Secundaria', cost: 180 },
        { grade: 'Cuarto Nivel 4to Secundaria', cost: 180 },
        { grade: 'Quinto Nivel 5to Secundaria', cost: 180 },
        { grade: 'Sexto Nivel 6to Secundaria', cost: 180 }
      ]},
      { id: '6', name: 'Química', levels: [
        { grade: '2do Secundaria', cost: 190 },
        { grade: '3ro Secundaria', cost: 190 },
        { grade: '4to Secundaria', cost: 190 },
        { grade: '5to Secundaria', cost: 190 },
        { grade: '6to Secundaria', cost: 190 }
      ]},
      { id: '7', name: 'Robótica', levels: [
        { grade: 'Builders P 5to a 6to Primaria', cost: 210 },
        { grade: 'Builders S 1ro a 6to Secundaria', cost: 210 },
        { grade: 'Lego P 5to a 6to Primaria', cost: 210 },
        { grade: 'Lego S 1ro a 6to Secundaria', cost: 210 }
      ]},
    ];        
    setAvailableAreas(mockAreas);
    setAvailableGrades([]); // Inicialmente no hay grados disponibles.
  }, []);

  useEffect(() => {
    const newTotal = student.areas.reduce((sum, area) => sum + area.cost, 0);
    setTotalCost(newTotal);
  }, [student.areas]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowSuccess(true);
    setTimeout(() => navigate("/payment-slip"), 1500);
  };

  const handleAddArea = () => {
    if (student.areas.length >= 2) {
      setErrors([
        ...errors,
        { field: "areas", message: "No puede inscribirse en más de 2 áreas" },
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
    // Buscar el área seleccionada
    const areaSeleccionada = availableAreas.find(a => a.id === areaId);
    
    if (areaSeleccionada) {
      // Actualizamos el área y los niveles disponibles
      const newAreas = [...student.areas];
      newAreas[index] = { 
        ...newAreas[index], 
        id: areaId, 
        name: areaSeleccionada.name, 
        level: '',  // Resetear nivel cuando se cambia el área
        cost: 0     // Resetear costo
      };
  
      // Actualizamos el estado de las áreas
      setStudent({ ...student, areas: newAreas });
  
      // Actualizamos los grados disponibles para la nueva área
      setAvailableGrades(areaSeleccionada.levels);
    }
  };
  
  
  const handleGradeChange = (index, grade) => {
    const newAreas = [...student.areas];
    const selectedArea = newAreas[index];
    
    const areaData = availableAreas.find(a => a.id === selectedArea.id);
    const gradeData = areaData?.levels.find(l => l.grade === grade);
  
    newAreas[index] = {
      ...selectedArea,
      level: grade,
      cost: gradeData ? gradeData.cost : 0
    };
  
    setStudent({ ...student, areas: newAreas });
  };
  

  const handleRemoveArea = (index) => {
    const newAreas = student.areas.filter((_, i) => i !== index);
    setStudent({ ...student, areas: newAreas });
  
    // Restablecer grados disponibles si ya no hay áreas seleccionadas
    if (newAreas.length === 0) {
      setAvailableGrades([]); // Esto restablece los grados cuando no hay áreas seleccionadas.
    } else {
      // Si quedan áreas, se mantiene la lista de grados correspondiente a la última área
      const lastAreaId = newAreas[newAreas.length - 1].id;
      const lastArea = availableAreas.find((area) => area.id === lastAreaId);
      if (lastArea) {
        setAvailableGrades(lastArea.levels); // Muestra los grados de la última área seleccionada
      }
    }
  };

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
                    <option key={index} value={grade.grade}>
                      {grade.grade}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default RegistrationPage;