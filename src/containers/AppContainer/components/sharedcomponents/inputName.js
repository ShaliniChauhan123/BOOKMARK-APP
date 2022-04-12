import React from "react";
import { handleInputChangeInRedux } from "../../../../store/actions";
import { connect } from "react-redux";

const InputName = (props) => {
  return (
    <div>
      <div className="inputs">
        <input
          value={props.login.name}
          placeholder="Enter name"
          onChange={(e) => props.handleInputChangeInRedux(e.target.value)}
        />
        <br></br>
        <br></br>
      </div>
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
    handleInputChangeInRedux: (val) => {
      dispatch(handleInputChangeInRedux(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputName);
