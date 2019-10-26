const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./network/routes');
const response = require('./network/response');
let app = express();

app.use(bodyParser.json());
routes(app);

app.listen(4000);
console.log('la applicacion esta escuchando en http://localhost:4000');

