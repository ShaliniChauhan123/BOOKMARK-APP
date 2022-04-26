import React from "react";

const CreatePopUpButton = (props) => {
  return props.foldername ? (
    <button disabled={!props.foldername} onClick={props.onClick1}>
      Create
    </button>
  ) : (
    <button>Create</button>
  );
};
export default CreatePopUpButton;
