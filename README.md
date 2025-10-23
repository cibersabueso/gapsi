# e-Commerce Gapsi - Examen Práctico FullStack

Aplicación FullStack desarrollada con React y Node.js para la administración de proveedores de Gapsi e-Commerce.

## Tecnologías Utilizadas

### Backend
- Node.js v22.21.0
- Koa - Framework web minimalista
- Koa Router - Manejo de rutas
- Koa Bodyparser - Parser de body JSON
- @koa/cors - Configuración CORS
- Nodemon - Auto-reload en desarrollo

### Frontend
- React v19
- Material-UI (MUI) - Componentes UI
- Axios - Cliente HTTP
- React Virtualized - Virtual scroll

## Requisitos Previos

- Node.js v14 o superior
- npm v6 o superior
- Git

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/cibersabueso/gapsi.git
cd gapsi
```

### 2. Instalar Backend
```bash
cd backend
npm install
```

### 3. Instalar Frontend
```bash
cd frontend
npm install
```

## Ejecutar la Aplicación

### Backend (Terminal 1)
```bash
cd backend
npm run dev
```

Servidor: http://localhost:3001

### Frontend (Terminal 2)
```bash
cd frontend
npm start
```

Aplicación: http://localhost:3000

## Estructura del Proyecto
```
gapsi/
├── backend/
│   ├── src/
│   │   ├── controllers/          # MVC Controllers
│   │   │   └── proveedorController.js
│   │   ├── routes/               # API Routes
│   │   │   └── proveedorRoutes.js
│   │   ├── services/             # Business Logic (Repository Pattern)
│   │   │   └── proveedorService.js
│   │   ├── config.js             # Configuration (Singleton Pattern)
│   │   └── index.js              # Entry point
│   ├── bd.json                   # JSON Database
│   ├── postman_collection.json   # API Documentation
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── logo.png
│   │   ├── icon.png
│   │   ├── service-worker.js     # PWA Service Worker
│   │   └── manifest.json         # PWA Manifest
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── WelcomePage.jsx
│   │   │   └── ProveedoresList.jsx
│   │   ├── pages/
│   │   │   └── MainPage.jsx
│   │   ├── services/
│   │   │   └── api.js            # API Service (Singleton Pattern)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## Funcionalidades Implementadas

### Backend
- API REST con Koa framework
- CRUD completo de proveedores (Create, Read, Delete)
- Paginación de resultados
- Validación de duplicados por nombre
- Base de datos JSON (bd.json)
- Endpoint de bienvenida con versión
- CORS habilitado
- Manejo de errores global

### Frontend
- Pantalla de bienvenida con logo y versión (desde API)
- Lista de proveedores con Material-UI
- Paginación funcional
- Agregar proveedores con validación
- Eliminar proveedores con confirmación
- PWA con Service Worker
- Diseño responsive
- Header con menú

### Features Adicionales
- PWA - Service Worker para caché offline
- Material-UI implementado
- Patrones de diseño documentados
- Documentación Postman

## Patrones de Diseño

### 1. MVC (Model-View-Controller)
**Ubicación:** Backend estructura
- **Model:** proveedorService.js (acceso a datos)
- **Controller:** proveedorController.js (lógica de negocio)
- **Routes:** proveedorRoutes.js (definición de endpoints)

### 2. Repository Pattern
**Ubicación:** backend/src/services/proveedorService.js
- Abstrae el acceso a la base de datos JSON
- Centraliza operaciones CRUD
- Facilita cambio de fuente de datos

### 3. Singleton Pattern
**Ubicación:**
- backend/src/config.js - Configuración única
- frontend/src/services/api.js - Instancia única de Axios

## API Endpoints

### GET /api/welcome
```json
Response: {
  "success": true,
  "message": "Bienvenido Candidato 01",
  "version": "0.0.1"
}
```

### GET /api/proveedores?page=1&limit=10
```json
Response: {
  "success": true,
  "data": [...],
  "page": 1,
  "limit": 10,
  "total": 3,
  "totalPages": 1
}
```

### POST /api/proveedores
```json
Request: {
  "nombre": "Proveedor Nuevo",
  "razonSocial": "Empresa S.A.",
  "direccion": "Calle 123"
}

Response: {
  "success": true,
  "message": "Proveedor agregado exitosamente",
  "data": {...}
}
```

### DELETE /api/proveedores/:id
```json
Response: {
  "success": true,
  "message": "Proveedor eliminado exitosamente",
  "data": {...}
}
```

## Documentación Postman

La colección de Postman está disponible en: backend/postman_collection.json

Importa este archivo en Postman para probar todos los endpoints.

## PWA Features

- Service Worker registrado
- Caché de recursos estáticos
- Manifest.json configurado
- Instalable en dispositivos móviles
- Funciona offline (recursos cacheados)

## Testing

### Probar Backend (con curl o Postman)
```bash
# Welcome endpoint
curl http://localhost:3001/api/welcome

# List proveedores
curl http://localhost:3001/api/proveedores

# Add proveedor
curl -X POST http://localhost:3001/api/proveedores \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","razonSocial":"Test SA","direccion":"Test 123"}'

# Delete proveedor
curl -X DELETE http://localhost:3001/api/proveedores/1
```

## Notas de Desarrollo

- Base de datos: Archivo JSON (bd.json)
- Puerto Backend: 3001
- Puerto Frontend: 3000
- La validación de duplicados se hace en el backend
- El Service Worker se registra automáticamente en producción

## Troubleshooting

### Backend no inicia
```bash
cd backend
npm install
npm run dev
```

### Frontend no compila
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### CORS errors
- Verificar que el backend esté corriendo en puerto 3001
- Revisar configuración CORS en backend/src/config.js

## Autor

Enrique G.

## Licencia

ISC