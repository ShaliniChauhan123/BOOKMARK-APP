import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerData } from "../../store/actions";
import { connect } from "react-redux";
import Input from "../../components/sharedcomponents/Input";
import { useNavigate } from "react-router-dom";
import "../../components/sharedcomponents/styles.css";
import Button from "../../components/sharedcomponents/Button";

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
      <Input
        className="inputs"
        val={input}
        placeholder={"Your Name"}
        onChange={handleState}
      />
      <Input
        className="inputs"
        val={input1}
        placeholder={"Email address"}
        onChange={handleState1}
      />
      <Input
        className="inputs"
        val={input2}
        placeholder={"Password"}
        onChange={handleState2}
      />
      <br></br>
      <Button
        className="buttonclass"
        disabled={!(input1 && input2)}
        onClick={handleRegisterData}
        buttonName="Submit"
      />
      {/* <p>
        Already have an account?
        <Link to="/"> Login here </Link>
      </p> */}
      <p>
        Already have an account? <Link to="/">Login here </Link>it takes less
        than a minute
      </p>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    loading: store.bookmarkAppReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerData: (val1, val2, val3, navigate) => {
      dispatch(registerData(val1, val2, val3, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
