import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Root from "./Root";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  ROOT_ROUTE,
} from "../utils/routeConstants";
import Signup from "../containers/AppContainer/components/Signup";
import SignIn from "../containers/AppContainer/components/Signin";
import Dashboard from "../containers/AppContainer/components/Dashboard/Dashboard";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to={DASHBOARD_ROUTE} /> : children;
};

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={LOGIN_ROUTE} />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Root />} />
        <Route
          path={LOGIN_ROUTE}
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path={REGISTER_ROUTE}
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path={DASHBOARD_ROUTE}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
