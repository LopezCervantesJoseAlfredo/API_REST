const express = require('express');
const fs = require('fs');
const path = require('path')
const formidable = require('formidable');
 
const app = express();
 
app.post('/upload', (req, res, next) => {
 
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
 
        let oldPath = files.image.filepath;
        let newPath = path.join(__dirname, 'uploads')
            + '/' + files.image.description
        let rawData = fs.readFileSync(oldPath)
 
        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.send("archivo subido correctamente")
        })
    })
});
 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});