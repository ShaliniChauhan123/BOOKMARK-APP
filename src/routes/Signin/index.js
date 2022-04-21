import "../../components/sharedcomponents/styles.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginData } from "../../store/actions";
import { connect } from "react-redux";
import Input from "../../components/sharedcomponents/Input";
import Button from "../../components/sharedcomponents/Button";

const Signin = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const navigate = useNavigate();
  function handleLoginData(e) {
    e.preventDefault();
    props.loginData(input1, input2, navigate);
  }
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
        onClick={(e) => {
          handleLoginData(e);
        }}
        buttonName="Signin"
      />

      <p>
        Don't have an account? <Link to="/signup">Signup here </Link> it takes
        less than a minute
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
    loginData: (val1, val2, navigate) => {
      dispatch(loginData(val1, val2, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
