import React, { useState } from 'react';
import { 
  BookOpen,
  Calendar,
  Users,
  ArrowRight,
  Bell,
  Clock,
  Award,
  User,
  ChevronRight,
  Newspaper,
  GraduationCap,
  Target,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  FileText,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const LandingPage = () => {

  const navigate = useNavigate();
  const [tutors, setTutors] = useState([]);
  const [loadingTutors, setLoadingTutors] = useState(true);
  const [errorTutors, setErrorTutors] = useState(null);

  const [competencias, setCompetencias] = useState([]);
  const [loadingCompetencias, setLoadingCompetencias] = useState(true);
  const [errorCompetencias, setErrorCompetencias] = useState(null);

  useEffect(() => {
  axios.get('http://localhost:8000/api/tutores')
    .then(response => {
      if (response.data.success) {
        setTutors(response.data.data);
      } else {
        setErrorTutors('Error al cargar tutores');
      }
    })
    .catch(() => {
      setErrorTutors('No se pudo conectar con el servidor.');
    })
    .finally(() => {
      setLoadingTutors(false);
    });
}, []);

useEffect(() => {
  axios.get('http://localhost:8000/api/competencias')
    .then(response => {
      setCompetencias(response.data);
    })
    .catch(() => {
      setErrorCompetencias('No se pudo cargar las competencias.');
    })
    .finally(() => {
      setLoadingCompetencias(false);
    });
}, []);



  const news = [
    {
      id: 1,
      title: "Período de inscripciones 2025-2",
      excerpt: "Se encuentran abiertas las inscripciones para el segundo semestre académico 2025. Consulte fechas límite y documentación requerida.",
      date: "5 Jun 2025",
      category: "Inscripciones",
      priority: "high"
    },
    {
      id: 2,
      title: "Nuevos horarios de atención",
      excerpt: "Actualización de horarios de atención al estudiante. Consulte los nuevos horarios para realizar sus trámites.",
      date: "3 Jun 2025",
      category: "Servicios",
      priority: "medium"
    },
    {
      id: 3,
      title: "Resultados académicos disponibles",
      excerpt: "Ya están disponibles las calificaciones del período anterior. Los estudiantes pueden consultar sus resultados en el portal.",
      date: "1 Jun 2025",
      category: "Académico",
      priority: "medium"
    },
    {
      id: 4,
      title: "Talleres de orientación académica",
      excerpt: "Se realizarán talleres de orientación para nuevos estudiantes. Inscripciones abiertas hasta el 15 de junio.",
      date: "28 May 2025",
      category: "Orientación",
      priority: "low"
    }
  ]

  

  const stats = [
    { icon: Users, label: "Estudiantes Activos", value: "2,847" },
    { icon: BookOpen, label: "Cursos Disponibles", value: "156" },
    { icon: Award, label: "Programas Académicos", value: "24" },
    { icon: GraduationCap, label: "Graduados 2024", value: "892" }
  ]

  const features = [
    {
      icon: Calendar,
      title: "Gestión de Horarios",
      description: "Planificación y administración eficiente de horarios académicos con herramientas intuitivas para optimizar su experiencia educativa"
    },
    {
      icon: Users,
      title: "Seguimiento Académico",
      description: "Monitoreo completo del progreso estudiantil con reportes detallados y análisis personalizado para el éxito académico"
    },
    {
      icon: Target,
      title: "Reportes Institucionales",
      description: "Generación automática de informes académicos y administrativos con datos en tiempo real para la toma de decisiones"
    }
  ]

    const handleLoginClick = () => {
    navigate('/login');
    }


  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F2 0%, #F2EEE3 50%, #E8DDD4 100%)'}}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50" style={{borderColor: '#E8DDD4'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border" style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide" style={{color: '#5A4A3A'}}>
                  Oh Sansi!
                </h1>
                <p className="text-xs font-medium" style={{color: '#8B7355'}}>Sistema Integral de Gestión Académica</p>
              </div>
            </div>

            <div className="flex items-center space-x-10">
              <nav className="hidden md:flex items-center space-x-10">
                <a href="#inicio" className="text-sm font-medium hover:opacity-80 transition-colors" style={{color: '#8B7355'}}>
                  Inicio
                </a>
                <a href="#noticias" className="text-sm font-medium hover:opacity-80 transition-colors" style={{color: '#8B7355'}}>
                  Novedades
                </a>
                <a href="#tutores" className="text-sm font-medium hover:opacity-80 transition-colors" style={{color: '#8B7355'}}>
                  Tutores
                </a>
                <button onClick={() => {
                  navigate('/register');
                }} className="text-sm font-medium hover:opacity-80 transition-colors" style={{color: '#8B7355'}}>
                  Registrar estudiante
                </button>
              </nav>
              
              <button
                onClick={handleLoginClick}
                className="text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md"
                style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-md border rounded-full mb-10 shadow-md" style={{borderColor: '#E8DDD4'}}>
            <Bell className="w-4 h-4 mr-3" style={{color: '#8B7355'}} />
            <span className="text-sm font-medium" style={{color: '#5A4A3A'}}>Inscripciones abiertas - Semestre 2025-2</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-wide leading-tight" style={{color: '#5A4A3A'}}>
            Portal de Inscripciones
            <span className="block mt-2" style={{color: '#8B7355'}}>
              Académicas
            </span>
          </h1>
          
          <p className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-medium" style={{color: '#8B7355'}}>
            Sistema integral para la gestión de inscripciones y seguimiento académico institucional.
            Una plataforma diseñada para facilitar su experiencia educativa con excelencia y simplicidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleLoginClick}
              className="text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg"
              style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)'}}
            >
              <span>Acceder al Sistema</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border bg-white/70 backdrop-blur-md px-10 py-4 rounded-xl font-semibold hover:bg-white/90 hover:shadow-md transform hover:scale-105 transition-all duration-300" style={{borderColor: '#E8DDD4', color: '#5A4A3A'}}>
              Información General
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
        <section id="competencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-wide flex items-center justify-center space-x-4" style={{color: '#5A4A3A'}}>
                <Award className="w-8 h-8" style={{color: '#C8B7A6'}} />
                <span>Competencias</span>
            </h2>
            <p className="font-medium max-w-2xl mx-auto" style={{color: '#8B7355'}}>
                Consulta las competencias académicas disponibles organizadas por área, categoría y fecha.
            </p>
            </div>

            {loadingCompetencias ? (
            <p className="text-center text-[#8B7355]">Cargando competencias...</p>
            ) : errorCompetencias ? (
            <p className="text-center text-red-600">{errorCompetencias}</p>
            ) : (
            <div className="grid md:grid-cols-2 gap-8">
                {competencias.map((comp) => (
                <div key={comp.id} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border hover:shadow-lg transition duration-300" style={{borderColor: '#E8DDD4'}}>
                    <h3 className="text-xl font-bold mb-2 text-[#5A4A3A]">{comp.nombre}</h3>
                    <p className="text-sm font-medium mb-1 text-[#8B7355]">
                    <strong>Área:</strong> {comp.area_categoria.area.nombre}
                    </p>
                    <p className="text-sm font-medium mb-1 text-[#8B7355]">
                    <strong>Categoría:</strong> {comp.area_categoria.categoria.nombre} ({comp.area_categoria.grado})
                    </p>
                    <p className="text-sm font-medium mb-1 text-[#8B7355]">
                    <strong>Fecha:</strong> {comp.fecha_competencia}
                    </p>
                    <p className="text-sm font-medium mb-1 text-[#8B7355]">
                    <strong>Inscripción hasta:</strong> {comp.fecha_fin_inscripcion}
                    </p>
                    <p className="text-sm font-medium mb-1 text-[#8B7355]">
                    <strong>Monto:</strong> Bs. {parseFloat(comp.monto).toFixed(2)}
                    </p>
                    <p className="text-sm font-medium text-[#8B7355]">
                    <strong>Máx. competidores:</strong> {comp.max_competidores}
                    </p>
                </div>
                ))}
            </div>
            )}
        </div>
        </section>
     

      {/* Tutors Section */}
            <section id="tutores" className="py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #F2EEE3 0%, #FAF7F2 100%)'}}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-wide flex items-center justify-center space-x-4" style={{color: '#5A4A3A'}}>
                <UserCheck className="w-8 h-8" style={{color: '#C8B7A6'}} />
                <span>Equipo de Tutores</span>
            </h2>
            <p className="font-medium max-w-2xl mx-auto" style={{color: '#8B7355'}}>
                Nuestro equipo de profesionales está aquí para guiarle en cada paso de su proceso académico
            </p>
            </div>

            {loadingTutors ? (
            <div className="text-center text-[#8B7355] text-sm">Cargando tutores...</div>
            ) : errorTutors ? (
            <div className="text-center text-red-600 font-medium">{errorTutors}</div>
            ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tutors.map((tutor, index) => (
                <div key={tutor.id} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border hover:scale-105 transform" style={{borderColor: '#E8DDD4'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg border" style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                    {tutor.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>

                    <h3 className="text-lg font-bold mb-2" style={{color: '#5A4A3A'}}>{tutor.name}</h3>
                    <p className="text-sm font-semibold mb-2" style={{color: '#C8B7A6'}}>Tutor Académico</p>
                    <p className="text-xs font-medium mb-4" style={{color: '#8B7355'}}>Departamento General</p>

                    <div className="space-y-2">
                    <div className="flex items-center justify-center text-xs font-medium" style={{color: '#8B7355'}}>
                        <Mail className="w-3 h-3 mr-2" />
                        <span>{tutor.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-xs font-medium" style={{color: '#8B7355'}}>
                        <Phone className="w-3 h-3 mr-2" />
                        <span>{tutor.celular}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t py-16 px-4 sm:px-6 lg:px-8" style={{borderColor: '#E8DDD4'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border" style={{background: 'linear-gradient(135deg, #C8B7A6, #B8A494)', borderColor: '#E8DDD4'}}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{color: '#5A4A3A'}}>Oh Sansi!</h3>
                  <p className="text-sm font-medium" style={{color: '#8B7355'}}>Sistema Integral de Gestión Académica</p>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed" style={{color: '#8B7355'}}>
                Portal oficial para la gestión de inscripciones y seguimiento académico institucional con los más altos estándares de calidad.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg" style={{color: '#5A4A3A'}}>Enlaces Rápidos</h4>
              <ul className="space-y-3 text-sm font-medium" style={{color: '#8B7355'}}>
                <li><a href="#inicio" className="hover:opacity-80 transition-colors">Inicio</a></li>
                <li><a href="#noticias" className="hover:opacity-80 transition-colors">Novedades</a></li>
                <li><a href="#tutores" className="hover:opacity-80 transition-colors">Equipo de Tutores</a></li>
                <li><button onClick={handleLoginClick} className="hover:opacity-80 transition-colors">Acceso al Sistema</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg" style={{color: '#5A4A3A'}}>Contacto</h4>
              <div className="space-y-4 text-sm font-medium" style={{color: '#8B7355'}}>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-0.5" style={{color: '#C8B7A6'}} />
                  <span>inscripciones@universidad.edu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-0.5" style={{color: '#C8B7A6'}} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5" style={{color: '#C8B7A6'}} />
                  <span>Campus Principal<br />Edificio Administrativo, Piso 3</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center" style={{borderColor: '#E8DDD4'}}>
            <p className="text-sm font-medium" style={{color: '#8B7355'}}>
              © 2025 Oh Sansi! - Sistema Integral de Gestión Académica
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage