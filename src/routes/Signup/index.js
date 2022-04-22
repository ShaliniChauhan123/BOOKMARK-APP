import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerData } from "../../store/actions";
import { connect } from "react-redux";
import Input from "../../components/sharedcomponents/Input";
import { useNavigate } from "react-router-dom";
import "../../components/sharedcomponents/styles.css";
import Button from "../../components/sharedcomponents/Button";

const Signup = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    props.registerData(data.name, data.email, data.password, navigate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="inputs"
          placeholder="Name"
          name="name"
          type="name"
          register={register}
        />
        <Input
          className="inputs"
          placeholder={"Email"}
          name="email"
          type="email"
          register={register}
        />
        <Input
          className="inputs"
          placeholder={"Password"}
          name="password"
          type="password"
          register={register}
        />

        <br></br>
        <Button
          className="buttonclass"
          disabled={!isDirty || !isValid}
          // onClick={(e) => {
          //   handleLoginData(e);
          // }}
          buttonName="Signup"
          loading={props.loading}
        />
      </form>
      {/* <Input
        className="inputs"
        val={input}
        placeholder={"Name"}
        onChange={handleState}
      />
      <Input
        className="inputs"
        val={input1}
        placeholder={"Email address"}
        onChange={handleState1}
      />
      <Input
        className="inputs"
        val={input2}
        placeholder={"Password"}
        onChange={handleState2}
      />
      <br></br>
      <Button
        className="buttonclass"
        disabled={!(input1 && input2)}
        onClick={handleRegisterData}
        buttonName="Submit"
        loading={props.loading}
      /> */}

      <p>
        Already have an account? <Link to="/">Login here </Link>it takes less
        than a minute
      </p>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    loading: store.bookmarkAppReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerData: (val1, val2, val3, navigate) => {
      dispatch(registerData(val1, val2, val3, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
