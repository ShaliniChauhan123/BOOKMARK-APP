import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerData } from "../../../../store/actions";
import { connect } from "react-redux";
import img from "../../../AppContainer/components/sharedcomponents/image.svg";
import InputName from "../sharedcomponents/inputName";
import gluelabs from "../sharedcomponents/gluelabs.svg";
import { useNavigate } from "react-router-dom";
import "../../../AppContainer/components/sharedcomponents/styles.css";

const Signup = (props) => {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const navigate = useNavigate();
  function handleRegisterData() {
    props.registerData(input, input1, input2, navigate);
  }
  const handleState = (e) => {
    setInput(e.target.value);
  };
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

            <h4>Signup</h4>
            <InputName
              input={input}
              input1={input1}
              input2={input2}
              handleState={handleState}
              handleState1={handleState1}
              handleState2={handleState2}
            />

            <br></br>
            <br></br>
            <button onClick={handleRegisterData}>Submit</button>

            <p>
              Already have an account?
              <Link to="/">Login here </Link>
            </p>
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
    registerData: (val, navigate) => {
      dispatch(registerData(val, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
