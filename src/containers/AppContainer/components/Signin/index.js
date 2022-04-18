import "../../../AppContainer/components/sharedcomponents/styles.css";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginData } from "../../../../store/actions";
import { connect } from "react-redux";
import img from "../../../AppContainer/components/sharedcomponents/image.svg";
import gluelabs from "../sharedcomponents/gluelabs.svg";
import Input from "../sharedcomponents/inputfield";

const Signin = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const navigate = useNavigate();
  function handleLoginData(e) {
    e.preventDefault();
    props.loginData(input1, input2, navigate);
  }

  props.login.authorised ? <Navigate to="/dashboard" /> : <Navigate to="/" />;

  const handleState1 = (e) => {
    setInput1(e.target.value);
  };
  const handleState2 = (e) => {
    setInput2(e.target.value);
  };
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
            <h5>
              <img src={gluelabs} />
            </h5>

            <Input
              input1={input1}
              input2={input2}
              handleState1={handleState1}
              handleState2={handleState2}
            />

            <p>
              Don't have an account?{" "}
              <Link to="/signup">Create Your Account</Link> it takes less than a
              minute
            </p>

            <button
              disabled={!(input1 && input2)}
              onClick={(e) => {
                handleLoginData(e);
              }}
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
    login: store.bookmarkAppReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginData: (val1, val2, navigate) => {
      dispatch(loginData(val1, val2, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
