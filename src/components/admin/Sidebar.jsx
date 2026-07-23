import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
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

        <Link to="/login">
          🚪 Logout
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;