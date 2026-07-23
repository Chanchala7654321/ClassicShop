import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="product-card">

      <div className="product-image">

        <span className="discount">
          -{product.discountPercentage}%
        </span>

        <button className="wishlist">❤</button>

        <Link to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>

      </div>

      <div className="product-info">

        <Link
          to={`/products/${product.id}`}
          className="product-title"
        >
          <h3>{product.title}</h3>
        </Link>

        <p className="brand">{product.brand}</p>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="price">

          <span className="new-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹
            {Math.round(
              product.price +
                (product.price * product.discountPercentage) / 100
            )}
          </span>

        </div>

        <Link to={`/products/${product.id}`}>
          <button className="view-btn">
            View Details
          </button>
        </Link>

        <button
          onClick={() => handleAddToCart(product)}
          className="cart-btn"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;