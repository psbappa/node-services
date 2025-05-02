import jwtDecode from "jwt-decode";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwtDecode(token); // { id, role }
  } catch (e) {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
