import Sidebar from "../components/admin/Sidebar";
import ProductForm from "../components/admin/ProductForm";
import "./Dashboard.css";

function EditProduct() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Edit Product</h1>

        <ProductForm />
      </div>
    </div>
  );
}

export default EditProduct;