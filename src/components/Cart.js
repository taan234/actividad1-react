// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Mi Carrito</h2>
      <div className={styles.cartContent}>
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Tu carrito de compras está vacío.</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item, index) => (
                <div className={styles.cartItem} key={index}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className={styles.cartItemImage} 
                    onError={(e) => e.target.src = 'https://via.placeholder.com/100'} 
                  />
                  <div className={styles.cartItemInfo}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <p className={styles.itemPrice}>
                      ${item.price !== undefined ? item.price.toFixed(2) : 'Precio no disponible'}
                    </p>
                    <button 
                      className={styles.removeButton} 
                      onClick={() => removeFromCart(index)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartSummary}>
              <h3 className={styles.summaryTitle}>Resumen del pedido</h3>
              <p className={styles.summaryText}>
                Subtotal: ${cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}
              </p>
              <p className={styles.summaryText}>Costo estimado por envío: $100.00</p>
              <h3 className={styles.totalText}>
                Total: ${(cart.reduce((total, item) => total + (item.price || 0), 0) + 100).toFixed(2)}
              </h3>
              <button className={styles.checkoutButton}>Guardar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

