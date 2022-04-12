import "../../../AppContainer/components/sharedcomponents/styles.css";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginData } from "../../../../store/actions";
import { connect } from "react-redux";
import img from "../../../AppContainer/components/sharedcomponents/1.png";
import Input from "../sharedcomponents/inputfield";

const Signin = (props) => {
  const navigate = useNavigate();
  function handleLoginData() {
    props.loginData(props.login, navigate);
  }

  return (
    <div>
      {props.login.loading ? (
        <div className="loader"></div>
      ) : (
        <div className="boxform">
          <div className="left">
            <div className="overlay">
              <img className="img" src={img} />
            </div>
          </div>
          <div className="right">
            <h5>Login</h5>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">Create Your Account</Link> it takes less than a
              minute
            </p>
            <Input />

            <button
              disabled={
                !(props.login.loginEmailid && props.login.loginPassword)
              }
              onClick={handleLoginData}
            >
              Signin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    login: store.fetchDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginData: (val, navigate) => {
      dispatch(loginData(val, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
