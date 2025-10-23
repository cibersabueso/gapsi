/**
 * Servidor principal de la aplicación
 * Framework: Koa
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const proveedorRoutes = require('./routes/proveedorRoutes');
const config = require('./config');

// Crear instancia de Koa
const app = new Koa();

// Middlewares
app.use(cors(config.corsOptions));
app.use(bodyParser());

// Middleware de logging
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Manejo de errores global
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: err.message
    };
    console.error('Error:', err);
  }
});

// Rutas
app.use(proveedorRoutes.routes());
app.use(proveedorRoutes.allowedMethods());

// Ruta raíz
app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.body = {
      message: 'API e-Commerce Gapsi - Backend',
      version: '0.0.1',
      endpoints: {
        welcome: 'GET /api/welcome',
        proveedores: 'GET /api/proveedores?page=1&limit=10',
        agregarProveedor: 'POST /api/proveedores',
        eliminarProveedor: 'DELETE /api/proveedores/:id'
      }
    };
  }
});

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📚 Documentación de API disponible en http://localhost:${PORT}/`);
});

module.exports = app;