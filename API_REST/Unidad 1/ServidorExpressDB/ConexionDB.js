//CONEXION CON MYSQL
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

app.use(express.json()); 

// Obtener un usuario por su ID
app.get('/usuario', (req, res) => {
  const userId = req.query.id;
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
        if (results.length === 0) {
          res.status(404).send('Usuario no encontrado');
          return;
        }
        res.send(results[0]);
      }
    );
  } else {
    connection.query(
      'SELECT * FROM usuario',
      function(err, results, fields) {
        if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }
        res.send(results);
      }
    );
  }
});


// Insertar un nuevo usuario
app.post('/usuario', (req, res) => {
  const { nombre, apellido, edad } = req.body;
  if (!nombre || !apellido || !edad) {
    res.status(400).send('Por favor, proporcione nombre, apellido y edad');
    return;
  }

  connection.query(
    'INSERT INTO usuario (nombre, apellido, edad) VALUES (?, ?, ?)',
    [nombre, apellido, edad],
    function(err, results, fields) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.send('Usuario insertado correctamente');
    }
  );
});

// Actualizar un usuario por su ID
app.put('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  const { nombre, apellido, edad } = req.body;
  if (!nombre && !apellido && !edad) {
    res.status(400).send('Por favor, proporcione al menos un campo para actualizar');
    return;
  }

  let updateFields = [];
  let updateValues = [];
  if (nombre) {
    updateFields.push('nombre = ?');
    updateValues.push(nombre);
  }
  if (apellido) {
    updateFields.push('apellido = ?');
    updateValues.push(apellido);
  }
  if (edad) {
    updateFields.push('edad = ?');
    updateValues.push(edad);
  }
  updateValues.push(userId); // El ID del usuario a actualizar

  const updateQuery = `UPDATE usuario SET ${updateFields.join(', ')} WHERE id = ?`;

  connection.query(
    updateQuery,
    updateValues,
    function(err, results, fields) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send('Usuario no encontrado');
        return;
      }
      res.send('Usuario actualizado correctamente');
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
