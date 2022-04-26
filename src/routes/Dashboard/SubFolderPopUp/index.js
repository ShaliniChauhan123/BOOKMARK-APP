import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { handleFolderApi } from "../../../store/actions";
import "../popUpstyles.css";

const SubFolderPopUp = (props) => {
  const {
    register,
    handleSubmit,

    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const handleClick = () => {
    props.toggle();
    console.log("!!!!");
  };

  const onSubmit = (data) => {
    console.log("@@@checking", data.foldername);
    //  props.handleFolderApi(data.foldername,props.key);
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

export default connect(null, mapDispatchToProps)(SubFolderPopUp);
