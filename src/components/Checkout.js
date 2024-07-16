// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = Date.now(); // Generar un ID único para la orden
    setOrderId(newOrderId);
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutTitle}>Pagar</h2>
      <form className={styles.checkoutForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Nombre</label>
          <input className={styles.formInput} type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">Correo Electrónico</label>
          <input className={styles.formInput} type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="address">Dirección</label>
          <input className={styles.formInput} type="text" id="address" name="address" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="card">Número de Tarjeta</label>
          <input className={styles.formInput} type="text" id="card" name="card" required />
        </div>
        <button type="submit" className={styles.submitButton}>Completar Pedido</button>
      </form>
      
      {orderId && (
        <div className={styles.orderSummary}>
          <h3 className={styles.summaryTitle}>Orden de Compra</h3>
          <p className={styles.orderId}>ID de Orden: {orderId}</p>
          <div className={styles.cartSummary}>
            <h4 className={styles.summaryTitle}>Resumen del pedido</h4>
            {cart.map((item, index) => (
              <div className={styles.summaryItem} key={index}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <p className={styles.summaryText}>
              Subtotal: ${cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}
            </p>
            <p className={styles.summaryText}>Costo estimado por envío: $100.00</p>
            <h3 className={styles.totalText}>
              Total: ${(cart.reduce((total, item) => total + (item.price || 0), 0) + 100).toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
