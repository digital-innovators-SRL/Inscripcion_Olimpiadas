import { useState, useEffect } from "react";
import { PlusIcon } from "lucide-react";
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
};

const ConfigurationPage = () => {
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newArea, setNewArea] = useState(initialArea);
  const [editingArea, setEditingArea] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getCategorias") // Reemplaza con tu endpoint real
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

  const validateArea = () => {
    const validationErrors = [];
    if (!newArea.name.trim()) validationErrors.push({ field: "name", message: "El nombre es requerido" });
    if (!newArea.cost || isNaN(newArea.cost)) validationErrors.push({ field: "cost", message: "El costo debe ser un número" });
    if (newArea.maxStudents && isNaN(newArea.maxStudents)) validationErrors.push({ field: "maxStudents", message: "Debe ser un número" });

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };
  /*const sendAreasToBackend = async () => {
  try {
    await axios.post("http://localhost:8000/api/crearCompetencia", { areas }); // Reemplaza con tu URL
    toast.success("Áreas enviadas al backend correctamente");
  } catch (error) {
    console.error("Error al enviar las áreas:", error);
    toast.error("Error al enviar las áreas");
  }
};*/
const sendAreasToBackend = async () => {
  try {
    const payload = {
      areas: areas.map((area) => ({
        name: area.name,
        cost: area.cost,
        category: isNaN(area.category) ? area.category : parseInt(area.category), // puede ser un ID o un string
        grade_level: area.gradeLevel,
        max_students: area.maxStudents,
      })),
    };

    await axios.post("http://localhost:8000/api/crearCompetencia", payload);
    toast.success("Áreas enviadas al backend correctamente");
  } catch (error) {
    console.error("Error al enviar las áreas:", error.response?.data || error.message);
    toast.error("Error al enviar las áreas");
  }
};


  const addOrUpdateArea = () => {
    if (!validateArea()) return;

    const newAreaData = {
      id: editingArea ? editingArea.id : Date.now().toString(),
      ...newArea,
      category: newArea.category === "Otro" ? newArea.customCategory : newArea.category,
      gradeLevel: newArea.gradeLevel === "Otro" ? newArea.customGrade : newArea.gradeLevel,
      cost: Number(newArea.cost),
      maxStudents: newArea.maxStudents ? Number(newArea.maxStudents) : undefined,
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

  return (
    <div className="p-4 space-y-6">
      <div className="flex min-h-screen bg-[#F2EEE3]">
        <Sidebar />
        <div className="ml-64 flex-grow p-8">
          {/* Formulario de Área */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nombre del Área"
              value={newArea.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={getErrorClass("name", errors)}
            />
            <input
              type="number"
              placeholder="Costo"
              value={newArea.cost}
              onChange={(e) => handleInputChange("cost", e.target.value)}
              className={getErrorClass("cost", errors)}
            />
            <input
              type="number"
              placeholder="Máx. Estudiantes (opcional)"
              value={newArea.maxStudents}
              onChange={(e) => handleInputChange("maxStudents", e.target.value)}
              className={getErrorClass("maxStudents", errors)}
            />

            <select
              value={newArea.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
            >
              <option value="">Seleccione una categoría</option>
                            <option value="Otro" style={{ fontWeight: 'bold' }} >OTRO</option>
              {categories.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}

            </select>
            {newArea.category === "Otro" && (
              <input
                type="text"
                placeholder="Escribe tu categoría"
                value={newArea.customCategory}
                onChange={(e) => handleInputChange("customCategory", e.target.value)}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
              />
            )}
            <select
              value={newArea.gradeLevel}
              onChange={(e) => handleInputChange("gradeLevel", e.target.value)}
              className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
            >
              <option value="Otro" style={{ fontWeight: 'bold' }}>OTRO</option>
              <option value="">Seleccione grado</option>
              {["1P", "2P", "3P", "4P", "5P", "6P", "1S", "2S", "3S", "4S", "5S", "6S", "1U", "2U", "3U", "4U", "5U", "6U"].map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
              
            </select>
            {newArea.gradeLevel === "Otro" && (
              <input
                type="text"
                placeholder="Escribe tu grado"
                value={newArea.customGrade}
                onChange={(e) => handleInputChange("customGrade", e.target.value)}
                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md"
              />
            )}
          </div>

          {/* Botón de Agregar / Editar */}
          <div>
            <button
              onClick={addOrUpdateArea}
              className="bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
            >
              <PlusIcon size={18} className="mr-2" />
              {editingArea ? "Guardar Cambios" : "Agregar Área"}
            </button>
          </div>

          {/* Lista de Áreas con opción de edición */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {areas.map((area) => (
              <div key={area.id} className="border p-4 rounded-md shadow-sm space-y-2">
                <h2 className="text-lg font-semibold">{area.name}</h2>
                <p className="text-sm text-gray-600">Costo: ${area.cost}</p>
                <p className="text-sm text-gray-600">Categoría: {area.category}</p>
                <p className="text-sm text-gray-600">Grado: {area.gradeLevel}</p>
                {area.maxStudents && <p className="text-sm text-gray-600">Máx. Estudiantes: {area.maxStudents}</p>}
                {area.description && <p className="text-sm text-gray-600">📌 {area.description}</p>}
                <button
                  onClick={() => {
                    setEditingArea(area);
                    setNewArea({ ...area });
                  }}
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
          <button
  onClick={sendAreasToBackend}
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
>
  Enviar Áreas al Backend
</button>

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

      // Registro en backend (ajustar categoria_id si lo manejas dinámico)
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

