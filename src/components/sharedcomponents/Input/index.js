import "../../sharedcomponents/styles.css";
import React from "react";

const Input = (props) => {
  const {
    placeholder,
    type,
    name,
    className,
    register,
    pattern,
    patternval,
    minlength,
    maxlength,
  } = props;

  return (
    <div className={className}>
      {type === "email" ? (
        <input
          pattern={pattern}
          type={type}
          className="inputForAuth"
          placeholder={placeholder}
          {...register(name, {
            required: true,
            pattern: patternval,
          })}
        />
      ) : type === "password" ? (
        <input
          pattern={pattern}
          type={type}
          className="inputForAuth"
          placeholder={placeholder}
          {...register(name, {
            required: true,
            minLength: minlength,
          })}
        />
      ) : (
        <input
          pattern={pattern}
          type={type}
          className="inputForAuth"
          placeholder={placeholder}
          {...register(name, {
            required: true,
            maxLength: maxlength,
          })}
        />
      )}
    </div>
  );
};

export default Input;
