import { useState } from "react";
import Hero from "../components/homes/Hero";
import ServiceFeatures from "../components/homes/ServiceFeatures";
import FeaturedCategories from "../components/homes/FeaturedCategories";
import Products from "../components/product/Products";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Hero />
      <ServiceFeatures />
      <FeaturedCategories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default Home;
