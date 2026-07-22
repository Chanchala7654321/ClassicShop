import api from "../api/api";

export const getHeroSlides = async () => {
  const response = await api.get("/heroSlides");
  return response.data;
};