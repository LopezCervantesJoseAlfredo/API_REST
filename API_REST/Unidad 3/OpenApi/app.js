const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const app = express();

const swaggerOptions = {
  definition: {
  openapi: '3.0.0',
  info: {
  title: 'API alumnos',
  version: '1.0.0',
  },
  servers:[
  {url: "http://localhost:3000"}
  ], 
  },
  apis: [`${path.join(__dirname,"./routes/index.js")}`],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));  

// Rutas de ejemplo para probar Swagger
app.get('/api/v1/example', (req, res) => {
  res.json({ message: 'Hello from example route' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
