import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaBoxOpen,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowMenu(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        ClassicShop
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        {user?.role === "admin" && (
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
        )}
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <Link to="/wishlist" className="icon">
          <FaHeart />
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingCart />
        </Link>

        {!user ? (
          <Link to="/login" className="btn-login">
            Login
          </Link>
        ) : (
          <div className="profile-wrapper">
            <div
              className="avatar"
              onClick={() => setShowMenu(!showMenu)}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>

            {showMenu && (
              <div className="profile-menu">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <FaUserCircle />
                  </div>

                  <div>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>

                <hr />

                <Link
                  to="/profile"
                  onClick={() => setShowMenu(false)}
                >
                  <FaUserCircle />
                  My Profile
                </Link>

                <Link
                  to="/cart"
                  onClick={() => setShowMenu(false)}
                >
                  <FaBoxOpen />
                  My Orders
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setShowMenu(false)}
                  >
                    <FaTachometerAlt />
                    Admin Dashboard
                  </Link>
                )}

                <button onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;