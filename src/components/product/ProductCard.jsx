import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="discount">-{product.discountPercentage}%</span>

        <button className="wishlist">❤</button>

        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="brand">{product.brand}</p>

        <div className="rating">⭐ {product.rating}</div>

        <div className="price">
          <span className="new-price">₹{product.price}</span>

          <span className="old-price">
            ₹
            {Math.round(
              product.price + (product.price * product.discountPercentage) / 100
            )}
          </span>
        </div>

        <button className="view-btn">View Details</button>

        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
