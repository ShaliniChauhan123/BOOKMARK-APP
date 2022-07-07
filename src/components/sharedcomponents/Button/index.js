import React from "react";
import "../styles.css";
const Button = (props) => {
  const { disabled, buttonName, className } = props;
  return (
    <div className={className}>
      <button disabled={disabled} className="activebutton">
        {props.loading ? (
          <div>
            loading...<div className="loader"></div>
          </div>
        ) : (
          buttonName
        )}
      </button>
    </div>
  );
};
export default Button;
