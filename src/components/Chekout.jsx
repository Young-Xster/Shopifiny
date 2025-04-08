import { Link } from 'react-router-dom';
import '../styles/products.css';
export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            height={100}
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank you for your purchase!
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Your order has been successfully placed. We hope to see you again
          soon!
        </p>

        <div className="">
          <Link to="/" className="add-to-cart">
            Return Home
          </Link>
          <Link to="/products" className="cont-Shop">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
