import "../../sharedcomponents/styles.css";
import React from "react";

const Input = (props) => {
  const { placeholder, val, onChange, className } = props;
  return (
    <div className={className}>
      <input
        className="inputForAuth"
        value={val}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
