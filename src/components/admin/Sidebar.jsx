import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>ClassicShop</h2>
        <p>Admin Panel</p>
      </div>

      <nav className="sidebar-menu">

        <Link to="/admin">
          📊 Dashboard
        </Link>

        <Link to="/admin/products">
          📦 Manage Products
        </Link>

        <Link to="/admin/add-product">
          ➕ Add Product
        </Link>

        <Link to="/admin/categories">
          🏷 Categories
        </Link>

        <Link to="/">
          🏠 Back to Store
        </Link>

        <a href="/login" onClick={handleLogout}>
          🚪 Logout
        </a>

      </nav>

    </aside>
  );
}

export default Sidebar;