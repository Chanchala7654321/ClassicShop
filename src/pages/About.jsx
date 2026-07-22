import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-hero">
        <h1>About ClassicShop</h1>
        <p>
          Your trusted online shopping destination for quality products at
          affordable prices.
        </p>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
            alt="Shopping"
          />
        </div>

        <div className="about-content">

          <h2>Who We Are</h2>

          <p>
            ClassicShop is a modern e-commerce platform offering a wide range of
            products including electronics, fashion, furniture, groceries,
            beauty products, and much more.
          </p>

          <p>
            Our mission is to provide customers with the best shopping
            experience through quality products, secure payments, fast delivery,
            and excellent customer support.
          </p>

          <div className="about-stats">

            <div className="stat">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="stat">
              <h3>1000+</h3>
              <p>Products</p>
            </div>

            <div className="stat">
              <h3>100+</h3>
              <p>Brands</p>
            </div>

            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

      </div>

      <div className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="features">

          <div className="feature">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable shipping across the country.</p>
          </div>

          <div className="feature">
            <h3>🔒 Secure Payment</h3>
            <p>Your payments are protected with trusted gateways.</p>
          </div>

          <div className="feature">
            <h3>⭐ Quality Products</h3>
            <p>Only genuine and high-quality products.</p>
          </div>

          <div className="feature">
            <h3>💬 Customer Support</h3>
            <p>Friendly support team available whenever you need help.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;