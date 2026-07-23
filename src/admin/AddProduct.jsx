import Sidebar from "../components/admin/Sidebar";
import ProductForm from "../components/admin/ProductForm";
import "./Dashboard.css";

function AddProduct() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Add Product</h1>

        <ProductForm />
      </div>
    </div>
  );
}

export default AddProduct;