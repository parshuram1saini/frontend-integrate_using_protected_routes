import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}

export default ProtectedRoutes;
