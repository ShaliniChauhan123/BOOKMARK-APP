import React from "react";
import { connect } from "react-redux";
import {
  handleFolderNameChangeInRedux,
  handleFolderApi,
} from "../../../../store/actions";
import "./popUpstyles.css";

const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  const folderApi = () => {
    props.handleFolderApi(props.foldername);
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
              value={props.foldername}
              placeholder="Enter Folder Name"
              onChange={(e) =>
                props.handleFolderNameChangeInRedux(e.target.value)
              }
            />
          </label>
          <br />
          <div onClick={folderApi}>Create</div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    foldername: store.bookmarkAppReducer.foldername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderNameChangeInRedux: (val) => {
      dispatch(handleFolderNameChangeInRedux(val));
    },
    handleFolderApi: (val) => {
      dispatch(handleFolderApi(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
