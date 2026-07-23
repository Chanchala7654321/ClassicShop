import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addProduct,
  getProductById,
  updateProduct,
} from "../../api/productService";

import "./ProductForm.css";

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        const data = await getProductById(id);
        setFormData(data);
      }

      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await updateProduct(id, formData);
      alert("Product Updated Successfully!");
    } else {
      await addProduct(formData);
      alert("Product Added Successfully!");
    }

    navigate("/admin/products");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Product Name"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="thumbnail"
        placeholder="Image URL"
        value={formData.thumbnail}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;