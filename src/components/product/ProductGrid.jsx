import { useEffect, useState } from "react";
import { getProducts } from "../../api/productService";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ title = "Featured Products", limit, selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        let filtered = data;

        if (selectedCategory) {
          filtered = data.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
        }

        if (limit) {
          setProducts(filtered.slice(0, limit));
        } else {
          setProducts(filtered);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [limit, selectedCategory]);

  return (
    <section className="product-grid-section">
      <h2>{title} {selectedCategory && `- ${selectedCategory}`}</h2>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default ProductGrid;