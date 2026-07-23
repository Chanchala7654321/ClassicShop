import Sidebar from "../components/admin/Sidebar";
import ProductTable from "../components/admin/ProductTable";
import "./Dashboard.css";

function ManageProducts() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Manage Products</h1>

        <ProductTable />
      </div>
    </div>
  );
}

export default ManageProducts;