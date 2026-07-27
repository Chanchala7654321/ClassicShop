import ProductGrid from "./ProductGrid";

function Products({ selectedCategory }) {
  return (
    <>
      <ProductGrid title="All Products" selectedCategory={selectedCategory} />
    </>
  );
}

export default Products;