import '../styles/products.css';
import '../styles/cart.css';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal.toFixed(2));
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">
          Add some products to your cart to see them here!
        </p>
      </div>
    );
  }

  return (
    <div className="products-container mt-20">
      <h1 className="text-center text-3xl font-bold mb-8">Your Cart</h1>
      <ul className="product-list">
        {cartItems.map((product) => (
          <li key={product.id} className="product">
            <div className="image-container">
              <img src={product.image} alt={product.title} className="image" />
            </div>
            <div className="description-container">
              <h3 className="product-title">{product.title}</h3>
              <h3 className="product-price">${product.price}</h3>
              <p className="product-description">{product.description}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="btn-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center w-full py-6 px-4 bg-gray-100 mt-8 rounded-lg">
        <h2 className="text-xl font-bold">Total: ${total}</h2>
        <div className="flex justify-center w-full my-10">
          <a
            href="/checkout"
            className="bttn mt-8 bg-[#4682b4] text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-300"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
