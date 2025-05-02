export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload));
};
