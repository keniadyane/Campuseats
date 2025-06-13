const express = require('express');
const router = express.Router();
const Form = require('../models/FormModel');

router.post('/', async (req, res) => {
  try {
    const { nombre, matricula, contraseña } = req.body;
    const nuevoUsuario = new Form({ nombre, matricula, contraseña });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

module.exports = router;
