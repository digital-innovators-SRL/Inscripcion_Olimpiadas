<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Configuración del Sistema</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex min-h-screen bg-[#F2EEE3]">
  <!-- Sidebar -->
  <aside class="w-64 bg-[#C8B7A6] min-h-screen p-6 text-white">
    <h2 class="text-xl font-bold">Menú</h2>
    <ul class="mt-4 space-y-2">
      <li>
        <a href="#" id="configMenuToggle" class="block px-4 py-2 bg-white text-[#C8B7A6] rounded-md cursor-pointer">▶ Configuración</a>
        <!-- Submenú -->
        <ul id="configSubMenu" class="mt-2 pl-6 space-y-2 hidden">
          <li><a href="config" class="block px-4 py-2 bg-white text-[#C8B7A6] rounded-md">⏩ Crear Areas</a></li>
          <li><a href="showAreas" class="block px-4 py-2 bg-white text-[#C8B7A6] rounded-md">⏩ Áreas de Competencia</a></li>
        </ul>
      </li>
    </ul>
  </aside>
  
  <script>
    document.getElementById('configMenuToggle').addEventListener('click', () => {
      const subMenu = document.getElementById('configSubMenu');
      subMenu.classList.toggle('hidden'); // Alterna la clase 'hidden' para mostrar/ocultar el submenú
    });
  </script>

  <!-- Contenido Principal -->
  <main class="flex-grow p-8">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold">Configuración del Sistema</h1>
      <div class="flex items-center">
        <span class="mr-4">Admin User</span>
        <div class="w-10 h-10 bg-[#A9B2AC] rounded-full"></div>
      </div>
    </header>

    <!-- Áreas de Competencia -->
    <section class="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8">
      <h2 class="text-xl font-semibold mb-6">Áreas de Competencia</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium mb-1">Nombre del Área</label>
          <input type="text" id="areaName" class="w-full px-3 py-2 border rounded-md focus:ring-[#A9B2AC]" placeholder="Ej: Matemáticas">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Costo (Bs.)</label>
          <input type="number" id="areaCost" class="w-full px-3 py-2 border rounded-md focus:ring-[#A9B2AC]" placeholder="Ej: 350">
        </div>
        <div class="flex items-end">
          <button id="addArea" class="bg-[#C8B7A6] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
            ➕ Agregar Área
          </button>
        </div>
      </div>

      <!-- Lista de Áreas -->
      <div id="areasContainer" class="space-y-4"></div>
    </section>

    <!-- Configuración de Inscripción -->
    <section class="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6">
      <h2 class="text-xl font-semibold mb-6">Datos Mínimos para Inscripción</h2>
      <div class="space-y-4">
        <label class="flex items-center">
          <input type="checkbox" id="requireId" class="mr-2" checked> Cédula de Identidad
        </label>
        <label class="flex items-center">
          <input type="checkbox" id="requireBirth" class="mr-2" checked> Fecha de Nacimiento
        </label>
        <label class="flex items-center">
          <input type="checkbox" id="requireTutor" class="mr-2" checked> Tutor Responsable
        </label>
        <label class="flex items-center">
          <input type="checkbox" id="requireSchool" class="mr-2" checked> Información del Colegio
        </label>
      </div>
      <div class="mt-6 flex justify-end">
        <button id="saveConfig" class="bg-[#C8B7A6] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
          💾 Guardar Configuración
        </button>
      </div>
    </section>
  </main>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const areaNameInput = document.getElementById("areaName");
      const areaCostInput = document.getElementById("areaCost");
      const areasContainer = document.getElementById("areasContainer");
      const addAreaButton = document.getElementById("addArea");
      const saveConfigButton = document.getElementById("saveConfig");
  
      let areas = [];
  
      addAreaButton.addEventListener("click", () => {
        const name = areaNameInput.value.trim();
        const cost = parseFloat(areaCostInput.value.trim());
        if (name && !isNaN(cost)) {
          const id = Date.now().toString();
          areas.push({ name, cost, levels: [] });
          renderAreas();
          areaNameInput.value = "";
          areaCostInput.value = "";
        }
      });
  
      function renderAreas() {
        areasContainer.innerHTML = "";
        areas.forEach((area, index) => {
          const areaElement = document.createElement("div");
          areaElement.className = "border p-4 rounded-lg";
  
          areaElement.innerHTML = `
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="font-semibold">${area.name}</h3>
                <p class="text-sm text-gray-500">Costo: Bs. ${area.cost}</p>
              </div>
              <button onclick="removeArea('${index}')" class="text-red-500 hover:text-red-600">🗑️</button>
            </div>
            <div class="mb-2">
              <h4 class="text-sm font-medium mb-2">Niveles:</h4>
              <div class="flex flex-wrap gap-2">
                ${area.levels.map((level) => `<span class="bg-gray-100 px-2 py-1 rounded-md text-sm">${level}</span>`).join("")}
              </div>
            </div>
            <div class="flex gap-2 mt-2">
              <input type="text" class="levelInput flex-1 px-3 py-1 border rounded-md text-sm" placeholder="Agregar nivel">
              <button onclick="addLevelToArea('${index}')" class="bg-[#A9B2AC] text-white py-1 px-3 rounded-md text-sm">➕ Agregar</button>
            </div>
          `;
  
          areasContainer.appendChild(areaElement);
        });
      }
  
      window.removeArea = (index) => {
        areas.splice(index, 1);
        renderAreas();
      };
  
      window.addLevelToArea = (index) => {
        const input = document.querySelectorAll(".levelInput")[index];
        const area = areas[index];
        if (input.value.trim()) {
          area.levels.push(input.value.trim());
          input.value = "";
          renderAreas();
        }
      };
  
      saveConfigButton.addEventListener("click", () => {
        const config = {
          areas: areas.map(area => ({
            name: area.name,
            cost: area.cost,
            levels: area.levels.join(", "),  // Asegúrate de enviar los niveles como un string
          })),
          requiredFields: {
            cedula_identidad: document.getElementById("requireId").checked,
            fecha_nacimiento: document.getElementById("requireBirth").checked,
            tutor_responsable: document.getElementById("requireTutor").checked,
            informacion_colegio: document.getElementById("requireSchool").checked,
          },
        };
  
        fetch("/registrar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(config),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Configuración guardada correctamente");
          })
          .catch((error) => {
            alert("Error al guardar configuración");
            console.error(error);
          });
      });
    });
  </script>
  
</body>
</html>
