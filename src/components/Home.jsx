import { Link } from 'react-router-dom';
import storeImage from '../assets/store.jpg';
import menClothing from '../assets/menClothing.jpg';
import electronics from '../assets/electronics.jpg';
import jewellery from '../assets/jewellery.jpg';
import womenClothing from '../assets/womenClothing.webp';
import '../styles/home.css';

export default function Home() {
  const categories = [
    {
      src: menClothing,
      alt: "Men's Clothing",
      label: "Men's Clothing",
      category: "men's clothing"
    },
    { 
      src: electronics, 
      alt: 'Electronics', 
      label: 'Electronics',
      category: "electronics"
    },
    { 
      src: jewellery, 
      alt: 'Jewellery', 
      label: 'Jewellery',
      category: "jewelery" 
    },
    {
      src: womenClothing,
      alt: "Women's Clothing",
      label: "Women's Clothing",
      category: "women's clothing"
    },
  ];

  return (
    <div className="home">
      <div className="flex justify-center gap-4 mt-8">
        <img
          src={storeImage}
          alt="home image"
          className="w-full h-[70vh] object-cover rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-center text-4xl font-bold mt-8">
        Welcome to the Store
      </h1>
      <p className="text-center text-lg mt-4">
        Explore our wide range of products and enjoy shopping!
      </p>
      <div className="cnt container mx-auto px-4 py-8">
        <ul className="gr grid grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <Link to={`/products?category=${item.category}`} className="brd flex flex-col items-center">
                <div className="bxshad brd w-[350px] h-[300px] rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="brd w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="txt">{item.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center w-full my-10">
        <Link
          to="/products"
          className="bttn mt-8 bg-[#4682b4] text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-300"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}