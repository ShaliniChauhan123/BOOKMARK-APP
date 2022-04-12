import React from "react";
import { registerData } from "../../../../store/actions";
import { connect } from "react-redux";
import img from "../../../AppContainer/components/sharedcomponents/1.png";
import InputName from "../sharedcomponents/inputName";
import Input from "../sharedcomponents/inputfield";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  function handleRegisterData() {
    props.registerData(props.login, navigate);
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
            <h5>Signup</h5>
            <InputName />
            <Input />
            <br></br>
            <br></br>
            <button onClick={handleRegisterData}>Submit</button>
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
    registerData: (val, navigate) => {
      dispatch(registerData(val, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
