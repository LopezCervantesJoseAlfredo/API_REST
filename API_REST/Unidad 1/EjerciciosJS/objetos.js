let carro = {
    "id": 1,
    "marca": "Toyota",
    "modelo": "Tacoma",
    "año" : "2024",
    "dueño": "Alfredo"
}

let sentenciaSQL = 'update table set '

for (const [propiedad, valor] of Object.entries(carro)) {
    if (propiedad !== 'id') {
      sentenciaSQL += `${propiedad} = '${valor}', `;
    }
}

sentenciaSQL = sentenciaSQL.slice(0, -2);
sentenciaSQL += ` WHERE id = ${carro.id};`;
console.log(sentenciaSQL);