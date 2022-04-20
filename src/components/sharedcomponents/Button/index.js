import React from "react";
const Button = (props) => {
  const { disabled, buttonName, onClick } = props;
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};
export default Button;
