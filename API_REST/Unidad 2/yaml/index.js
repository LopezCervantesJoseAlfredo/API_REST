const yml = require('js-yaml'); 
const fs = require('fs');
const path = require('path');

const objeto = fs.readFileSync(path.join(__dirname, 'objeto.yml'), 'utf8');
const parsedObjeto = yml.load(objeto);
console.log(parsedObjeto); 

const arreglo = fs.readFileSync(path.join(__dirname, 'arreglo.yml'), 'utf8');
const parsedArreglo = yml.load(arreglo);
console.log(parsedArreglo); 
