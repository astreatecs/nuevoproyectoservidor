const express = require('express');
var bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let puerto = process.env.PORT || 3500;

//Arreglos
let Usuarios = [];
let Recargas = [];

//Rutas GET
app.get('/GetUsuarios', function(req, res){
    console.log('conectado');
res.status(200).json(Usuarios);
res.end();
});

app.get('/GetRecargas', function(req, res){
   let idBuscado = req.body.idUsuario;
   let validacion = false;
   Recargas.forEach(Element => {
       if(Element.idUsuario == idBuscado){
           validacion = true;
       }
   });
   if (validacion){
       resp.status(200).send(Recargas);
   }else{
       res.status(400).json({mensaje: 'No existe recarga solicitada'})
   }
   res.end();
    });

//Rutas POST
app.post('/InsertarUsuario', function(req, res){
    let newUsuario = {
        id: req.body.id,
        nombre: req.body.nombre,
        pcr: req.body.pcr
    };
    Usuarios.push(newUsuario);
    resp.status(200).json({mensaje: 'Se inserto el Usuario'})
    res.end();
    });

    app.post('/InsertarRecarga', function(req, res){
        let newRecargas= {
            idRecarga: Recargas.length + 1,
            idUsuario: req.body.idUsuario,
            monto: req.body.monto,
            numero: req.body.numero,
            pcr: req.body.pcr
        };
        Recargas.push(newRecargas);
        res.status(200).json({mensaje: 'Se realizo recarga'});
        res.end();
    });

//escuchas
app.listen(puerto, function(){
    console.log('escuchando desde el puerto ' + puerto)
});