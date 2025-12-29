import React from "react";
import { getToken } from "../Utils/common";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserInfoContext } from "../Context/UserInfoContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children, adminOnly, tutorOnly, studentOnly }) => {
  const token = getToken();

  const { user, isLoading, error } = useUserInfoContext();

  if (!token || error) return <Navigate to="/login" />;

  if (
    !isLoading &&
    ((adminOnly && user?.role !== "admin") ||
      (tutorOnly && user?.role !== "tutor") ||
      (studentOnly && user?.role !== "student"))
  ) {
    toast.warning(
      `Only ${
        adminOnly ? "admin" : tutorOnly ? "tutor" : "student"
      } can access the page`
    );
    return <Navigate to="/" />;
  }

  if (isLoading) return <Loading showFullScreen={true} />;

  return children;
};

export default ProtectedRoute;
