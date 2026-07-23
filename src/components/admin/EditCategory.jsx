import Sidebar from "./Sidebar";
import CategoryForm from "./CategoryForm";
// import "./Dashboard.css";

function EditCategory() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Edit Category</h1>

        <CategoryForm />
      </div>
    </div>
  );
}

export default EditCategory;