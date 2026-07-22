import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import "./Deals.css";

function Deals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeals() {
      try {
        const products = await getProducts();

        const dealProducts = products.filter(
          (product) => product.discount >= 20
        );

        setDeals(dealProducts.slice(0, 4));
      } catch (error) {
        console.error("Error loading deals:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDeals();
  }, []);

  if (loading) {
    return <h2>Loading Deals...</h2>;
  }

  return (
    <section className="deals">
      <div className="deals-header">
        <h2>🔥 Today's Deals</h2>
        <button>View All</button>
      </div>

      <div className="countdown">
        <span>Ends In:</span>

        <div className="time-box">02</div>
        <div className="time-box">15</div>
        <div className="time-box">30</div>
      </div>

      <div className="deals-grid">
        {deals.map((product) => (
          <div className="deal-card" key={product.id}>
            <span className="badge">{product.discount}% OFF</span>

            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="price">
              <span className="new">₹{product.price}</span>

              <span className="old">
                ₹{Math.round(product.price / (1 - product.discount / 100))}
              </span>
            </div>

            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;
