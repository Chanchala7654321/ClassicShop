import { Link } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import CategoryCard from "../components/admin/CategoryCard";
import "./Dashboard.css";
import "./Categories.css";

function Categories() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <div className="category-header">
          <div>
            <h1>Categories</h1>
            <p>Organize your catalog.</p>
          </div>

          <Link to="/admin/add-category">
            <button className="add-category-btn">
              ➕ Add Category
            </button>
          </Link>
        </div>

        <CategoryCard />
      </div>
    </div>
  );
}

export default Categories;