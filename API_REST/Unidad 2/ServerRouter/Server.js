const express = require('express');
const app = express();

const ternurinesRouter = require('./routes/ternurines.js')

app.use(express.json());

app.use('/', ternurinesRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});