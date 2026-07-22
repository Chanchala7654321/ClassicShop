import { useEffect, useState } from "react";
import { getProducts } from "../../api/productService";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ title = "Featured Products", limit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();

        if (limit) {
          setProducts(data.slice(0, limit));
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [limit]);

  return (
    <section className="product-grid-section">
      <h2>{title}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;