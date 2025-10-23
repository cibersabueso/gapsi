/**
 * Archivo de configuración central del backend
 * Patrón de diseño: Singleton (configuración única para toda la app)
 */

const config = {
  port: process.env.PORT || 3001,
  dbPath: './bd.json',
  corsOptions: {
    origin: '*',
    credentials: true,
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10,
    maxLimit: 100
  }
};

module.exports = config;