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

    <!-- Tabla de Áreas -->
    <section class="bg-white rounded-lg shadow-sm border border-[#D9D9D9] p-6 mb-8">
      <h2 class="text-xl font-semibold mb-6">Áreas de Competencia</h2>

      <!-- Tabla para mostrar las áreas -->
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-[#C8B7A6] text-white">
              <th class="px-4 py-2 text-left">Nombre del Área</th>
              <th class="px-4 py-2 text-left">Costo (Bs.)</th>
              <th class="px-4 py-2 text-left">Nivel</th>
              <th class="px-4 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody id="areasTableBody">
            <!-- Aquí se llenarán las filas con los datos -->
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const areasTableBody = document.getElementById("areasTableBody");

      // Hacer una solicitud GET para obtener las áreas desde el servidor
      fetch("/getAreas")
        .then((response) => response.json())
        .then((data) => {
          if (data.areas) {
            // Mostrar las áreas en el frontend
            renderAreas(data.areas);
          } else {
            alert("No se pudieron cargar las áreas.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener las áreas:", error);
        });

      // Función para renderizar las áreas en la tabla
      function renderAreas(areas) {
        areasTableBody.innerHTML = ""; // Limpiar el contenedor de la tabla antes de mostrar los datos

        areas.forEach((area) => {
          const row = document.createElement("tr");
          row.classList.add("border-b");

          row.innerHTML = `
            <td class="px-4 py-2">${area.name}</td>
            <td class="px-4 py-2">${area.cost}</td>
            <td class="px-4 py-2">${area.levels}</td>
            <td class="px-4 py-2">
              <button class="bg-red-500 text-white py-2 px-4 rounded-md" onclick="confirmDelete(${area.id})">
                Eliminar
              </button>
            </td>
          `;

          areasTableBody.appendChild(row);
        });
      }

      // Función para confirmar la eliminación de un área
      window.confirmDelete = (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar esta área?")) {
          // Si el usuario confirma, hacer el fetch para eliminar
          fetch(`/deleteArea/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Área eliminada exitosamente.");
              // Recargar las áreas después de eliminar
              window.location.reload();
            } else {
              alert("Hubo un error al eliminar el área.");
            }
          })
          .catch((error) => {
            console.error("Error al eliminar el área:", error);
            alert("Error al eliminar el área.");
          });
        }
      };
    });
  </script>

  <meta name="csrf-token" content="{{ csrf_token() }}" />
</body>
</html>
