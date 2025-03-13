# Sistema de Inscripción de Olimpistas

El Sistema de Inscripción de Olimpistas es una plataforma web diseñada para agilizar el proceso de inscripción de estudiantes en la Olimpiada en Ciencias y Tecnología San Simón - Oh! SanSi. Este sistema busca optimizar el flujo de registro, eliminando los cuellos de botella y confusiones que surgieron en años anteriores debido a la complejidad del procedimiento manual.

La aplicación permite a los estudiantes y tutores inscribirse en distintas áreas de competencia, gestionar pagos de inscripción, subir comprobantes de pago y validar la información de manera eficiente. También facilita la generación de reportes administrativos para asegurar un control preciso de los participantes.

El sistema está desarrollado con Laravel 8 en el backend y React en el frontend, proporcionando una arquitectura robusta y modular. Se integra con OCR para la validación automática de comprobantes de pago, asegurando mayor precisión en la verificación del proceso de inscripción.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- PHP ≥ 7.3
- Composer
- Laravel 8
- Node.js y npm
- MySQL o cualquier otra base de datos compatible con Laravel

## Instalación

### Backend (Laravel 8)

1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instalar dependencias de Laravel:
   ```sh
   composer install
   ```

3. Configurar el archivo de entorno:
   ```sh
   cp .env.example .env
   ```
   Luego, edita el archivo `.env` y configura la base de datos.

4. Generar la clave de la aplicación:
   ```sh
   php artisan key:generate
   ```

5. Ejecutar migraciones y seeders:
   ```sh
   php artisan migrate --seed
   ```

6. Iniciar el servidor de Laravel:
   ```sh
   php artisan serve
   ```
   El backend estará disponible en `http://127.0.0.1:8000`

### Frontend (React)

1. Navegar a la carpeta del frontend:
   ```sh
   cd frontend
   ```

2. Instalar dependencias de React:
   ```sh
   npm install
   ```

3. Configurar variables de entorno en `frontend/.env` (ejemplo):
   ```sh
   REACT_APP_API_URL=http://127.0.0.1:8000/api
   ```

4. Iniciar el servidor de React:
   ```sh
   npm start
   ```
   La aplicación estará disponible en `http://localhost:3000`

## Características del Sistema

- Registro de inscripción de estudiantes.
- Inscripción a una o varias áreas.
- Inscripción en lista con uno o varios tutores.
- Generación de boletas de pago.
- Carga de comprobantes de pago con OCR.
- Reportes y gestión de datos.

## Contribuir

Si deseas contribuir, por favor sigue el flujo de trabajo de Git:

1. Hacer un fork del repositorio.
2. Crear una rama para tu cambio: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commit de los cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Hacer push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir un Pull Request.

---

Cualquier duda o sugerencia, no dudes en abrir un issue. 🚀

