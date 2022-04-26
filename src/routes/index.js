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
import Signup from "./Signup";
import SignIn from "./Signin";
import Dashboard from "./Dashboard";
import Template from "../containers/AuthTemplate";

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
              <Template children={<SignIn />} />
            </PublicRoute>
          }
        />
        <Route
          path={REGISTER_ROUTE}
          element={
            <PublicRoute>
              <Template children={<Signup />} />
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
        >
          <Route
            path={`${DASHBOARD_ROUTE}/:id`}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
