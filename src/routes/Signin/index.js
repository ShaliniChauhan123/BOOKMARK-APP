import "../../components/sharedcomponents/styles.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginData } from "../../store/actions";
import { connect } from "react-redux";
import Input from "../../components/sharedcomponents/Input";
import Button from "../../components/sharedcomponents/Button";

const Signin = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    props.loginData(data.email, data.password, navigate);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="inputs"
          placeholder="Email"
          name="email"
          type="email"
          register={register}
          pattern={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        />
        {errors.email && <p>Please check the Email</p>}
        <Input
          className="inputs"
          placeholder={"Password"}
          name="password"
          type="password"
          register={register}
          minlength={6}
        />
        {errors.password && <p>Please check the Password</p>}
        <br></br>
        <Button
          className="buttonclass"
          disabled={!isDirty || !isValid}
          // onClick={(e) => {
          //   handleLoginData(e);
          // }}
          buttonName="Signin"
          loading={props.loading}
        />
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here </Link> it takes
        less than a minute
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
    loginData: (val1, val2, navigate) => {
      dispatch(loginData(val1, val2, navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
