const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mi_base_de_dato',
  password: ''
});

app.get('/usuario', (req, res, next) => {
  const userId = req.query.id; // Obtener el ID del usuario 

  if (userId) {
    connection.query(
      'SELECT * FROM usuario WHERE id = ?',
      [userId],
      function(err, results, fields) {
        if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }
        console.log(results);
        console.log(fields);
        res.send(results);
        if(results.length == 0)
        {
          console.log(0);
          console.log(0);
          res.send(0);
        }
      }
    );
  } else {
    res.status(400).send('Por favor, proporcione un ID de usuario');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
