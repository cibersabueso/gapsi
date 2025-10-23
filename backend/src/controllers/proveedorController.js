/**
 * Controlador de proveedores
 * Patrón de diseño: MVC - Controller (maneja la lógica de las peticiones HTTP)
 */

const proveedorService = require('../services/proveedorService');

class ProveedorController {
  
  // GET /api/proveedores - Listar proveedores con paginación
  async listarProveedores(ctx) {
    try {
      const { page = 1, limit = 10 } = ctx.query;
      const result = await proveedorService.getProveedores(page, limit);
      
      ctx.status = 200;
      ctx.body = {
        success: true,
        ...result
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }

  // GET /api/proveedores/:id - Obtener proveedor por ID
  async obtenerProveedor(ctx) {
    try {
      const { id } = ctx.params;
      const proveedor = await proveedorService.getProveedorById(id);
      
      if (!proveedor) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: 'Proveedor no encontrado'
        };
        return;
      }
      
      ctx.status = 200;
      ctx.body = {
        success: true,
        data: proveedor
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }

  // POST /api/proveedores - Agregar proveedor
  async agregarProveedor(ctx) {
    try {
      const { nombre, razonSocial, direccion } = ctx.request.body;
      
      // Validaciones
      if (!nombre || !razonSocial || !direccion) {
        ctx.status = 400;
        ctx.body = {
          success: false,
          message: 'Todos los campos son obligatorios'
        };
        return;
      }
      
      const nuevoProveedor = await proveedorService.addProveedor({
        nombre,
        razonSocial,
        direccion
      });
      
      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Proveedor agregado exitosamente',
        data: nuevoProveedor
      };
    } catch (error) {
      ctx.status = 400;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }

  // DELETE /api/proveedores/:id - Eliminar proveedor
  async eliminarProveedor(ctx) {
    try {
      const { id } = ctx.params;
      const proveedorEliminado = await proveedorService.deleteProveedor(id);
      
      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Proveedor eliminado exitosamente',
        data: proveedorEliminado
      };
    } catch (error) {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }

  // GET /api/welcome - Obtener información de bienvenida
  async obtenerBienvenida(ctx) {
    try {
      const info = await proveedorService.getWelcomeInfo();
      
      ctx.status = 200;
      ctx.body = {
        success: true,
        ...info
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: error.message
      };
    }
  }
}

module.exports = new ProveedorController();