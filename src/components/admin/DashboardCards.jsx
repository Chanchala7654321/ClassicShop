import { useEffect, useState } from "react";
import { getDashboardData } from "../../api/dashboardService";
import "./DashboardCards.css";

function DashboardCards() {
  const [dashboard, setDashboard] = useState({
    totalProducts: 0,
    totalCategories: 0,
    lowStock: 0,
    outOfStock: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getDashboardData();
      setDashboard(data);
    }

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      <div className="card">
        <span className="card-icon">📦</span>
        <h3>Total Products</h3>
        <h2>{dashboard.totalProducts}</h2>
      </div>

      <div className="card">
        <span className="card-icon">🏷</span>
        <h3>Categories</h3>
        <h2>{dashboard.totalCategories}</h2>
      </div>

      <div className="card">
        <span className="card-icon">⚠️</span>
        <h3>Low Stock</h3>
        <h2>{dashboard.lowStock}</h2>
      </div>

      <div className="card">
        <span className="card-icon">❌</span>
        <h3>Out of Stock</h3>
        <h2>{dashboard.outOfStock}</h2>
      </div>
    </div>
  );
}

export default DashboardCards;