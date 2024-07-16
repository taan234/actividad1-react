// src/components/Home.js
import React from 'react';
import './Home.module.css'; // Importamos el archivo de estilos CSS

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Bienvenida a nuestra tienda de moda</h1>
        <p className="hero-description">
          Descubre las últimas tendencias y encuentra tu estilo perfecto.
        </p>
        <button className="hero-button">Explorar colección</button>
      </div>
      <div className="featured-section">
        <div className="featured-item">
        <h2 className="featured-title">Primavera - Verano 2024</h2>
          <img src="https://cdn0.matrimonio.com.pe/article/8766/3_2/1280/png/46678-c7699-por.jpeg" alt="Imagen 1" className="featured-image" />
          <div className="featured-info">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


