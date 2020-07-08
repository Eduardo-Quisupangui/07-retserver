const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');


const app = express();


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10), //para poder encriptar la contraseña
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //usuarioBD.password = null;
        res.json({
            ok: true,
            usuario: usuarioDB
        });

    });

});
//cambiar datos de recursos existentes
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    //realizar una busqueda del usuario que quiero encontrar 
    Usuario.findById(id, body, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

module.exports = app;