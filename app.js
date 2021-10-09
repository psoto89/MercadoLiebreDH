const express = require('express');
const app = express();
const path = require('path');

const PUERTO = 3030

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile( path.join (__dirname,  './views/home.html'));
});


app.listen(PUERTO, () => console.log("Servidor esta corriendo sin problemas"));