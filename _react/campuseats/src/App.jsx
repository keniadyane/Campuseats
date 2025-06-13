import React, { useState } from 'react';

// Importaciones de componentes
import { CartProvider } from './mycomponents/components/CartContext.jsx';
import Navbar from './mycomponents/components/Navbar/Navbar.jsx';
import Main from './mycomponents/Main.jsx';
import Form from './mycomponents/Form.jsx';
import Footer from './mycomponents/Footer.jsx';
import MenuSection from './mycomponents/components/MenuSection/MenuSection.jsx';
import Privacidad from './mycomponents/components/Privacidad.jsx'; // Asegúrate de que la ruta sea correcta
import Terms from './mycomponents/Terms.jsx';

// Importaciones de estilos CSS
import './mycomponents/App.css';
import './mycomponents/css/style.css';
import './mycomponents/components/HeroSection/HeroSection.css';

function App() {
  const [currentView, setCurrentView] = useState('main');

  // Funciones para cambiar vistas
  const showForm = () => setCurrentView('form');
  const showMain = () => setCurrentView('main');
  const showPrivacidad = () => setCurrentView('privacidad'); // NUEVA función
  
  // Funciones para manejar registros
  const handleTeacherRegister = () => {
    console.log('Redirigiendo a registro de docente...');
    setCurrentView('form'); // O puedes crear una vista específica
  };

  const handleStudentRegister = () => {
    console.log('Redirigiendo a registro de estudiante...');
    setCurrentView('form'); // O puedes crear una vista específica
  };

  // Función para navegación general (para Navbar y Footer)
  const navigateTo = (page) => {
    switch(page) {
      case 'home':
        setCurrentView('main');
        break;
      case 'privacidad':
        setCurrentView('privacidad');
        break;
       
      case 'form':
        setCurrentView('form');
        break;
      default:
        setCurrentView('main');
    }
  };

  return (
    <CartProvider>
      <div className="App">
        <Navbar navigateTo={navigateTo} />
        
        {/* Renderizado condicional de vistas principales */}
        {currentView === 'main' && (
          <>
            <Main 
              onRegisterClick={showForm}
              onTeacherRegister={handleTeacherRegister}
              onStudentRegister={handleStudentRegister}
            />
            {/* MenuSection solo se muestra en la vista principal */}
            <MenuSection />
          </>
        )}
        
        {currentView === 'form' && (
          <Form onBack={showMain} />
        )}
        
        {currentView === 'terminos' && (
  <Terms navigateBack={showMain} />
)}
        {/* NUEVA vista: Política de Privacidad */}
        {currentView === 'privacidad' && (
          <Privacidad navigateBack={showMain} />
        )}
        
        {/* Footer siempre se muestra */}
        <Footer navigateTo={navigateTo} />
      </div>
    </CartProvider>
  );
}

export default App;