import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { PlusIcon, Trophy } from "lucide-react";
import toast from "react-hot-toast";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

const getErrorClass = (field, errors) =>
  `w-full px-3 py-2 border ${
    errors.some((e) => e.field === field) ? "border-red-300" : "border-[#D9D9D9]"
  } rounded-md focus:outline-none focus:ring-1 focus:ring-[#A9B2AC]`;

const initialArea = {
  name: "",
  cost: "",
  category: "",
  customCategory: "",
  gradeLevel: "",
  customGrade: "",
  maxStudents: "",
  description: "",
  competitionDate: "",
  endRegistration: "",
  customArea: ""
};

const ConfigurationPage = () => {
  // Estados para el sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Estados existentes
  const [areas, setAreas] = useState([]);
  const [newArea, setNewArea] = useState(initialArea);
  const [editingArea, setEditingArea] = useState(null);
  const [errors, setErrors] = useState([]);
  const [areasDB, setAreasDB] = useState([]);
  const [categoriesDB, setCategoriesDB] = useState([]);
  const [gradesDB, setGradesDB] = useState([]);
  const [deleteAreaId, setDeleteAreaId] = useState("");
  const [deleteCategoryId, setDeleteCategoryId] = useState("");
  const [deleteGradeId, setDeleteGradeId] = useState("");
  // Estado para competencias
  const [competencias, setCompetencias] = useState([]);
  // Estado para modal de edición de competencia
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCompetencia, setEditCompetencia] = useState(null);
  // Estado para loading y confirmación de borrado
  const [loadingCompetencias, setLoadingCompetencias] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [competenciaToDelete, setCompetenciaToDelete] = useState(null);
  // Estado para modal de advertencia de borrado de área, categoría o grado
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningType, setWarningType] = useState("");

  // Cargar registros de áreas, categorías y grados de forma dinámica (como competencias)
  useEffect(() => {
    (async () => {
      await fetchAreasCategoriasGrados();
    })();
  }, []);

  // Función para recargar competencias desde el backend
  const fetchCompetencias = async () => {
    setLoadingCompetencias(true);
    try {
      const res = await axios.get('http://localhost:8000/api/competencias');
      setCompetencias(res.data);
    } catch {
      setCompetencias([]);
    } finally {
      setLoadingCompetencias(false);
    }
  };

  // Función para recargar áreas, categorías y grados dinámicamente
  const fetchAreasCategoriasGrados = async () => {
    try {
      const [areasRes, categoriasRes, gradosRes] = await Promise.all([
        axios.get("http://localhost:8000/api/areas"),
        axios.get("http://localhost:8000/api/categorias"),
        axios.get("http://localhost:8000/api/grados")
      ]);
      setAreasDB(areasRes.data);
      setCategoriesDB(categoriasRes.data);
      setGradesDB(gradosRes.data);
    } catch {
      setAreasDB([]);
      setCategoriesDB([]);
      setGradesDB([]);
    }
  };

  useEffect(() => {
    fetchAreasCategoriasGrados();
    fetchCompetencias();
  }, []);

  const validateArea = () => {
    const validationErrors = [];
    // Validar área
    if (!newArea.name || (newArea.name === "Otro" && !newArea.customArea)) validationErrors.push({ field: "name", message: "El área es requerida" });
    if (!newArea.cost || isNaN(newArea.cost)) validationErrors.push({ field: "cost", message: "El costo debe ser un número" });
    if (newArea.maxStudents && isNaN(newArea.maxStudents)) validationErrors.push({ field: "maxStudents", message: "Debe ser un número" });
    // Validar categoría
    if (!newArea.category || (newArea.category === "Otro" && !newArea.customCategory)) validationErrors.push({ field: "category", message: "La categoría es requerida" });
    // Validar grado
    if (!newArea.gradeLevel || (newArea.gradeLevel === "Otro" && !newArea.customGrade)) validationErrors.push({ field: "gradeLevel", message: "El grado es requerido" });
    // Validar fechas
    const today = new Date();
    const compDate = newArea.competitionDate ? new Date(newArea.competitionDate) : null;
    const endReg = newArea.endRegistration ? new Date(newArea.endRegistration) : null;
    if (!compDate || isNaN(compDate.getTime()) || compDate < today) validationErrors.push({ field: "competitionDate", message: "La fecha de competencia debe ser válida y posterior a hoy" });
    if (!endReg || isNaN(endReg.getTime()) || endReg < today) validationErrors.push({ field: "endRegistration", message: "La fecha de fin de inscripción debe ser válida y posterior a hoy" });
    if (compDate && endReg && endReg > compDate) validationErrors.push({ field: "endRegistration", message: "La fecha de fin de inscripción no puede ser después de la competencia" });
    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const sendAreasToBackend = async () => {
    try {
      const payload = {
        areas: areas.map((area) => ({
          name: area.name,
          cost: area.cost,
          category: area.category,
          grade_level: area.gradeLevel,
          max_students: area.maxStudents,
          competition_date: area.competition_date,
          end_registration: area.end_registration
        })),
      };
      await axios.post("http://localhost:8000/api/crearCompetencia", payload);
      toast.success("Competencia creada correctamente");
      setAreas([]); // Limpiar todas las áreas agregadas después de enviar
      fetchCompetencias(); // Recargar competencias existentes
    } catch (error) {
      console.error("Error al enviar las áreas:", error.response?.data || error.message);
      toast.error("Error al enviar las áreas");
    }
  };

  const addOrUpdateArea = () => {
    if (!validateArea()) {
      if (errors.length > 0) {
        errors.forEach(err => {
          toast.custom((t) => (
            <div
              style={{ minWidth: '300px' }}
              className={`bg-white border border-red-300 text-[#8B7355] px-4 py-3 rounded shadow-lg flex items-center justify-between gap-3 ${t.visible ? 'animate-enter' : 'animate-leave'}`}
            >
              <span className="flex items-center gap-2"><span className="text-xl">⚠️</span> {err.message}</span>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="ml-2 text-lg text-red-500 hover:text-red-700 font-bold px-2 focus:outline-none"
                aria-label="Cerrar"
              >×</button>
            </div>
          ), {
            id: err.field,
            duration: 8000,
            position: 'top-right',
          });
        });
      } else {
        toast.custom((t) => (
          <div
            style={{ minWidth: '300px' }}
            className={`bg-white border border-red-300 text-[#8B7355] px-4 py-3 rounded shadow-lg flex items-center justify-between gap-3 ${t.visible ? 'animate-enter' : 'animate-leave'}`}
          >
            <span className="flex items-center gap-2"><span className="text-xl">⚠️</span> Por favor corrige los errores de validación antes de continuar.</span>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="ml-2 text-lg text-red-500 hover:text-red-700 font-bold px-2 focus:outline-none"
              aria-label="Cerrar"
            >×</button>
          </div>
        ), {
          duration: 8000,
          position: 'top-right',
        });
      }
      return;
    }
    const newAreaData = {
      id: editingArea ? editingArea.id : Date.now().toString(),
      name: newArea.name === "Otro" ? newArea.customArea : newArea.name,
      cost: Number(newArea.cost),
      category: newArea.category === "Otro" ? newArea.customCategory : newArea.category,
      gradeLevel: newArea.gradeLevel === "Otro" ? newArea.customGrade : newArea.gradeLevel,
      maxStudents: newArea.maxStudents ? Number(newArea.maxStudents) : undefined,
      description: newArea.description,
      competition_date: newArea.competitionDate,
      end_registration: newArea.endRegistration
    };
    if (editingArea) {
      setAreas((prev) => prev.map((area) => (area.id === editingArea.id ? newAreaData : area)));
      setEditingArea(null);
    } else {
      setAreas([...areas, newAreaData]);
    }
    setNewArea(initialArea);
    setErrors([]);
    toast.success(editingArea ? "Área editada correctamente" : "Área agregada correctamente");
  };

  const handleInputChange = (field, value) => {
    // Si el campo es cost o maxStudents, solo permite números positivos estrictamente
    if (field === "cost" || field === "maxStudents") {
      let val = value;
      // Si contiene cualquier guion, o no es un número positivo, poner 1
      if (/[^0-9]/.test(val) || val === "" || isNaN(Number(val)) || Number(val) <= 0) {
        val = "1";
      }
      setNewArea((prev) => ({ ...prev, [field]: val }));
      return;
    }
    // Permitir números en los campos customArea, customCategory, customGrade
    if (["customArea", "customCategory", "customGrade"].includes(field)) {
      setNewArea((prev) => ({ ...prev, [field]: value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, "") }));
      return;
    }
    setNewArea((prev) => ({ ...prev, [field]: value }));
  };

  const handleDeleteArea = async () => {
    if (!deleteAreaId) return;
    await axios.delete(`http://localhost:8000/api/areasDelete/${deleteAreaId}`);
    await fetchAreasCategoriasGrados(); // Recargar selects dinámicamente
    setDeleteAreaId("");
    toast.success("Área eliminada");
  };
  const handleDeleteCategory = async () => {
    if (!deleteCategoryId) return;
    await axios.delete(`http://localhost:8000/api/categoriasDelete/${deleteCategoryId}`);
    await fetchAreasCategoriasGrados(); // Recargar selects dinámicamente
    setDeleteCategoryId("");
    toast.success("Categoría eliminada");
  };
  const handleDeleteGrade = async () => {
    if (!deleteGradeId) return;
    await axios.delete(`http://localhost:8000/api/gradosDelete/${deleteGradeId}`);
    await fetchAreasCategoriasGrados(); // Recargar selects dinámicamente
    setDeleteGradeId("");
    toast.success("Grado eliminado");
  };
  // Función para eliminar competencia
  const handleDeleteCompetencia = async () => {
    if (!competenciaToDelete) return;
    try {
      await axios.delete(`http://localhost:8000/api/competencias/${competenciaToDelete.id}`);
      setCompetencias(prev => prev.filter(c => c.id !== competenciaToDelete.id));
      toast.success('Competencia eliminada');
    } catch {
      toast.error('Error al eliminar competencia');
    }
    setShowDeleteModal(false);
    setCompetenciaToDelete(null);
  };

  // Función para abrir el modal y cargar datos
  const handleEditCompetencia = (competencia) => {
    setEditCompetencia({ ...competencia });
    setShowEditModal(true);
  };

  // Función para manejar cambios en el modal
  const handleEditCompetenciaChange = (field, value) => {
    // Solo permitir números positivos en max_competidores y monto
    if (field === 'max_competidores' || field === 'monto') {
      value = value.replace(/[^0-9]/g, '');
      if (value === '' || Number(value) <= 0) value = '1';
    }
    setEditCompetencia(prev => ({ ...prev, [field]: value }));
  };

  // Función para guardar cambios
  const handleSaveEditCompetencia = async () => {
    try {
      await axios.put(`http://localhost:8000/api/competencias/${editCompetencia.id}`,
        {
          nombre: editCompetencia.nombre,
          fecha_competencia: editCompetencia.fecha_competencia,
          fecha_fin_inscripcion: editCompetencia.fecha_fin_inscripcion,
          max_competidores: Number(editCompetencia.max_competidores),
          monto: Number(editCompetencia.monto)
        }
      );
      setCompetencias(prev => prev.map(c => c.id === editCompetencia.id ? { ...c, ...editCompetencia } : c));
      setShowEditModal(false);
      toast.success('Competencia actualizada');
    } catch {
      toast.error('Error al actualizar competencia');
    }
  };

  // Asegura que confirmDeleteCompetencia esté definida antes de usarse
  const confirmDeleteCompetencia = (competencia) => {
    setCompetenciaToDelete(competencia);
    setShowDeleteModal(true);
  };

  // Funciones para mostrar el modal antes de borrar área, categoría o grado
  const handleDeleteAreaWarning = () => {
    if (!deleteAreaId) return;
    setWarningType("área");
    setShowWarningModal(true);
  };
  const handleDeleteCategoryWarning = () => {
    if (!deleteCategoryId) return;
    setWarningType("categoría");
    setShowWarningModal(true);
  };
  const handleDeleteGradeWarning = () => {
    if (!deleteGradeId) return;
    setWarningType("grado");
    setShowWarningModal(true);
  };

  // Función para confirmar borrado
  const handleConfirmDelete = () => {
    setShowWarningModal(false);
    if (warningType === "área") handleDeleteArea();
    if (warningType === "categoría") handleDeleteCategory();
    if (warningType === "grado") handleDeleteGrade();
  };

  // Función utilitaria para obtener datos anidados de forma robusta
  const getCompetenciaField = (c, field) => {
    // Soporta areaCategoria, area_categoria, y variantes
    const ac = c.areaCategoria || c.area_categoria || {};
    if (field === 'area') {
      return ac.area?.nombre || ac.area_nombre || ac.area || '-';
    }
    if (field === 'categoria') {
      return ac.categoria?.nombre || ac.categoria_nombre || ac.categoria || '-';
    }
    if (field === 'grado') {
      return ac.grado || ac.grado_nombre || '-';
    }
    return '-';
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F2EEE3] to-[#E8DDD4]">
      {/* Sidebar condicional */}
      {!isLoginPage && (
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}
      
      {/* Contenido principal con margen dinámico */}
      <div 
        className={`flex-grow p-4 sm:p-8 transition-all duration-300 ${
          !isLoginPage ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''
        }`}
      >
        {/* Header con información del usuario */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl sm:rounded-2xl shadow-lg">
                <Trophy size={20} className="sm:hidden text-white" />
                <Trophy size={28} className="hidden sm:block text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#5A4A3A] to-[#8B7355] bg-clip-text text-transparent">
                  Crear Competencia
                </h1>
                <p className="text-sm sm:text-base text-[#8B7355] mt-1">
                  Gestiona las áreas de competencia y configuración
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-[#5A4A3A]">Administrador General</p>
                <p className="text-xs text-[#8B7355]">Administrador</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Área */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md">
                <Trophy size={16} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#5A4A3A]">
                  Información del Área
                </h2>
                <p className="text-sm text-[#8B7355]">
                  Actualiza los datos del área de competencia
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {/* Selección de área existente o nueva */}
            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                Área
              </label>
              <select
                value={newArea.name}
                onChange={e => {
                  // Permitir letras, números y espacios
                  const value = e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, "");
                  handleInputChange("name", value);
                }}
                className={getErrorClass("name", errors)}
              >
                <option value="">Seleccione un área</option>
                {areasDB.map(area => (
                  <option key={area.id} value={area.nombre}>{area.nombre}</option>
                ))}
                <option value="Otro">OTRO</option>
              </select>
              {newArea.name === "Otro" && (
                <input
                  type="text"
                  placeholder="Nueva área (letras, números y espacios)"
                  value={newArea.customArea || ""}
                  onChange={e => handleInputChange("customArea", e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, ""))}
                  className="mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                Costo
              </label>
              <input
                type="number"
                placeholder="Costo (1-200)"
                min="1"
                max="200"
                value={newArea.cost}
                onChange={(e) => handleInputChange("cost", e.target.value)}
                className={`${getErrorClass("cost", errors)} w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#E8DDD4] rounded-lg sm:rounded-xl bg-[#FAF7F2] focus:border-[#C8B7A6] hover:border-[#B8A494] transition-all duration-300 text-[#5A4A3A] placeholder-[#8B7355] text-sm sm:text-base`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                Máx. Estudiantes (opcional)
              </label>
              <input
                type="number"
                placeholder="Máx. Estudiantes (1-200)"
                min="1"
                max="200"
                value={newArea.maxStudents}
                onChange={(e) => handleInputChange("maxStudents", e.target.value)}
                className={`${getErrorClass("maxStudents", errors)} w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#E8DDD4] rounded-lg sm:rounded-xl bg-[#FAF7F2] focus:border-[#C8B7A6] hover:border-[#B8A494] transition-all duration-300 text-[#5A4A3A] placeholder-[#8B7355] text-sm sm:text-base`}
              />
            </div>

            {/* Selección de categoría existente o nueva */}
            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                Categoría
              </label>
              <select
                value={newArea.category}
                onChange={e => handleInputChange("category", e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, ""))}
                className={getErrorClass("category", errors)}
              >
                <option value="">Seleccione una categoría</option>
                {categoriesDB.map(cat => (
                  <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
                ))}
                <option value="Otro">OTRO</option>
              </select>
              {newArea.category === "Otro" && (
                <input
                  type="text"
                  placeholder="Nueva categoría (letras, números y espacios)"
                  value={newArea.customCategory || ""}
                  onChange={e => handleInputChange("customCategory", e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, ""))}
                  className="mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                Nivel de Grado
              </label>
              <select
                value={newArea.gradeLevel}
                onChange={e => handleInputChange("gradeLevel", e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, ""))}
                className={getErrorClass("gradeLevel", errors)}
              >
                <option value="">Seleccione un grado</option>
                {gradesDB.map(gr => (
                  <option key={gr.id} value={gr.grado}>{gr.grado}</option>
                ))}
                <option value="Otro">OTRO</option>
              </select>
              {newArea.gradeLevel === "Otro" && (
                <input
                  type="text"
                  placeholder="Nuevo grado (letras, números y espacios)"
                  value={newArea.customGrade || ""}
                  onChange={e => handleInputChange("customGrade", e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, ""))}
                  className="mt-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">Fecha de Competencia</label>
              <input
                type="date"
                value={newArea.competitionDate}
                onChange={e => handleInputChange("competitionDate", e.target.value)}
                className={getErrorClass("competitionDate", errors)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5A4A3A] mb-2">Fin de Inscripción</label>
              <input
                type="date"
                value={newArea.endRegistration}
                onChange={e => handleInputChange("endRegistration", e.target.value)}
                className={getErrorClass("endRegistration", errors)}
              />
            </div>
          </div>

          {/* Botón de Agregar / Editar */}
          <div className="mt-6">
            <button
              onClick={addOrUpdateArea}
              className="bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white py-3 px-6 rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center shadow-lg font-medium"
            >
              <PlusIcon size={18} className="mr-2" />
              {editingArea ? "Guardar Cambios" : "Agregar Área"}
            </button>
          </div>
        </div>

        {/* Lista de Áreas con opción de edición */}
        {areas.length > 0 && (
          <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mb-6 sm:mb-8">
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md">
                  <Trophy size={16} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#5A4A3A]">
                    Áreas Configuradas
                  </h2>
                  <p className="text-sm text-[#8B7355]">
                    Gestiona las áreas de competencia creadas
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area) => (
                <div key={area.id} className="bg-white/90 backdrop-blur-md border-2 border-[#E8DDD4] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 space-y-2">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[#5A4A3A]">{area.name}</h3>
                    <button
                      onClick={() => {
                        setEditingArea(area);
                        setNewArea({ ...area });
                      }}
                      className="text-[#C8B7A6] hover:text-[#5A4A3A] hover:bg-[#FAF7F2] text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300"
                    >
                      Editar
                    </button>
                  </div>
                  
                  <p className="text-sm text-[#8B7355]">Costo: <span className="font-medium text-[#5A4A3A]">${area.cost}</span></p>
                  <p className="text-sm text-[#8B7355]">Categoría: <span className="font-medium text-[#5A4A3A]">{area.category}</span></p>
                  <p className="text-sm text-[#8B7355]">Grado: <span className="font-medium text-[#5A4A3A]">{area.gradeLevel}</span></p>
                  {area.maxStudents && <p className="text-sm text-[#8B7355]">Máx. Estudiantes: <span className="font-medium text-[#5A4A3A]">{area.maxStudents}</span></p>}
                  {area.description && <p className="text-sm text-[#8B7355]">📌 {area.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Acciones Rápidas */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8">
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] rounded-xl shadow-md">
                <span className="text-white text-sm">⚡</span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#5A4A3A]">
                  Acciones Rápidas
                </h2>
                <p className="text-sm text-[#8B7355]">
                  Opciones adicionales de gestión
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={sendAreasToBackend}
            className="bg-gradient-to-r from-[#C8B7A6] to-[#B8A494] text-white py-3 px-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg font-medium"
          >
            Enviar Áreas al Backend
          </button>
        </div>

        {/* --- Gestión de eliminación --- */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#E8DDD4] p-4 sm:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-[#5A4A3A] flex items-center gap-2">
            <svg className="w-6 h-6 text-[#C8B7A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Editar o eliminar registros existentes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Área */}
            <div className="flex flex-col bg-gradient-to-br from-[#F2EEE3] to-[#FAF7F2] rounded-xl shadow p-4 border border-[#E8DDD4] hover:shadow-lg transition-all duration-300">
              <label className="text-[#5A4A3A] font-semibold mb-2 flex items-center gap-1">
                <svg className="w-4 h-4 text-[#C8B7A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Área
              </label>
              <select onChange={e => setDeleteAreaId(e.target.value)} value={deleteAreaId || ""} className="rounded-lg border border-[#D9D9D9] px-3 py-2 focus:ring-2 focus:ring-[#C8B7A6] focus:outline-none bg-white mb-2">
                <option value="">Seleccione área</option>
                {areasDB.map(area => <option key={area.id} value={area.id}>{area.nombre}</option>)}
              </select>
              <button onClick={handleDeleteAreaWarning} className="mt-2 flex items-center justify-center gap-1 bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:from-red-500 hover:to-red-700 transition-all duration-200 disabled:opacity-50" disabled={!deleteAreaId}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Eliminar
              </button>
            </div>
            {/* Categoría */}
            <div className="flex flex-col bg-gradient-to-br from-[#F2EEE3] to-[#FAF7F2] rounded-xl shadow p-4 border border-[#E8DDD4] hover:shadow-lg transition-all duration-300">
              <label className="text-[#5A4A3A] font-semibold mb-2 flex items-center gap-1">
                <svg className="w-4 h-4 text-[#C8B7A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Categoría
              </label>
              <select onChange={e => setDeleteCategoryId(e.target.value)} value={deleteCategoryId || ""} className="rounded-lg border border-[#D9D9D9] px-3 py-2 focus:ring-2 focus:ring-[#C8B7A6] focus:outline-none bg-white mb-2">
                <option value="">Seleccione categoría</option>
                {categoriesDB.map(cat => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
              </select>
              <button onClick={handleDeleteCategoryWarning} className="mt-2 flex items-center justify-center gap-1 bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:from-red-500 hover:to-red-700 transition-all duration-200 disabled:opacity-50" disabled={!deleteCategoryId}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Eliminar
              </button>
            </div>
            {/* Grado */}
            <div className="flex flex-col bg-gradient-to-br from-[#F2EEE3] to-[#FAF7F2] rounded-xl shadow p-4 border border-[#E8DDD4] hover:shadow-lg transition-all duration-300">
              <label className="text-[#5A4A3A] font-semibold mb-2 flex items-center gap-1">
                <svg className="w-4 h-4 text-[#C8B7A6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Grado
              </label>
              <select onChange={e => setDeleteGradeId(e.target.value)} value={deleteGradeId || ""} className="rounded-lg border border-[#D9D9D9] px-3 py-2 focus:ring-2 focus:ring-[#C8B7A6] focus:outline-none bg-white mb-2">
                <option value="">Seleccione grado</option>
                {gradesDB.map(gr => <option key={gr.id} value={gr.id}>{gr.grado}</option>)}
              </select>
              <button onClick={handleDeleteGradeWarning} className="mt-2 flex items-center justify-center gap-1 bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:from-red-500 hover:to-red-700 transition-all duration-200 disabled:opacity-50" disabled={!deleteGradeId}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Eliminar
              </button>
            </div>
          </div>
        </div>

        {/* Mostrar todas las competencias debajo de eliminar */}
        {/* Mostrar loading mientras se cargan competencias */}
        {loadingCompetencias ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8B7355] border-opacity-30 mb-4"></div>
            <span className="text-[#8B7355] text-lg font-semibold">Cargando competencias...</span>
          </div>
        ) : (
          <div className="mt-12">
            <div className="mb-10 flex flex-col items-center justify-center">
              <div className="relative w-full flex items-center justify-center">
                <span className="absolute left-0 w-1/5 h-1 bg-gradient-to-r from-[#C8B7A6] to-transparent rounded-full blur-sm opacity-60"></span>
                <span className="absolute right-0 w-1/5 h-1 bg-gradient-to-l from-[#C8B7A6] to-transparent rounded-full blur-sm opacity-60"></span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#5A4A3A] bg-gradient-to-r from-[#C8B7A6] via-[#B8A494] to-[#8B7355] bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg animate-fade-in">
                  <Trophy size={40} className="text-[#C8B7A6] drop-shadow-xl animate-bounce-slow" />
                  Competencias existentes
                </h2>
              </div>
              <p className="mt-3 text-lg sm:text-xl text-[#8B7355] font-medium text-center max-w-2xl animate-fade-in delay-100">Visualiza, edita o elimina competencias. Haz clic en los íconos para gestionar cada registro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competencias.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                  <Trophy size={48} className="text-[#C8B7A6] mb-4 animate-bounce" />
                  <span className="text-[#8B7355] text-xl font-semibold">No hay competencias registradas aún.</span>
                </div>
              ) : (
                competencias.map((c) => (
                  <div key={c.id} className="relative bg-white/95 rounded-3xl shadow-2xl border-2 border-[#E8DDD4] p-8 flex flex-col justify-between hover:scale-[1.04] hover:shadow-3xl transition-all duration-300 group overflow-hidden">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button onClick={() => handleEditCompetencia(c)} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition-all" title="Editar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3z" /></svg>
                      </button>
                      <button onClick={() => confirmDeleteCompetencia(c)} className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition-all" title="Eliminar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <Trophy size={28} className="text-[#C8B7A6] drop-shadow" />
                      <span className="font-extrabold text-2xl text-[#5A4A3A] truncate" title={c.nombre}>{c.nombre}</span>
                      <span className="text-xs bg-[#F2EEE3] px-2 py-1 rounded text-[#8B7355] font-bold">ID: {c.id}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1 text-base text-[#8B7355] mb-2">
                      <span className="bg-[#F2EEE3] px-3 py-1 rounded font-semibold">Área: {getCompetenciaField(c, 'area')}</span>
                      <span className="bg-[#F2EEE3] px-3 py-1 rounded font-semibold">Categoría: {getCompetenciaField(c, 'categoria')}</span>
                      <span className="bg-[#F2EEE3] px-3 py-1 rounded font-semibold">Grado: {getCompetenciaField(c, 'grado')}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-[#8B7355] mb-2">
                      <span>Fecha: <span className="font-semibold text-[#5A4A3A]">{c.fecha_competencia}</span></span>
                      <span>Fin inscripción: <span className="font-semibold text-[#5A4A3A]">{c.fecha_fin_inscripcion}</span></span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-[#8B7355] mb-2">
                      <span>Máx. Estudiantes: <span className="font-semibold text-[#5A4A3A]">{c.max_competidores}</span></span>
                      <span>Costo: <span className="font-semibold text-[#5A4A3A]">{c.monto}</span></span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-[#8B7355] mb-2">
                      <span>Admin ID: {c.tutor_id}</span>
                      <span>Creado: {c.created_at}</span>
                      <span>Actualizado: {c.updated_at}</span>
                    </div>
                    {c.inscripciones && c.inscripciones.length > 0 && (
                      <div className="mt-2 text-xs text-[#5A4A3A] bg-[#F2EEE3] rounded-lg p-2">
                        <span className="font-semibold">Inscripciones:</span>
                        <ul className="list-disc ml-6">
                          {c.inscripciones.map(insc => (
                            <li key={insc.id}>Estudiante ID: {insc.estudiante_id} | Tutor ID: {insc.tutor_id}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Modal de edición de competencia con todos los campos relacionados */}
        {showEditModal && editCompetencia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative">
              <button onClick={() => setShowEditModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">&times;</button>
              <h2 className="text-xl font-bold mb-4 text-[#5A4A3A]">Editar Competencia</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Nombre</label>
                  <input type="text" value={editCompetencia.nombre} onChange={e => setEditCompetencia(prev => ({ ...prev, nombre: e.target.value }))} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Área</label>
                  <select value={editCompetencia.areaCategoria?.area?.nombre || ''} onChange={e => setEditCompetencia(prev => ({ ...prev, areaCategoria: { ...prev.areaCategoria, area: { ...prev.areaCategoria?.area, nombre: e.target.value } } }))} className="w-full px-3 py-2 border rounded">
                    <option value="">Seleccione un área</option>
                    {areasDB.map(area => (
                      <option key={area.id} value={area.nombre}>{area.nombre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Categoría</label>
                  <select value={editCompetencia.areaCategoria?.categoria?.nombre || ''} onChange={e => setEditCompetencia(prev => ({ ...prev, areaCategoria: { ...prev.areaCategoria, categoria: { ...prev.areaCategoria?.categoria, nombre: e.target.value } } }))} className="w-full px-3 py-2 border rounded">
                    <option value="">Seleccione una categoría</option>
                    {categoriesDB.map(cat => (
                      <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Grado</label>
                  <select value={editCompetencia.areaCategoria?.grado || ''} onChange={e => setEditCompetencia(prev => ({ ...prev, areaCategoria: { ...prev.areaCategoria, grado: e.target.value } }))} className="w-full px-3 py-2 border rounded">
                    <option value="">Seleccione un grado</option>
                    {gradesDB.map(gr => (
                      <option key={gr.id} value={gr.grado}>{gr.grado}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Fecha competencia</label>
                  <input type="date" value={editCompetencia.fecha_competencia} onChange={e => setEditCompetencia(prev => ({ ...prev, fecha_competencia: e.target.value }))} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Fin inscripción</label>
                  <input type="date" value={editCompetencia.fecha_fin_inscripcion} onChange={e => setEditCompetencia(prev => ({ ...prev, fecha_fin_inscripcion: e.target.value }))} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Máx. Estudiantes</label>
                  <input type="number" min="1" value={editCompetencia.max_competidores} onChange={e => setEditCompetencia(prev => ({ ...prev, max_competidores: e.target.value.replace(/[^0-9]/g, '') || '1' }))} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A4A3A] mb-1">Costo</label>
                  <input type="number" min="1" value={editCompetencia.monto} onChange={e => setEditCompetencia(prev => ({ ...prev, monto: e.target.value.replace(/[^0-9]/g, '') || '1' }))} className="w-full px-3 py-2 border rounded" />
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-2">
                <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">Cancelar</button>
                <button onClick={async () => {
                  try {
                    await axios.put(`http://localhost:8000/api/competenciasUpdate/${editCompetencia.id}`,
                      {
                        nombre: editCompetencia.nombre,
                        fecha_competencia: editCompetencia.fecha_competencia,
                        fecha_fin_inscripcion: editCompetencia.fecha_fin_inscripcion,
                        max_competidores: Number(editCompetencia.max_competidores),
                        monto: Number(editCompetencia.monto),
                        area: editCompetencia.areaCategoria?.area?.nombre,
                        categoria: editCompetencia.areaCategoria?.categoria?.nombre,
                        grado: editCompetencia.areaCategoria?.grado
                      }
                    );
                    setCompetencias(prev => prev.map(c => c.id === editCompetencia.id ? { ...c, ...editCompetencia } : c));
                    setShowEditModal(false);
                    toast.success('Competencia actualizada');
                  } catch {
                    toast.error('Error al actualizar competencia');
                  }
                }} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Guardar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de confirmación de borrado */}
        {showDeleteModal && competenciaToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
              <button onClick={() => setShowDeleteModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">&times;</button>
              <h2 className="text-xl font-bold mb-4 text-red-700">¿Eliminar competencia?</h2>
              <p className="mb-4 text-[#5A4A3A]">Se eliminará la competencia <span className="font-semibold">{competenciaToDelete.nombre}</span> y todos los registros asociados. ¿Deseas continuar?</p>
              <div className="flex justify-end space-x-2">
                <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">Cancelar</button>
                <button onClick={handleDeleteCompetencia} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">Eliminar</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de advertencia de borrado de área, categoría o grado */}
        {showWarningModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
              <button onClick={() => setShowWarningModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">&times;</button>
              <h2 className="text-xl font-bold mb-4 text-red-700">Advertencia</h2>
              <p className="mb-4 text-[#5A4A3A]">Si eliminas esta {warningType}, es posible que también se eliminen competencias asociadas. ¿Deseas continuar?</p>
              <div className="flex justify-end space-x-2">
                <button onClick={() => setShowWarningModal(false)} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">Cancelar</button>
                <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">Aceptar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigurationPage;

