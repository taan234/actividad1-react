// src/components/Home.js
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h2 className={styles.home__title}>Descubre las últimas tendencias en moda</h2>
      <p className={styles.home__text}>Explora nuestra colección primavera-verano y encuentra tu estilo único.</p>
      <p className={styles.home__text}>Desde ropa casual hasta elegantes prendas de noche, tenemos todo lo que necesitas.</p>
      <p className={styles.home__text}>Visítanos y deja que nuestra moda hable por ti.</p>
    </div>
  );
}

export default Home;
