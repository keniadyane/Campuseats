const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  matricula: { type: String, required: true },
  contraseña: { type: String, required: true }
});

module.exports = mongoose.model('Form', FormSchema);
