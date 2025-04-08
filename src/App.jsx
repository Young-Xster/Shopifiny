import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Chekout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
