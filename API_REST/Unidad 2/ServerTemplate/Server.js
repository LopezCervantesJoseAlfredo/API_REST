const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

//Get
app.get('/', (req, res, next) => {
    res.render('index.pug');
    });

app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});

