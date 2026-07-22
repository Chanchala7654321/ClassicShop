import { useLoaderData } from "react-router-dom";
import Hero from "../components/homes/Hero";
import ServiceFeatures from "../components/homes/ServiceFeatures";
import FeaturedCategories from "../components/homes/FeaturedCategories";
import Products from "../components/product/Products";

function Home() {
  
  return (
    <div>
      <Hero />
      <ServiceFeatures />
      <FeaturedCategories />
      <Products />
    </div>
  );
}

export default Home;
