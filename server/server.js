require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser') //utilizamos

//esta parte de codigo es un midelword que trabaja en una capa intermedia
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//colocamos la ruta del usuario
app.use(require('./routes/usuario'))


//coneccion para el mongo 
mongoose.connect('mongodb://localhost:27017/cafe', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => { //colback
    if (err) throw err;
    console.log("base de datos online");

});

app.listen(process.env.PORT, () => {
        console.log("Escuchando en el puerto", process.env.PORT);
    })
    //antes que viaje del cervidor como http
    //los datos de la web tiene que estar codificada 
    //body cuerpo de la peticion 
    //miderworld una capa intermedia 
    //en el post se izo una modifcacion y le mada a imprimir

//para installar body colocamos
//npm install body-parser --save

//********************************** */
//para instalar la libreria de mongo colocmaos 
//npm install mongoose --save