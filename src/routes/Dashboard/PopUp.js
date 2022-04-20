import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/sharedcomponents/Button";
import { handleFolderApi } from "../../store/actions";
import "./popUpstyles.css";
import Input from "../../components/sharedcomponents/Input";

const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  const handleFolderNameChange = (e) => {
    setFoldername(e.target.value);
  };
  const [foldername, setFoldername] = useState("");
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <form>
          <h3>Create Folder</h3>
          <label>
            Folder Name
            <Input
              value={foldername}
              placeholder="Enter Folder Name"
              onChange={handleFolderNameChange}
            />
            {console.log(";;;;", foldername)}
            <Button
              disabled={!foldername}
              onClick={props.handleFolderApi(foldername)}
              buttonName="Create"
            />
          </label>
          <br />
        </form>
      </div>
    </div>
  );
};
// const mapStateToProps = (store) => {
//   return {
//     foldername: store.bookmarkAppReducer.foldername,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderApi: (val) => {
      dispatch(handleFolderApi(val));
    },
  };
};

export default connect(null, mapDispatchToProps)(PopUp);
