const express = require("express");
const app = express();
const path = require("path");



app.get('/error', (req, res, next) => {
    const err = new Error('Este es un error de prueba');
    next(err);
});
// Funcion manejadora de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: {
            message: 'Hubo un error en el servidor',
            details: err.message
        }
    });
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
