import React, { useState, useEffect, useCallback } from 'react';
import { useCart } from '../CartContext';
import '../Logo/Logo.css';
import '../IconButton/IconButton.css';
import '../NavMenu/NavMenu.css';
import './Navbar.css';

const Navbar = ({ navigateTo }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  
  const { items, itemCount, total, updateQuantity, removeFromCart, clearCart } = useCart();

  const menuItems = ['Home', 'Menu'];

  // Memoizar funciones para mejor rendimiento
  const handleMenuClick = useCallback((item) => {
    const itemLower = item.toLowerCase();
    setActiveItem(itemLower);
  if (itemLower === 'home') {
      navigateTo('home'); // Usar la función pasada como prop
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemLower === 'menu') {
      const menuSection = document.getElementById('menu-section');
      menuSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [navigateTo]);

  const toggleCartDropdown = useCallback(() => {
    setShowCartDropdown(prev => !prev);
  }, []);

  const goToCheckout = useCallback(() => {
    if (items.length === 0) return;
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tarifaServicio = subtotal * 0.06;
  const totalConTarifa = subtotal + tarifaServicio;
 const orderSummary = items
    .map(item => `${item.name} x${item.quantity} - ${item.price * item.quantity}`)
    .concat(`Subtotal: ${subtotal.toFixed(2)}`)
    .concat(`Tarifa de servicio (6%): ${tarifaServicio.toFixed(2)}`)
    .join('\n');

const confirmed = window.confirm(
    `Resumen de tu pedido:\n\n${orderSummary}\n\nTotal: ${totalConTarifa.toFixed(2)}\n\n¿Proceder al pago?`
  );

    if (confirmed) {
      alert('¡Pedido realizado con éxito! Puedes recoger tu comida en 15-25 minutos.');
      clearCart();
      setShowCartDropdown(false);
    }
  }, [items, total, clearCart]);

  // Manejar clicks fuera del carrito
  const handleClickOutside = useCallback((e) => {
    if (!e.target.closest('.cart-container')) {
      setShowCartDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <nav className="navbar">
      {/* Logo inicial */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/942db84cc12e37d8423b36f4cf23a143fa3fd560?placeholderIfAbsent=true&apiKey=6eaf466013a445d5b040abfec7bd5241" 
        className="logo logo--navbar" 
        alt="Logo" 
        loading="lazy"
      />
      
      {/* Menú de navegación */}
      <nav className="nav-menu" role="navigation">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${activeItem === item.toLowerCase() ? 'nav-item--active' : ''}`}
            onClick={() => handleMenuClick(item)}
            type="button"
            aria-label={`Ir a ${item}`}
          >
            {item}
          </button>
        ))}
      </nav>
      
      {/* Carrito de compras */}
      <div className="cart-container">
        <button 
          className="icon-button cart-button" 
          onClick={toggleCartDropdown}
          aria-label={`Carrito de compras (${itemCount} productos)`}
          aria-expanded={showCartDropdown}
          type="button"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="cart-icon"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="m1 1 4 4 5.5 13h8.5a2 2 0 0 0 2-1.76l1.5-8.5H5.5" />
          </svg>
          
          {itemCount > 0 && (
            <span className="cart-count" aria-label={`${itemCount} productos en el carrito`}>
              {itemCount}
            </span>
          )}
        </button>
        
        {/* Dropdown del carrito */}
        {showCartDropdown && (
          <div className="cart-dropdown" role="dialog" aria-label="Carrito de compras">
            <header className="cart-header">
              <h3>Mi Carrito ({itemCount} {itemCount === 1 ? 'item' : 'items'})</h3>
              {items.length > 0 && (
                <button 
                  className="clear-cart-btn"
                  onClick={clearCart}
                  title="Vaciar carrito"
                  aria-label="Vaciar carrito"
                  type="button"
                >
                  🗑️
                </button>
              )}
            </header>
            
            <div className="cart-content">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <p>Tu carrito está vacío</p>
                  <p>¡Agrega algunos productos del menú!</p>
                </div>
              ) : (
                <div className="cart-items">
                  {items.map(item => (
                    <article key={item.id} className="cart-item">
                      <div className="item-info">
                        <span className="item-emoji" role="img" aria-label={item.name}>
                          {item.image}
                        </span>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p>${item.price} c/u</p>
                        </div>
                      </div>
                      
                      <div className="item-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Reducir cantidad de ${item.name}`}
                          disabled={item.quantity <= 1}
                          type="button"
                        >
                          -
                        </button>
                        <span className="quantity" aria-label={`Cantidad: ${item.quantity}`}>
                          {item.quantity}
                        </span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Aumentar cantidad de ${item.name}`}
                          type="button"
                        >
                          +
                        </button>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Eliminar ${item.name} del carrito`}
                          type="button"
                        >
                          ❌
                        </button>
                      </div>
                      
                      <div className="item-total" aria-label={`Total: $${item.price * item.quantity}`}>
                        ${item.price * item.quantity}
                      </div>
                    </article>
                  ))}
                  
                  <footer className="cart-summary">
                    <div className="total-row">
                      <strong>Total: ${total}</strong>
                    </div>
                    <button 
                      className="checkout-btn"
                      onClick={goToCheckout}
                      type="button"
                    >
                      Realizar Pedido
                    </button>
                  </footer>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Logo final */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c2dc39834d260a2ddf49252bb55be2fc7220918?placeholderIfAbsent=true&apiKey=6eaf466013a445d5b040abfec7bd5241"
        className="logo logo--navbar-end"
        alt="End Logo"
        loading="lazy"
      />
    </nav>
  );
};

export default Navbar;