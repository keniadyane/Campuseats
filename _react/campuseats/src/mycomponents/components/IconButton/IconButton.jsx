import React from 'react';
import './IconButton.css';

const IconButton = ({ icon, alt, onClick, className }) => {
  return (
    <div className={`icon-container ${className}`}>
      <div className="icon-wrapper">
        <div className="icon-button" onClick={onClick}>
          <div className="icon-state-layer">
            <img
              src={icon}
              className="icon-image"
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconButton;