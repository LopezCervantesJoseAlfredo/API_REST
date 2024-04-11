const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync(path.join(__dirname,'certificado/key.pem')),
  cert: fs.readFileSync(path.join(__dirname,'certificado/cert.pem')),
};

app.get('/', (req, res) => {
  res.send('¡Hola, mundo seguro!');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Servidor Express seguro escuchando en https://localhost:${port}`);
});
