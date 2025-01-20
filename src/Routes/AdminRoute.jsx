import React from "react";
import UseAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isAdmin, isLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <progress className="progress w-56 my-20 flex justify-center bg-green-600"></progress>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
