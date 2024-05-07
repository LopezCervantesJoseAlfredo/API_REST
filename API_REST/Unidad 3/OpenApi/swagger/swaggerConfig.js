const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for my API'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        Alumno: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del alumno'
            },
            nombre: {
              type: 'string',
              description: 'Nombre del alumno'
            },
            edad: {
              type: 'integer',
              description: 'Edad del alumno'
            }
          }
        }
      }
    }
  },
  apis: [] // Aquí puedes agregar rutas si deseas detallar operaciones como GET, POST, etc.
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
