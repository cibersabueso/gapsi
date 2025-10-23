# e-Commerce Gapsi - Examen Práctico FullStack

Aplicación FullStack desarrollada con React v19 y Node.js v22 para la administración de proveedores de Gapsi e-Commerce.

## 🚀 Tecnologías Utilizadas

### Backend
- Node.js v22.21.0
- Koa (Framework web)
- Koa Router
- Koa Bodyparser
- CORS

### Frontend
- React v19
- Material-UI (MUI)
- Axios
- React Virtualized

## 📋 Requisitos Previos

- Node.js v14 o superior (instalado: v22.21.0)
- npm v6 o superior (instalado: v10.9.4)
- Git

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd GAPSI/codigo
```

### 2. Instalar dependencias del Backend
```bash
cd backend
npm install
```

### 3. Instalar dependencias del Frontend
```bash
cd ../frontend
npm install
```

## ▶️ Ejecutar la Aplicación

### Iniciar el Backend
```bash
# Desde la carpeta backend
npm run dev
```

El servidor backend estará corriendo en: http://localhost:3001

### Iniciar el Frontend
```bash
# Desde la carpeta frontend (en otra terminal)
npm start
```

La aplicación frontend se abrirá automáticamente en: http://localhost:3000

## 📁 Estructura del Proyecto
```
GAPSI/
├── codigo/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── controllers/     # Controladores (MVC Pattern)
│   │   │   ├── routes/          # Rutas de la API
│   │   │   ├── services/        # Servicios (Repository Pattern)
│   │   │   ├── config.js        # Configuración (Singleton Pattern)
│   │   │   └── index.js         # Punto de entrada
│   │   ├── bd.json              # Base de datos JSON
│   │   └── package.json
│   │
│   └── frontend/
│       ├── public/
│       │   ├── logo.png
│       │   ├── icon.png
│       │   └── service-worker.js # Service Worker para PWA
│       ├── src/
│       │   ├── components/      # Componentes React
│       │   ├── pages/           # Páginas principales
│       │   ├── services/        # Servicios API (Singleton Pattern)
│       │   ├── App.js
│       │   └── index.js
│       └── package.json
│
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Backend
- ✅ API REST con Koa
- ✅ CRUD de proveedores (Create, Read, Delete)
- ✅ Paginación de resultados
- ✅ Validación de duplicados por nombre
- ✅ Base de datos JSON (bd.json)
- ✅ Endpoint de bienvenida con versión
- ✅ CORS configurado

### Frontend
- ✅ Pantalla de bienvenida con logo
- ✅ Lista de proveedores con Material-UI
- ✅ Paginación de proveedores
- ✅ Agregar proveedores (con validación)
- ✅ Eliminar proveedores
- ✅ PWA con Service Worker (caché de recursos)
- ✅ Diseño responsive

## 🏗️ Patrones de Diseño Implementados

1. **MVC (Model-View-Controller)**: Estructura del backend separando controladores, servicios y rutas
2. **Repository Pattern**: Capa de servicios que abstrae el acceso a datos (proveedorService.js)
3. **Singleton Pattern**: Configuración única (config.js) e instancia única de API (api.js)

## 📡 Endpoints de la API

### GET /api/welcome
Obtiene el mensaje de bienvenida y versión

### GET /api/proveedores?page=1&limit=10
Lista proveedores con paginación

### POST /api/proveedores
Agrega un nuevo proveedor
```json
{
  "nombre": "Nombre del Proveedor",
  "razonSocial": "Razón Social S.A.",
  "direccion": "Dirección completa"
}
```

### DELETE /api/proveedores/:id
Elimina un proveedor por ID

## 🌐 PWA Features

- ✅ Service Worker para caché offline
- ✅ Manifest.json configurado
- ✅ Iconos de aplicación
- ✅ Instalable en dispositivos móviles

## 👨‍💻 Autor

Enrique G.

## 📝 Notas

- La aplicación usa un archivo JSON (bd.json) como base de datos
- El backend debe estar corriendo para que el frontend funcione correctamente
- La validación de duplicados se realiza en el backend