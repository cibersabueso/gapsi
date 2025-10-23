/**
 * Servicio para manejo de proveedores
 * Patrón de diseño: Repository Pattern (abstrae el acceso a datos)
 */

const fs = require('fs').promises;
const path = require('path');
const config = require('../config');

class ProveedorService {
  constructor() {
    this.dbPath = path.resolve(config.dbPath);
  }

  // Leer la base de datos
  async readDB() {
    try {
      const data = await fs.readFile(this.dbPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error leyendo BD:', error);
      throw new Error('Error al leer la base de datos');
    }
  }

  // Escribir en la base de datos
  async writeDB(data) {
    try {
      await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      console.error('Error escribiendo BD:', error);
      throw new Error('Error al escribir en la base de datos');
    }
  }

  // Obtener proveedores con paginación
  async getProveedores(page = 1, limit = 10) {
    const db = await this.readDB();
    const proveedores = db.proveedores || [];
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const paginatedData = proveedores.slice(startIndex, endIndex);
    
    return {
      data: paginatedData,
      page: parseInt(page),
      limit: parseInt(limit),
      total: proveedores.length,
      totalPages: Math.ceil(proveedores.length / limit)
    };
  }

  // Obtener proveedor por ID
  async getProveedorById(id) {
    const db = await this.readDB();
    const proveedor = db.proveedores.find(p => p.id === parseInt(id));
    return proveedor;
  }

  // Agregar proveedor
  async addProveedor(proveedor) {
    const db = await this.readDB();
    
    // Validar que no exista un proveedor con el mismo nombre
    const existe = db.proveedores.find(
      p => p.nombre.toLowerCase() === proveedor.nombre.toLowerCase()
    );
    
    if (existe) {
      throw new Error('Ya existe un proveedor con ese nombre');
    }
    
    // Generar nuevo ID
    const newId = db.proveedores.length > 0 
      ? Math.max(...db.proveedores.map(p => p.id)) + 1 
      : 1;
    
    const nuevoProveedor = {
      id: newId,
      ...proveedor
    };
    
    db.proveedores.push(nuevoProveedor);
    await this.writeDB(db);
    
    return nuevoProveedor;
  }

  // Eliminar proveedor
  async deleteProveedor(id) {
    const db = await this.readDB();
    const index = db.proveedores.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('Proveedor no encontrado');
    }
    
    const deletedProveedor = db.proveedores.splice(index, 1)[0];
    await this.writeDB(db);
    
    return deletedProveedor;
  }

  // Obtener información de bienvenida
  async getWelcomeInfo() {
    const db = await this.readDB();
    return {
      message: db.welcomeMessage || 'Bienvenido',
      version: db.version || '0.0.1'
    };
  }
}

module.exports = new ProveedorService();