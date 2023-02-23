import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const login = localStorage.getItem("login");
  console.log(login);
  if (login === "false" ) {
	console.log(login,',,,')
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
