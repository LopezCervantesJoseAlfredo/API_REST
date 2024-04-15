const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const uploadDirectory = path.join(__dirname, "Uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

app.post("/upload", upload.single("file"), function (req, res, next) {
  res.send("Archivo subido exitosamente");
});

app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.status(400).send("Hubo un error al subir el archivo: " + err.message);
  } else {
    res.status(500).send("Hubo un error en el servidor: " + err.message);
  }
});

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});