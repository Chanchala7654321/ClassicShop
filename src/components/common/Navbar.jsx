import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span>ClassicShop</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="search"
      />

      {/* Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {/* <li><Link to="/categories">Categories</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Side: Cart + Auth */}
      <div className="nav-right">
        {/* <Link to="/cart" className="cart-icon" title="Cart">
          🛒 <span className="cart-count">0</span>
        </Link> */}
        <Link to="/login" className="btn-login">Login</Link>
        <Link to="/signup" className="btn-signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;