import React from "react";
import Signup from "../containers/AppContainer/components/Signup";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Signin from "../containers/AppContainer/components/Signin";
import Dashboard from "./Dashboard";

const AppRoutes = (props) => {
  return (
    <Router>
      <Routes>
        <Route index element={<Signin />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes authorised={props.login.authorised}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (store) => {
  return {
    login: store.fetchDataReducer,
  };
};

export default connect(mapStateToProps, null)(AppRoutes);
