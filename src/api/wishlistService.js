import api from "./api";

export const getWishlist = async () => {
  const response = await api.get("/wishlist");
  return response.data;
};

export const addToWishlist = async (item) => {
  const response = await api.post("/wishlist", item);
  return response.data;
};

export const removeFromWishlist = async (id) => {
  await api.delete(`/wishlist/${id}`);
};