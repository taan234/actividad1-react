// src/components/ReturnOrder.js
import React, { useState } from 'react';
import styles from './ReturnOrder.module.css';

const ReturnOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const handleReturnSubmit = (e) => {
    e.preventDefault();

    if (!orderId) {
      setMessage('Por favor, ingrese el ID del pedido');
      return;
    }

    // Simulación de devolución de pedido
    const success = Math.random() > 0.0; // Simula un 80% de éxito

    if (success) {
      setMessage('Pedido devuelto exitosamente');
    } else {
      setMessage('Error al devolver el pedido, por favor intente nuevamente');
    }

    // Restablecer el ID del pedido
    setOrderId('');
  };

  return (
    <div className={styles.returnOrder}>
      <h2 className={styles.title}>Devolución</h2>
      <form onSubmit={handleReturnSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="orderId" className={styles.label}>ID de Orden:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            className={styles.input}
            placeholder="Número de orden"
          />
        </div>
        <button type="submit" className={styles.submitButton}>Devolución de Prendas</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ReturnOrder;
