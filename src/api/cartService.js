

import api from "../api/api";

export const getCart = async () => {
  const res = await api.get("/cart");
  return res.data;
};

export const addToCart = async (item) => {
  const res = await api.post("/cart", item);
  return res.data;
};

export const updateCart = async (id, item) => {
  const res = await api.patch(`/cart/${id}`, item);
  return res.data;
};

export const deleteCartItem = async (id) => {
  await api.delete(`/cart/${id}`);
};