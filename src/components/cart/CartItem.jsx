import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import "./Cart.css";

function CartItem() {
  const { cart, updateQuantity, removeFromCart } = useShop();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-page">

      <Link to="/products" className="back-btn">
        ← Continue Shopping
      </Link>

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-card" key={item.id}>

                <img
                  src={item.thumbnail}
                  alt={item.title}
                />

                <div className="cart-info">

                  <h3>{item.title}</h3>

                  <p>₹ {item.price}</p>

                  <div className="qty">

                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

        {cart.length > 0 && (
          <div className="summary">

            <h2>Order Summary</h2>

            <p>
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </p>

            <p>
              <span>Shipping</span>
              <span>Free</span>
            </p>

            <p>
              <span>Tax</span>
              <span>₹ {tax.toFixed(2)}</span>
            </p>

            <hr />

            <h3>
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </h3>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default CartItem;