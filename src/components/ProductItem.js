import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart }) => {
  const price = product.price;

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p><strong>Marca:</strong> {product.brand}</p>
        <p><strong>Modelo:</strong> {product.model}</p>
        <p><strong>Precio:</strong> ${price !== undefined ? price.toFixed(2) : 'Precio no disponible'}</p>
        <button onClick={() => onAddToCart(product)} className="add-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductItem;
