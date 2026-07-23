import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getWishlist,
  removeFromWishlist,
} from "../../api/wishlistService";
import { addToCart } from "../../api/cartService";
import "./WishlistCard.css";

function WishlistCard() {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    const data = await getWishlist();
    setWishlist(data);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemove = async (id) => {
    await removeFromWishlist(id);
    fetchWishlist();
  };

  const handleMoveToCart = async (item) => {
    const cartItem = {
      userId: item.userId,
      productId: item.productId,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      quantity: 1,
    };

    await addToCart(cartItem);
    await removeFromWishlist(item.id);

    fetchWishlist();

    alert("Moved to Cart");
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
                onClick={() => handleRemove(item.id)}
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