import React, { useState } from 'react';
import { useCart } from '../CartContext'; // Importar el contexto del carrito
import './MenuSection.css';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const { addToCart } = useCart(); // Usar el contexto del carrito

  const menuData = {
    entradas: [
      { id: 1, name: "Ensalada César", description: "Lechuga fresca, crutones, parmesano", price: 120, image: "🥗" },
      { id: 2, name: "Nachos Especiales", description: "Con queso, jalapeños y guacamole", price: 85, image: "🌮" },
      { id: 3, name: "Alitas BBQ", description: "6 piezas con salsa barbacoa", price: 95, image: "🍗" },
    ],
    principales: [
      { id: 5, name: "Hamburguesa Clásica", description: "Carne de res, lechuga, tomate", price: 70, image: "🍔" },
      { id: 6, name: "Pizza Margherita", description: "Tomate, mozzarella, albahaca", price: 150, image: "🍕" },
      { id: 7, name: "Tacos al Pastor", description: "3 tacos con piña y cebolla", price: 65, image: "🌮" },
    ],
    bebidas: [
      { id: 12, name: "Café Americano", description: "Café de grano selecto", price: 35, image: "☕" },
      { id: 13, name: "Refresco", description: "Coca-Cola, Pepsi o Sprite", price: 25, image: "🥤" },
      { id: 14, name: "Agua Fresca", description: "Jamaica, horchata o tamarindo", price: 30, image: "🥤" }
    ],
    postres: [
      { id: 15, name: "Cheesecake", description: "Con coulis de frutos rojos", price: 95, image: "🍰" },
      { id: 16, name: "Helado", description: "Vainilla, chocolate o fresa", price: 45, image: "🍦" },
    ]
  };

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🍽️' },
    { id: 'entradas', name: 'Entradas', icon: '🥗' },
    { id: 'principales', name: 'Principales', icon: '🍔' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'postres', name: 'Postres', icon: '🍰' }
  ];

  const getAllItems = () => {
    return Object.values(menuData).flat();
  };

  const getFilteredItems = () => {
    if (activeCategory === 'todos') {
      return getAllItems();
    }
    return menuData[activeCategory] || [];
  };

  // Función para agregar al carrito con feedback visual
  const handleAddToCart = (item) => {
    addToCart(item);
    
    // Feedback visual opcional
    const button = document.querySelector(`[data-item-id="${item.id}"]`);
    if (button) {
      button.style.transform = 'scale(0.9)';
      button.style.backgroundColor = '#4CAF50';
      button.innerHTML = '<span>✓</span> Agregado';
      
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '';
        button.innerHTML = '<span>+</span> Agregar';
      }, 1000);
    }
  };

  return (
    <section className="menu-section" id="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Nuestro Menú</h2>
        
        {/* Filtros de categorías */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="menu-grid">
          {getFilteredItems().map(item => (
            <div key={item.id} className="menu-card">
              <div className="card-header">
                <span className="item-emoji">{item.image}</span>
                <span className="item-price">${item.price}</span>
              </div>
              <div className="card-body">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
              </div>
              <button 
                className="add-btn"
                data-item-id={item.id}
                onClick={() => handleAddToCart(item)}
              >
                <span>+</span>
                Agregar
              </button>
            </div>
          ))}
        </div>

        {getFilteredItems().length === 0 && (
          <div className="no-items">
            <p>No hay productos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;