// src/layout/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/formulario" className="hover:text-yellow-300">
            Formulario de Inscripción
          </Link>
        </li>
        <li>
          <Link to="/registro" className="hover:text-yellow-300">
            Registro de Áreas
          </Link>
        </li>
        <li>
          <Link to="/reporte" className="hover:text-yellow-300">
            Reporte de Áreas
          </Link>
        </li>
      </ul>
    </div>
  );
}
