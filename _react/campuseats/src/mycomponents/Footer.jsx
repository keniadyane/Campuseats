import React from 'react';
import './Footer.css'; // Archivo CSS personalizado

const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Sección principal */}
      <div className="container mx-auto px-4 py-6">
        <div className="footer-grid text-sm">
          
          {/* Información de la empresa */}
          <div className="company-info ">
           
            <h3 className="text-lg font-semibold mb-2 text-orange-400">CampusEats</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Tu plataforma de comida universitaria. Conectamos estudiantes con los mejores sabores del campus.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-links">
            <button onClick={() => window.location.href = '/'}>Inicio</button>
            <button onClick={() => navigateTo('privacidad')}>Política de Privacidad</button>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <h4 className="font-medium mb-2 text-orange-400">Contacto</h4>
            <div className="space-y-1 text-xs">
              <p className="text-gray-300">📧 campuseats@gmail.com</p>
              <p className="text-gray-300">📱 +52 8711089474</p>
              <h4 className="font-medium mb-2 text-orange-400">📍 Campus Universitario:</h4>
              <p className="text-gray-300">Av. Artículo 123 s/n Fracc, Filadelfia, 35019 Gómez Palacio, Dgo.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-2 text-center">
        <p className="text-xs text-gray-400">
          © 2025 CampusEats. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
