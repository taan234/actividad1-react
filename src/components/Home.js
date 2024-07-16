// src/components/Home.js
import React from 'react';
import './Home.css'; // Importamos el nuevo archivo CSS

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">Explora la moda que amas</h1>
        <p className="hero-subtitle">Descubre las últimas tendencias en ropa y accesorios</p>
        <button className="hero-button">Ver colección</button>
      </div>
      <div className="featured-section">
        <div className="featured-card">
          <img className="featured-image" src="https://via.placeholder.com/400x300" alt="Featured Product" />
          <div className="featured-info">
            <h3 className="featured-title">Vestido primaveral</h3>
            <p className="featured-text">Perfecto para cualquier ocasión</p>
            <button className="featured-button">Comprar ahora</button>
          </div>
        </div>
        <div className="featured-card">
          <img className="featured-image" src="https://via.placeholder.com/400x300" alt="Featured Product" />
          <div className="featured-info">
            <h3 className="featured-title">Zapatos elegantes</h3>
            <p className="featured-text">Confort y estilo combinados</p>
            <button className="featured-button">Ver detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
