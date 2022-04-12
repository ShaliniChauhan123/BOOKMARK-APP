import { Navigate } from "react-router-dom";
import React from "react";

const Root = () => {
  const isUserPresent = localStorage.getItem("token");
  console.log("@@@present", isUserPresent);
  return isUserPresent ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

export default Root;
