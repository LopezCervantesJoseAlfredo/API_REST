const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    console.log('peticion al server')+new Date()
    next();
})
 
app.use(morgan('combined'))
app.use(express.json());
//TIPOS DE CONSULTAS 
//Recibiendo parametros en la clase de consulta
app.get("/alumnos", (req, res, next) => {
    console.log(req.query);
    res.send('Consulta 1');
});
//Parte de la consulta
app.get("/maestros/:carrera", (req, res, next) => {
    console.log(req.params.carrera);
    res.send('Consulta 2');
    });
//Dentro de el body
app.get("/administrativos", (req, res, next) => {
    for(const campo in req.body)
    {
        console.log(req.body[campo]);
    }
});

app.get("/prefectos", (req, res, next) => {
    console.log(req.body);
    res.send('Nombre');
    });

app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});