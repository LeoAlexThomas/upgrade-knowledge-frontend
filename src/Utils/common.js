export const tokenName = "token";

export const setToken = (token) => localStorage.setItem(tokenName, token);
export const getToken = () => localStorage.getItem(tokenName);
export const removeToken = () => localStorage.removeItem(tokenName);

export const userRoles = ["tutor", "student"];

export const getUserRoleLabel = (role) => {
  switch (role) {
    case "tutor":
      return "Tutor";
    case "student":
      return "Student";
  }
};

export const unAuthorizedPaths = [
  "/login",
  "/register",
  "/forgotPassword",
  "/resetPassword",
];
