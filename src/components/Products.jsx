import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/products.css';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState(categoryParam || 'all');
  const { addToCart } = useCart();

  // http://localhost:5119/api/Items

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched products:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    sort === 'all'
      ? products
      : products.filter((product) => product.category === sort);

  if (loading)
    return <div className="text-center py-10">Loading products...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="products">
      <div className="select-container">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="all">All Products</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="products-container">
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image"
                />
              </div>
              <div className="description-container">
                <h3 className="product-title">{product.title}</h3>
                <h3 className="product-price">${product.price}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart"
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
