# 🔄 Changapp - Plataforma de Intercambio de Servicios

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 📖 Descripción

Changapp es una plataforma web full stack que permite a los usuarios intercambiar servicios sin necesidad de dinero. La aplicación facilita la conexión entre personas que ofrecen y buscan diferentes tipos de servicios, creando una economía colaborativa basada en el intercambio.

## ✨ Características Principales

- 🔐 **Sistema de Autenticación**: Registro e inicio de sesión seguro para usuarios
- 👤 **Gestión de Perfiles**: Los usuarios pueden crear y editar sus perfiles personales
- 🔍 **Búsqueda y Filtrado**: Sistema avanzado para encontrar servicios específicos
- 💬 **Sistema de Mensajería**: Comunicación directa entre usuarios interesados
- 📝 **Publicación de Servicios**: Los usuarios pueden ofrecer sus servicios a la comunidad
- ⭐ **Sistema de Valoraciones**: Calificación y reseñas de servicios intercambiados

## 🛠️ Tech Stack

### Frontend
- **React**: Librería para construir la interfaz de usuario
- **Redux**: Manejo del estado global de la aplicación
- **CSS Modules**: Estilos modulares y reutilizables
- **Axios**: Cliente HTTP para comunicación con el backend

### Backend
- **Node.js**: Entorno de ejecución de JavaScript
- **Express**: Framework web para Node.js
- **PostgreSQL**: Base de datos relacional
- **Sequelize**: ORM para PostgreSQL
- **JWT**: Autenticación basada en tokens

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

### Instalación del Backend

```bash
# Clonar el repositorio
git clone https://github.com/cubo1991/Changapp.git
cd Changapp/backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de base de datos

# Ejecutar migraciones
npm run migrate

# Iniciar el servidor
npm start
```

### Instalación del Frontend

```bash
# Desde la raíz del proyecto
cd frontend

# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
Changapp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
└── README.md
```

## 🎯 Funcionalidades Futuras

- [ ] Sistema de notificaciones en tiempo real
- [ ] Chat en vivo con WebSockets
- [ ] Aplicación móvil con React Native
- [ ] Sistema de recomendaciones basado en IA
- [ ] Integración con redes sociales

## 👨‍💻 Autor

**David López**
- LinkedIn: [david-lopez-mathez](https://www.linkedin.com/in/david-lopez-mathez/)
- Portfolio: [davidlopezdev.com.ar](https://www.davidlopezdev.com.ar)
- GitHub: [@cubo1991](https://github.com/cubo1991)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

⭐️ Si te gusta este proyecto, no dudes en darle una estrella!
