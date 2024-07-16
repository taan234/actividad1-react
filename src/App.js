// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ReturnOrder from './components/ReturnOrder';
import { CartProvider } from './context/CartContext'; 
import './App.css';

// Simulamos una lista de productos con precios, imágenes e URLs
const sampleProducts = [
  { id: 1, name: 'Azul plomo recto', Talla: 'S', model: '122453', price: 599, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURpJFIzO2k_PonIW0coHaBuDWmkPpwuBIlA&s' },
  { id: 2, name: 'Rojo largo con mangas', Talla: 'M', model: '122454', price: 649, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQb7pyF6wm1eJrY4_6oAqXRHagHYFb9kWLEw&s' },
  { id: 3, name: 'Verde lencero largo', Talla: 'XS', model: '122455', price: 800, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7m8hzyKcAClO7YE35NgIzW5uqOnbjA1GWSQ&s' },
  { id: 4, name: 'Amarillo corte princesa', Talla: 'M', model: '122456', price: 999, imageUrl: 'https://i.blogs.es/0766db/fiesta-rainbow-frida-1/650_1200.jpeg' },
  { id: 4, name: 'Lila Abertura en pierna', Talla: 'L', model: '122457', price: 760, imageUrl: 'https://static.mariquitatrasquila.com/27224-product_list_default/vestido-verona.jpg' },
  { id: 4, name: 'Rosa y Negro largo', Talla: 'XL', model: '122458', price: 850, imageUrl: 'https://nuribel.com/wp-content/uploads/2022/06/vestido-largo-fiesta-combinado-negro-y-rosa.jpg' },
  { id: 4, name: 'Azul Rey Elegante', Talla: 'S', model: '122459', price: 999, imageUrl: 'https://www.luda-dress.com/cdn/shop/products/MP220_444x.jpg?v=1585356738' },

  // Agrega más productos según sea necesario
];

const App = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.Talla.toLowerCase().includes(query.toLowerCase()) ||
        product.model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <CartProvider>
      <Router>
        <div className="appContainer">
          <Header />
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/acerca-de" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/productos" element={
                <div>
                  <ProductList products={filteredProducts} onSearch={handleSearch} />
                </div>
              } />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/pagar" element={<Checkout />} />
              <Route path="/devolver-pedido" element={<ReturnOrder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
