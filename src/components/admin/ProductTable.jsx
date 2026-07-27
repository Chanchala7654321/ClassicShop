import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../../api/productService";
import "./ProductTable.css";

function ProductTable() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      // Refresh the table
      fetchProducts();

      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="table-container">
      <table className="product-table">
        <thead className="table-header">
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
              </td>

              <td>{product.title}</td>

              <td>{product.category}</td>

              <td>₹ {product.price}</td>

              <td>{product.stock}</td>

              <td>{product.rating}</td>

              <td style={{ minWidth: "150px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <Link to={`/admin/edit-product/${product.id}`}>
                    <button className="edit-btn" style={{ minWidth: "60px" }}>
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                    style={{ minWidth: "70px" }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;