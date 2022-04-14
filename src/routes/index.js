import React from "react";
import Signup from "../containers/AppContainer/components/Signup";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Signin from "../containers/AppContainer/components/Signin";
import Dashboard from "../containers/AppContainer/components/Dashboard/Dashboard";

const AppRoutes = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/links"
          element={
            <ProtectedRoutes authorised={props.authorised}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/images"
          element={
            <ProtectedRoutes authorised={props.authorised}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/text"
          element={
            <ProtectedRoutes authorised={props.authorised}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes authorised={props.authorised}>
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
    authorised: store.bookmarkAppReducer.authorised,
  };
};

export default connect(mapStateToProps, null)(AppRoutes);
