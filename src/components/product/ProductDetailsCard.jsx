import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../api/productService";
import { useShop } from "../../context/ShopContext";
import "./ProductDetailsCard.css";

function ProductDetailsCard() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useShop();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="details-page">

      <Link to="/products" className="back-btn">
        ← Back to Products
      </Link>

      <div className="details-card">

        <div className="details-image">

          <img
            src={product.thumbnail}
            alt={product.title}
          />

        </div>

        <div className="details-info">

          <h1>{product.title}</h1>

          <p className="brand">
            {product.brand}
          </p>

          <div className="rating">
            ⭐ {product.rating}
          </div>

          <h2 className="price">
            ₹ {product.price}
          </h2>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <p className="description">
            {product.description}
          </p>

          <div className="buttons">

            <button className="cart-btn" onClick={() => addToCart(product)}>
              🛒 Add To Cart
            </button>

            <button 
              className={`wish-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
            >
              {isWishlisted ? '❤️ Remove From Wishlist' : '💙 Add To Wishlist'}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetailsCard;