const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /alumnos:
 *   get:
 *     summary: Obtiene todos los alumnos
 *     description: Retorna una lista de todos los alumnos registrados.
 *     responses:
 *       200:
 *         description: OK
 */

router.get('/alumnos', (req, res) => {
  // Lógica para obtener y retornar alumnos
  res.send('Lista de alumnos');
});

module.exports = router;