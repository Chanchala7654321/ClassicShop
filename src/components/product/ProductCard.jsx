import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="product-card">

      <div className="product-image">


        <button 
          className={`wishlist ${isWishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted ? '❤️' : '💙'}
        </button>

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



        </div>

        <Link to={`/products/${product.id}`}>
          <button className="view-btn">
            View Details
          </button>
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="cart-btn"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;