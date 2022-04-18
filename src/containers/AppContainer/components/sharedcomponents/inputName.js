import React from "react";
import Input from "./inputfield";

const InputName = (props) => {
  return (
    <div>
      <div className="inputs">
        <input
          className="inputForAuth"
          value={props.input}
          placeholder="Enter name"
          onChange={props.handleState}
        />
        {/* <br></br>
        <br></br> */}
        <Input
          input1={props.input1}
          input2={props.input2}
          handleState1={props.handleState1}
          handleState2={props.handleState2}
        />
      </div>
    </div>
  );
};

export default InputName;
