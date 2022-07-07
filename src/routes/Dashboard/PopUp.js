import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { handleFolderApi } from "../../store/actions";
import "./popUpstyles.css";

const PopUp = (props) => {
  const {
    register,
    handleSubmit,

    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const handleClick = () => {
    props.toggle();
  };

  const onSubmit = (data) => {
    console.log("@@@checking", data);
    props.handleFolderApi(data);
  };
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4>Create folder</h4>
          </div>
          <div>Folder Name</div>
          <label>
            <input
              className="foldernameinput"
              name="foldername"
              placeholder="Enter Folder Name"
              type="foldername"
              {...register("foldername")}
            />
            <div>
              <button disabled={!isDirty || !isValid}>Create</button>
            </div>
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
