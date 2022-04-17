import "./styles.css";
import React from "react";
import {
  handleInput1ChangeInRedux,
  handleInput2ChangeInRedux,
} from "../../../../store/actions";
import { connect } from "react-redux";

const Input = (props) => {
  return (
    <div>
      <div className="inputs">
        <input
          className="inputForAuth"
          value={props.login.emailId}
          placeholder="Enter emailid"
          onChange={(e) => props.handleInput1ChangeInRedux(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          className="inputForAuth"
          value={props.login.password}
          placeholder="Enter password"
          onChange={(e) => props.handleInput2ChangeInRedux(e.target.value)}
        />
      </div>
      <br></br>
      <br></br>
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
    handleInput1ChangeInRedux: (val) => {
      dispatch(handleInput1ChangeInRedux(val));
    },
    handleInput2ChangeInRedux: (val) => {
      dispatch(handleInput2ChangeInRedux(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
