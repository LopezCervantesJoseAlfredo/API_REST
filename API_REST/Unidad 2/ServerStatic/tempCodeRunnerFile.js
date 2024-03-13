const express = require("express");
const expressBasicAuth = require("express-basic-auth");
const app = express();
const path = require("path");

//BasicAuth
const basicAuth = require('express-basic-auth')
app.use(basicAuth({
    users: {
        'Alfredo': '20100225',
    }
}))

//Get
app.get('/', (req, res, next) => {
res.send('constestame a get desde server express');
});

//Consulta en public
app.use("/public",express.static(path.join(__dirname,'public') ) );
 
app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});

