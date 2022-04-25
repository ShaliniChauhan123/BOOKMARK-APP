import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/sharedcomponents/Button";
import { handleFolderApi } from "../../store/actions";
import "./popUpstyles.css";
import Input from "../../components/sharedcomponents/Input";
import CreatePopUpButton from "./CreatePopUpButton";

const PopUp = (props) => {
  const [folderApiClick, setFolderApiClick] = useState(false);
  const [foldername, setFoldername] = useState("");
  const handleClick = () => {
    props.toggle();
  };
  const handleFolderNameChange = (e) => {
    setFoldername(e.target.value);
  };
  const handleFolderApiClick = () => {
    setFolderApiClick(true);
    props.handleFolderApi(foldername);
  };

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
            <input
              value={foldername}
              placeholder="Enter Folder Name"
              onChange={handleFolderNameChange}
            />
            {/* <CreatePopUpButton
              foldername={foldername}
              onClick1={handleFolderApiClick} 
            /> */}
            {foldername ? (
              <button
                disabled={!foldername}
                onClick={props.handleFolderApi(foldername)}
              >
                Create
              </button>
            ) : (
              <button onClick={handleFolderApiClick}>Create2</button>
            )}
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
