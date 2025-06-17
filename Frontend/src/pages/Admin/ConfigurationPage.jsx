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

  useEffect(() => {
    fetch("http://dis.tis.cs.umss.edu.bo/api/getCategorias") // Reemplaza con tu endpoint real
      .then((response) => response.json())
      .then((data) => setCategoriesDB(data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

  useEffect(() => {
    // Cargar áreas, categorías y grados desde el backend
    axios.get("http://dis.tis.cs.umss.edu.bo/api/areas")
      .then(res => setAreasDB(res.data))
      .catch(() => setAreasDB([]));
    axios.get("http://dis.tis.cs.umss.edu.bo/api/categorias")
      .then(res => setCategoriesDB(res.data))
      .catch(() => setCategoriesDB([]));
    axios.get("http://dis.tis.cs.umss.edu.bo/api/grados")
      .then(res => setGradesDB(res.data))
      .catch(() => setGradesDB([]));
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
      await axios.post("http://dis.tis.cs.umss.edu.bo/api/crearCompetencia", payload);
      toast.success("Competencia creada correctamente");
    } catch (error) {
      console.error("Error al enviar las áreas:", error.response?.data || error.message);
      toast.error("Error al enviar las áreas");
    }
  };

  const addOrUpdateArea = () => {
    if (!validateArea()) return;
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
    setNewArea((prev) => ({ ...prev, [field]: value }));
  };

  const handleDeleteArea = async () => {
    if (!deleteAreaId) return;
    await axios.delete(`http://dis.tis.cs.umss.edu.bo/api/areas/${deleteAreaId}`);
    setAreasDB(areasDB.filter(a => a.id !== deleteAreaId));
    setDeleteAreaId("");
    toast.success("Área eliminada");
  };
  const handleDeleteCategory = async () => {
    if (!deleteCategoryId) return;
    await axios.delete(`http://dis.tis.cs.umss.edu.bo/api/categorias/${deleteCategoryId}`);
    setCategoriesDB(categoriesDB.filter(c => c.id !== deleteCategoryId));
    setDeleteCategoryId("");
    toast.success("Categoría eliminada");
  };
  const handleDeleteGrade = async () => {
    if (!deleteGradeId) return;
    await axios.delete(`http://dis.tis.cs.umss.edu.bo/api/grados/${deleteGradeId}`);
    setGradesDB(gradesDB.filter(g => g.id !== deleteGradeId));
    setDeleteGradeId("");
    toast.success("Grado eliminado");
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
                onChange={e => handleInputChange("name", e.target.value)}
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
                  placeholder="Nueva área"
                  value={newArea.customArea || ""}
                  onChange={e => handleInputChange("customArea", e.target.value)}
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
                placeholder="Costo"
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
                placeholder="Máx. Estudiantes (opcional)"
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
                onChange={e => handleInputChange("category", e.target.value)}
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
                  placeholder="Nueva categoría"
                  value={newArea.customCategory || ""}
                  onChange={e => handleInputChange("customCategory", e.target.value)}
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
                onChange={e => handleInputChange("gradeLevel", e.target.value)}
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
                  placeholder="Nuevo grado"
                  value={newArea.customGrade || ""}
                  onChange={e => handleInputChange("customGrade", e.target.value)}
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
        <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-[#E8DDD4] p-4 sm:p-8 mt-8">
          <h2 className="text-lg font-semibold mb-4 text-[#5A4A3A]">Eliminar registros existentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label>Área</label>
              <select onChange={e => setDeleteAreaId(e.target.value)} value={deleteAreaId || ""}>
                <option value="">Seleccione área</option>
                {areasDB.map(area => <option key={area.id} value={area.id}>{area.nombre}</option>)}
              </select>
              <button onClick={handleDeleteArea} className="ml-2 text-red-600">Eliminar</button>
            </div>
            <div>
              <label>Categoría</label>
              <select onChange={e => setDeleteCategoryId(e.target.value)} value={deleteCategoryId || ""}>
                <option value="">Seleccione categoría</option>
                {categoriesDB.map(cat => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
              </select>
              <button onClick={handleDeleteCategory} className="ml-2 text-red-600">Eliminar</button>
            </div>
            <div>
              <label>Grado</label>
              <select onChange={e => setDeleteGradeId(e.target.value)} value={deleteGradeId || ""}>
                <option value="">Seleccione grado</option>
                {gradesDB.map(gr => <option key={gr.id} value={gr.id}>{gr.grado}</option>)}
              </select>
              <button onClick={handleDeleteGrade} className="ml-2 text-red-600">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;

/*
const ConfigurationPage = () => {
  // ============================
  // CONTEXTO Y ESTADOS GLOBALES
  // ============================
  const { user } = useAuth();
  const [areas, setAreas] = useState([]);
  const [errors, setErrors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [editingArea, setEditingArea] = useState(null);

  // ============================
  // ESTADO PARA CREAR/EDITAR ÁREA
  // ============================
  const [newArea, setNewArea] = useState({
    name: "",
    cost: "",
    maxStudents: "",
    description: "",
    categories: [], // categorías nuevas añadidas por el usuario
  });

  // ============================
  // ESTADOS PARA GRADOS Y CATEGORÍAS
  // ============================
  const [categoryInput, setCategoryInput] = useState({ name: '', grades: '' });
  const [gradeInputs, setGradeInputs] = useState({});

  const GRADOS_DISPONIBLES = [
    "3ro de Primaria", "4to de Primaria", "5to de Primaria", "6to de Primaria",
    "1ro de Secundaria", "2do de Secundaria", "3ro de Secundaria",
    "4to de Secundaria", "5to de Secundaria", "6to de Secundaria"
  ];

  // ============================
  // CARGA INICIAL DE ÁREAS DEL BACKEND
  // ============================
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("admin/areas");
        setAreas(response.data);
      } catch (error) {
        console.error("Error cargando áreas:", error);
      }
    };
    fetchAreas();
  }, []);

  // ============================
  // VALIDACIÓN DE FORMULARIO DE ÁREA
  // ============================
  const validateArea = () => {
    const newErrors = [];

    if (!newArea.name.trim()) {
      newErrors.push({ field: "name", message: "El nombre es requerido" });
    }
    if (!newArea.cost || Number(newArea.cost) <= 0) {
      newErrors.push({ field: "cost", message: "El costo debe ser mayor a 0" });
    }
    if (newArea.maxStudents && Number(newArea.maxStudents) <= 0) {
      newErrors.push({ field: "maxStudents", message: "Cantidad inválida" });
    }
    if (
      areas.some(
        (area) =>
          area.name.toLowerCase() === newArea.name.toLowerCase() &&
          (!editingArea || area.id !== editingArea.id)
      )
    ) {
      newErrors.push({ field: "name", message: "Ya existe un área con ese nombre" });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // ============================
  // CREAR O ACTUALIZAR ÁREA EN BACKEND
  // ============================
  const addArea = async () => {
    if (!validateArea()) return;

    try {
      if (editingArea) {
        // ACTUALIZAR ÁREA
        const response = await axios.put(`/areas/${editingArea.id}`, {
          nombre: newArea.name,
          descripcion: newArea.description,
          costo: Number(newArea.cost),
          max_estudiantes: newArea.maxStudents || null,
        });

        const updatedArea = response.data.data || response.data;

        setAreas((prev) =>
          prev.map((area) =>
            area.id === editingArea.id
              ? {
                  ...area,
                  name: updatedArea.nombre,
                  cost: updatedArea.costo,
                  maxStudents: updatedArea.max_estudiantes,
                  description: updatedArea.descripcion,
                }
              : area
          )
        );

        setEditingArea(null);
      } else {
        // CREAR NUEVA ÁREA
        const response = await axios.post('/areas', {
          nombre: newArea.name,
          descripcion: newArea.description,
          costo: Number(newArea.cost),
          max_estudiantes: newArea.maxStudents || null,
          categorias: newArea.categories.map((cat) => ({
            id: cat.id,
            grados: cat.grades, // asegúrate que esto sea un array de strings/números
          })),
        });

        const nuevaArea = response.data.data || response.data;

        const areaFormateada = {
          id: nuevaArea.id,
          name: nuevaArea.nombre,
          cost: nuevaArea.costo,
          maxStudents: nuevaArea.max_estudiantes,
          description: nuevaArea.descripcion,
          grades: [],
          isActive: true,
        };

        setAreas((prev) => [...prev, areaFormateada]);
      }

      // LIMPIAR FORMULARIO
      setNewArea({
        name: "",
        cost: "",
        maxStudents: "",
        description: "",
        categories: [],
      });

      showSuccessMessage();
    } catch (error) {
      console.error("Error al guardar el área:", error.response.data);
      if (error.response?.data?.errors) {
        const erroresAPI = Object.entries(error.response.data.errors).map(
          ([campo, mensajes]) => ({
            field: campo,
            message: mensajes[0],
          })
        );
        setErrors(erroresAPI);
      }
    }
  };

  // ============================
  // EDITAR ÁREA SELECCIONADA
  // ============================
  const editArea = (area) => {
    setEditingArea(area);
    setNewArea({
      name: area.name,
      cost: area.cost,
      maxStudents: area.maxStudents || "",
      description: area.description || "",
      categories: [], // Se puede agregar lógica para precargar categorías si se requiere
    });
  };

  // ============================
  // AGREGAR GRADO A UN ÁREA
  // ============================
  const addGradeToArea = async (areaId) => {
    const grade = gradeInputs[areaId]?.trim();
    if (!grade) return;

    try {
      // Simulación en frontend
      setAreas((prev) =>
        prev.map((area) =>
          area.id === areaId
            ? {
                ...area,
                grades: [...new Set([...(area.grades || []), grade])],
              }
            : area
        )
      );

      setGradeInputs({ ...gradeInputs, [areaId]: "" });
      showSuccessMessage();

      // Registro en backend (ajustar categoria_id si lo manejos dinámico)
      await axios.post('/area-categorias', {
        area_id: areaId,
        categoria_id: 1,
        grado: grade,
      });
    } catch (error) {
      console.warn("No se pudo registrar el grado en backend:", error);
    }
  };

  // ============================
  // ELIMINAR GRADO DE UN ÁREA
  // ============================
  const removeGradeFromArea = (areaId, gradeToRemove) => {
    setAreas((prev) =>
      prev.map((area) =>
        area.id === areaId
          ? {
              ...area,
              grades: (area.grades || []).filter((g) => g !== gradeToRemove),
            }
          : area
      )
    );
  };

  // ============================
  // ELIMINAR ÁREA
  // ============================
  const removeArea = async (areaId) => {
    try {
      await axios.delete(`/areas/${areaId}`);
      setAreas((prev) => prev.filter((area) => area.id !== areaId));
      showSuccessMessage();
    } catch (error) {
      console.error("Error al eliminar el área:", error);
    }
  };

  // ============================
  // ACTIVAR / DESACTIVAR ÁREA
  // ============================
  const toggleAreaStatus = (areaId) => {
    setAreas((prev) =>
      prev.map((area) =>
        area.id === areaId
          ? { ...area, isActive: !area.isActive }
          : area
      )
    );
  };

  // ============================
  // MENSAJE DE ÉXITO
  // ============================
  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // ============================
  // AGREGAR CATEGORÍA A ÁREA NUEVA
  // ============================
  const addCategory = () => {
    if (!categoryInput.name.trim() || !categoryInput.grades.trim()) return;

    const grades = categoryInput.grades
      .split(",")
      .map((g) => g.trim())
      .filter((g) => g !== "");

    setNewArea((prev) => ({
      ...prev,
      categories: [...prev.categories, { name: categoryInput.name, grades }],
    }));

    setCategoryInput({ name: "", grades: "" });
  };

  // ============================
  // ELIMINAR CATEGORÍA DE ÁREA NUEVA
  // ============================
  const removeCategory = (index) => {
    const updated = [...newArea.categories];
    updated.splice(index, 1);
    setNewArea({ ...newArea, categories: updated });
  };

  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
     
    </div>
  );
};*/

