require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser') //utilizamos

//esta parte de codigo es un midelword que trabaja en una capa intermedia
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body
        //se hace una validacion para pida mecesariamente el nombre o salga un error  400 
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    } else {
        res.json({
            persona: body
        });
    }
    //res.json('post Usuario');
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});
//antes que viaje del cervidor como http
//los datos de la web tiene que estar codificada 
//body cuerpo de la peticion 
//miderworld una capa intermedia 
//en el post se izo una modifcacion y le mada a imprimir

//para installar body colocamos
//npm install body-parser --save