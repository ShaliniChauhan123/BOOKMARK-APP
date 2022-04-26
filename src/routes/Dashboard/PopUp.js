import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { handleFolderApi } from "../../store/actions";
import "./popUpstyles.css";

const PopUp = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const handleClick = () => {
    props.toggle();
  };

  const onSubmit = (data) => {
    console.log("@@@checking", data.foldername);
    props.handleFolderApi(data.foldername);
  };
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Create Folder</h3>
          <label>
            Folder Name
            <input
              name="foldername"
              placeholder="Enter Folder Name"
              type="foldername"
              {...register("foldername")}
            />
            <button disabled={!isDirty || !isValid}>Create</button>
          </label>
          <br />
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderApi: (val) => {
      dispatch(handleFolderApi(val));
    },
  };
};

export default connect(null, mapDispatchToProps)(PopUp);
