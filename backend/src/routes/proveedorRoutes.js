/**
 * Rutas de proveedores
 * Define los endpoints de la API REST
 */

const Router = require('koa-router');
const proveedorController = require('../controllers/proveedorController');

const router = new Router({
  prefix: '/api'
});

// Ruta de bienvenida
router.get('/welcome', proveedorController.obtenerBienvenida.bind(proveedorController));

// Rutas de proveedores
router.get('/proveedores', proveedorController.listarProveedores.bind(proveedorController));
router.get('/proveedores/:id', proveedorController.obtenerProveedor.bind(proveedorController));
router.post('/proveedores', proveedorController.agregarProveedor.bind(proveedorController));
router.delete('/proveedores/:id', proveedorController.eliminarProveedor.bind(proveedorController));

module.exports = router;