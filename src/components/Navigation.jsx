import '../styles/navigation.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const { cartItems } = useCart();

  return (
    <nav className="flx">
      <h1>Shopifiny</h1>
      <form>
        <input type="text" placeholder="Search!" className="search" />
        <button type="submit" className="search-button">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart
            <span className="counter">{cartItems.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
