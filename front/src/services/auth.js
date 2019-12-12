export const TOKEN_KEY = "@CESTA/token";
export const TOKEN_EXPIRATION = "@cesta/expireIn"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {

  localStorage.setItem(TOKEN_KEY, token);
  const dataExpire = new Date();
  localStorage.setItem(
    TOKEN_EXPIRATION,
    dataExpire.setDate(dataExpire.getDate() + 1));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRATION);
};
