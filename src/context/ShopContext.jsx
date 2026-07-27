import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCart, addToCart as apiAddToCart, updateCart as apiUpdateCart, deleteCartItem as apiDeleteCartItem } from "../api/cartService";
import { getWishlist, addToWishlist as apiAddToWishlist, removeFromWishlist as apiRemoveFromWishlist } from "../api/wishlistService";
import { useAuth } from "./AuthContext";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartData = await getCart();
        setCart(cartData);

        const wishlistData = await getWishlist();
        setWishlist(wishlistData);
      } catch (error) {
        console.error("Failed to fetch shop data:", error);
      }
    }
    
    fetchData();
  }, [user]);

  const addToCart = async (product) => {
    try {
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        const updated = await apiUpdateCart(existing.id, { quantity: existing.quantity + 1 });
        setCart((prev) => prev.map((item) => (item.id === product.id ? updated : item)));
        toast.info("Increased quantity in cart!");
      } else {
        const newItem = await apiAddToCart({ ...product, quantity: 1, id: product.id });
        setCart((prev) => [...prev, newItem]);
        toast.success("Added to cart!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  const removeFromCart = async (id) => {
    try {
      await apiDeleteCartItem(id);
      setCart((prev) => prev.filter((item) => item.id !== id));
      toast.error("Removed from cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove from cart");
    }
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    try {
      const updated = await apiUpdateCart(id, { quantity });
      setCart((prev) => prev.map((item) => (item.id === id ? updated : item)));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    }
  };

  const toggleWishlist = async (product) => {
    try {
      const existing = wishlist.find((item) => item.id === product.id);
      if (existing) {
        await apiRemoveFromWishlist(product.id);
        setWishlist((prev) => prev.filter((item) => item.id !== product.id));
        toast.error("Removed from wishlist");
      } else {
        const newItem = await apiAddToWishlist({ ...product, id: product.id });
        setWishlist((prev) => [...prev, newItem]);
        toast.success("Added to wishlist!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
