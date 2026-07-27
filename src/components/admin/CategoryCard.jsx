import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "../../api/categoryService";

import "./CategoryCard.css";

function CategoryCard() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    await deleteCategory(id);

    fetchCategories();

    alert("Category Deleted Successfully!");
  };

  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
          <div className="card-top">
            <img src={category.image} alt={category.name} />

            <div className="actions">
              <Link to={`/admin/edit-category/${category.id}`}>
                <button className="edit-btn">Update</button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => handleDelete(category.id)}
              >
                Delete
              </button>
            </div>
          </div>

          <h3>{category.name}</h3>

          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
