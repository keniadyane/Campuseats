import React from "react";
import "./HeroSection.css";

const HeroSection = ({
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/522f2cd6055b1513f8c4f366649ddae6db9135c9?placeholderIfAbsent=true&apiKey=6eaf466013a445d5b040abfec7bd5241",
  contentImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/086cdb86ebb6a58c8d5164bde245b86057018eef?placeholderIfAbsent=true&apiKey=6eaf466013a445d5b040abfec7bd5241",
  backgroundAlt = "CampusEats Background",
  contentAlt = "CampusEats Content",
  onTeacherRegister,
  onStudentRegister,
}) => {
  const handleTeacherClick = () => {
    if (onTeacherRegister) {
      onTeacherRegister();
    } else {
      console.log("Click en registro docente");
    }
  };

  const handleStudentClick = () => {
    if (onStudentRegister) {
      onStudentRegister();
    } else {
      console.log("Click en registro estudiante");
    }
  };

  return (
    <div className="hero-main-container">
      <div className="hero-background-wrapper">
        <img
          src={backgroundImage}
          className="hero-background-image"
          alt={backgroundAlt}
        />
        <img
          src={contentImage}
          className="hero-content-image"
          alt={contentAlt}
        />
        
          <div className="hero-text">
          <h1 className="hero-title">1. ORDENA</h1>
          <h1 className="hero-title2">
            2. PAGA
          </h1>
          <h1 className="hero-title3">
            3. RECOGE Y <br></br>DISFRUTA!
          </h1>
      </div>
        <div className="hero-buttons">
          <button className="hero-button" onClick={handleTeacherClick}>
            Registrarme
          </button>

         
        </div>


    </div>
  </div>
  );
}

export default HeroSection;
