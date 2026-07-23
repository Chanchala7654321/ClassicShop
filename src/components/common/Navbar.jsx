import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
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

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="search"
      />

      {/* Navigation */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
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
          ❤️
        </Link>

        <Link to="/cart" className="icon">
          🛒
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
                <h4>{user.name}</h4>

                <p>{user.email}</p>

                <hr />

                <Link
                  to="/profile"
                  onClick={() => setShowMenu(false)}
                >
                  My Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setShowMenu(false)}
                >
                  My Orders
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setShowMenu(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}

                <button onClick={handleLogout}>
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