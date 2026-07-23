import Sidebar from "../components/admin/Sidebar";
import CategoryForm from "../components/admin/CategoryForm";
import "./Dashboard.css";

function AddCategory() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Add Category</h1>

        <CategoryForm />
      </div>
    </div>
  );
}

export default AddCategory;