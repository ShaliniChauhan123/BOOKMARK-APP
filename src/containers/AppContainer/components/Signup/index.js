import React from "react";
import { registerData } from "../../../../store/actions";
import { connect } from "react-redux";
import img from "../../../AppContainer/components/sharedcomponents/image.svg";
import InputName from "../sharedcomponents/inputName";
import Input from "../sharedcomponents/inputfield";
import gluelabs from "../sharedcomponents/gluelabs.svg";
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
            <h5>
              <img src={gluelabs} />
            </h5>

            <h4>Signup</h4>
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
