import React, { useState } from 'react';

function Form({ onBack, navigateTo }) {
 
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    contraseña: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMensaje('✅ Usuario registrado exitosamente');
        setFormData({ nombre: '', matricula: '', contraseña: '' });
      } else {
        setMensaje('❌ Error al registrar usuario');
      }
    } catch (error) {
      setMensaje('❌ Error de conexión');
      console.error('Error:', error);
    }
    
    setEnviando(false);
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <p className="terms-text">Para completar el registro, debes aceptar los términos y condiciones.</p> 
         {/* Enlaces rápidos */}
          <div className="form-links">
            <button 
              onClick={() => navigateTo('terminos')}>Términos y Condiciones</button>
          </div>
         
 
        <button type="submit" disabled={enviando}>
          {enviando ? 'Registrando...' : 'Acepto los términos y condiciones'} 
        </button>
        
        <button type="button" onClick={onBack} className="btn-back">
          ← Volver al inicio
        </button>
      </form>
      
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Form;