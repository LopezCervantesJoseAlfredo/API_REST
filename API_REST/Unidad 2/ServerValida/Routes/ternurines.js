const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const {body,validationResult} = require('express-validator');
//mi_base_de_dato.usuario
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mi_base_de_dato',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

router.get('/usuario/:UsuarioID?', (req, res, next) => {
    try {
        const UsuarioID = req.params.UsuarioID;
        let sql = `SELECT * FROM usuario`;
        let params = [];

        if (UsuarioID) {
            sql += ` WHERE id = ?`;
            params.push(UsuarioID);
        }

        pool.query(sql, params, function(err, results, fields) {
            if (err) {
                res.status(404).json({ error: 'Datos no encontrados' });
                return;
            } else {
                res.send(results);
            }
        });
    } catch (err) {
        res.status(500).send(err.code + ' / ' + err.message);
    }
});

router.post('/usuario', 
[
    body('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('apellido').notEmpty().withMessage('El campo apellido es obligatorio'),
    body('edad').notEmpty().withMessage('El campo edad es obligatorio'),
]
, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
        try {
            const { nombre, apellido, edad } = req.body;
            let params = [nombre, apellido, edad];
            let sql = `INSERT INTO usuario (nombre,apellido,edad) values (?, ?, ?)`;
            if (!nombre || !apellido || !edad) {
                res.status(400).send('Se pide ingresar todos los datos para agregar un nuevo usuario');
                return;
            }
            pool.query(sql, params, function(err, results, fields) {
                if (err) {
                    res.status(500).json({ error: 'No es posible agregar el usuario' });
                    return;
                } else {
                    res.send('Nuevo usuario agregado correctamente');
                }
            });
        } catch (err) {
            res.status(500).send(err.code + ' / ' + err.message);
        }
    }
}
);

router.put('/usuario/:UsuarioID', (req, res, next) => {
    const UsuarioID = req.params.UsuarioID;
    const nuevosDatos = req.body;

    if (!nuevosDatos || Object.keys(nuevosDatos).length === 0) {
        res.status(400).send('Se pide al menos un campo para modificar un usuario');
        return;
    }
    let sql = 'UPDATE usuario SET ? WHERE id = ?';
    pool.query(sql, [nuevosDatos, UsuarioID], function(err, results, fields) {
        if (err) {
            res.status(500).json({ error: 'No es posible modificar el usuario' });
            return;
        } else {
            res.send(`Usuario ${UsuarioID} modificado correctamente`);
        }
    });
});

router.delete('/usuario/:UsuarioID', (req, res, next) => {
    try {
        const UsuarioID = req.params.UsuarioID;
        let sql = `DELETE FROM usuario WHERE id = ${UsuarioID}`;
        if (!UsuarioID) {
            res.status(400).send('Se debe colocar un ID para eliminar un usuario.');
            return;
        }
        pool.query(sql, function(err, results, fields) {
            if (err) {
                res.status(500).json({ error: 'Error al eliminar el usuario' });
                return;
            } else {
                res.send(`Usuario ${UsuarioID} eliminado correctamente`);
            }
        });
    } catch (err) {
        res.status(500).send(err.code + ' / ' + err.message);
    }
});

module.exports = router;
