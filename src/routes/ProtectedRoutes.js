import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ authorised, children }) => {
  if (!authorised) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
