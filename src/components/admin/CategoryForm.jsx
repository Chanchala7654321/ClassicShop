import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addCategory,
  getCategoryById,
  updateCategory,
} from "../../api/categoryService";

import "./CategoryForm.css";

function CategoryForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      fetchCategory();
    }
  }, [id]);

  const fetchCategory = async () => {
    try {
      const data = await getCategoryById(id);

      setFormData({
        name: data.name,
        slug: data.slug,
        image: data.image,
        description: data.description,
      });
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updateCategory(id, formData);
        alert("Category Updated Successfully!");
      } else {
        await addCategory(formData);
        alert("Category Added Successfully!");
      }

      navigate("/admin/categories");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Category Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {id ? "Update Category" : "Add Category"}
      </button>
    </form>
  );
}

export default CategoryForm;