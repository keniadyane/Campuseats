import React from 'react';
import HeroSection from './components/HeroSection/HeroSection.jsx';


function Main({ onTeacherRegister, onStudentRegister }) {
  
  const handleTeacherRegister = () => {
    if (onTeacherRegister) {
      onTeacherRegister();
    } else {
      console.log('Registro de docente desde Main');
      // Aquí puedes agregar lógica de navegación o modal
    }
  };

  const handleStudentRegister = () => {
    if (onStudentRegister) {
      onStudentRegister();
    } else {
      console.log('Registro de estudiante desde Main');
      // Aquí puedes agregar lógica de navegación o modal
    }
  };

  return (
    <div className="main-container">
     
      <HeroSection
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cbad632945fe9cc640d0e1e69608f4516d431f9?placeholderIfAbsent=true&apiKey=6eaf466013a445d5b040abfec7bd5241"
        alt=""
        onTeacherRegister={handleTeacherRegister}
        onStudentRegister={handleStudentRegister}
      />
    </div>
  );
}

export default Main;