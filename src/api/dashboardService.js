

import api from "./api";

export async function getDashboardData() {
  const [productsRes, categoriesRes] = await Promise.all([
    api.get("/products"),
    api.get("/categories"),
  ]);

  const products = productsRes.data;
  const categories = categoriesRes.data;

  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 10
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  return {
    totalProducts: products.length,
    totalCategories: categories.length,
    lowStock,
    outOfStock,
  };
}

