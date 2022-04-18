import "./styles.css";
import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="inputs">
        <input
          className="inputForAuth"
          value={props.input1}
          placeholder="Enter emailid"
          onChange={props.handleState1}
        />
        {/* <br></br>
        <br></br> */}
        <input
          className="inputForAuth"
          value={props.input2}
          placeholder="Enter password"
          onChange={props.handleState2}
        />
      </div>
      {/* <br></br>
      <br></br> */}
    </div>
  );
};

export default Input;
