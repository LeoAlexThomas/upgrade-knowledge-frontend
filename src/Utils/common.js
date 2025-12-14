export const tokenName = "token";

export const setToken = (token) => localStorage.setItem(tokenName, token);
export const getToken = () => localStorage.getItem(tokenName);
export const removeToken = () => localStorage.removeItem(tokenName);
