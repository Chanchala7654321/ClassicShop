import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import "./WishlistCard.css";

function WishlistCard() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item); // removes it since it was already in wishlist
  };

  if (wishlist.length === 0) {
    return (
      <div className="empty">
        <h2>Your Wishlist is Empty ❤️</h2>

        <Link to="/products">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">

      <Link to="/products" className="back-btn">
        ← Continue Shopping
      </Link>

      <h1>My Wishlist ❤️</h1>

      <div className="wishlist-grid">

        {wishlist.map((item) => (
          <div className="wishlist-card" key={item.id}>

            <img
              src={item.thumbnail}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <h2>₹ {item.price}</h2>

            <div className="buttons">

              <button
                className="cart-btn"
                onClick={() => handleMoveToCart(item)}
              >
                Add To Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => toggleWishlist(item)}
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default WishlistCard;