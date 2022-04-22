import React from "react";

const Button = (props) => {
  const { disabled, buttonName, onClick, className } = props;
  return (
    <div className={className}>
      <button disabled={disabled} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};
export default Button;
