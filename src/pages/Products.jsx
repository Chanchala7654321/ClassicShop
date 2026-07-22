import { useEffect, useState } from "react";
import ProductGrid from "../components/product/ProductGrid";
import { getHeroSlides } from "../api/heroService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default Products;