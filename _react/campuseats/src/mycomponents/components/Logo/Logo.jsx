// src/components/Logo/Logo.jsx
import React from 'react';
import './Logo.css';

const Logo = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      className={`logo ${className}`}
      alt={alt}
    />
  );
};

export default Logo;