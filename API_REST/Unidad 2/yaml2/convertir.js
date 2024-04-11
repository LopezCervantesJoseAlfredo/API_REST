const fs = require('fs');
const yaml = require('js-yaml');

try {
    const datosYAML = fs.readFileSync('datos.yaml', 'utf8');

    const datosObjeto = yaml.load(datosYAML);

    console.log(datosObjeto);
} catch (error) {
    console.error('Error al leer el archivo YAML:', error);
}