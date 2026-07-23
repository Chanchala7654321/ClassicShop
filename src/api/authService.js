import api from "../api/api";

export const loginUser = async (email, password) => {
  const response = await api.get("/users");

  const user = response.data.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  return user || null;
};