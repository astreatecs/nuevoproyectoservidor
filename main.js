const express = require('express');
var bodyParser = require('body-parser');
let app = express();
let body = bodyParser();

let coneccion = process.env.PORT || 3500;

//Rutas GET
app.get('/', function(req, res){
res.status(200).send('Bienvenido');
res.end();
});


//Rutas POST
/*app.post('/', function(req, res){
    req.body.nombre();
    req.end();
    });*/

//escuchas
app.listen(port, function(){
    console.log('escuchando desde el puerto' + port)
});