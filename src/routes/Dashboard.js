import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { handleMeapi } from "../store/actions";
import { connect } from "react-redux";

const Dashboard = (props) => {
  useEffect(() => {
    props.handleMeapi(navigate);
  }, []);
  const navigate = useNavigate();
  return <div>jjjj click me hiiiiii......... {props.login.name}</div>;
};
const mapStateToProps = (store) => {
  return {
    login: store.fetchDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMeapi: (val) => {
      dispatch(handleMeapi(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
