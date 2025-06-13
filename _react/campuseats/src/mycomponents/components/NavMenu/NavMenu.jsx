import React from 'react';
import './NavMenu.css';

const NavMenu = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="nav-menu">
      {items.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${activeItem === item.toLowerCase() ? 'nav-item--active' : ''} ${item.toLowerCase() === 'home' ? 'home-item' : ''}`}
          onClick={() => onItemClick && onItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NavMenu;