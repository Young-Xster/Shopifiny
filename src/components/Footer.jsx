import '../styles/footer.css';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-lg">© {year} Shopifiny. All rights reserved.</p>
        <p>Enjoy shopping with us! Stay stylish & trendy.</p>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
