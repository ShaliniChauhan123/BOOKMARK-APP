import React, { useState } from "react";
import { connect } from "react-redux";
import "../../../routes/Dashboard/styles.css";
import threedots from "../../../routes/Dashboard/threedots.svg";
import SubFolderPopUp from "../../../routes/Dashboard/SubFolderPopUp";
import { handleFolderApi } from "../../../store/actions";
const SidePopUpMenu = (props) => {
  const [sidemodal, setSidemodal] = useState(false);
  const [subFoldermodal, setSubFoldermodal] = useState(false);
  const toggleSidePop = () => {
    setSidemodal(!sidemodal);
    // props.handleFolderApi();
  };
  const addSubPopUp = () => {
    setSubFoldermodal(!subFoldermodal);
  };
  return (
    <div key={props.key}>
      <div className="relative">
        <div className="folderComponent p-2 flex items-center justify-around cursor-pointer ">
          <img
            src="https://bookmarksreact.netlify.app/static/media/closed_folder_arrow.c1d97d5a.svg"
            alt="folder-arrow"
          />

          <img
            src="https://bookmarksreact.netlify.app/static/media/folder_icon.568ab9fe.svg"
            alt="folder-icon"
          />
          <p className="ml-2 text-gray-500 w-2/3">{props.name}</p>
          {/* <div className="spacing">{props.name}</div> */}
          <img
            className="threedots"
            onClick={toggleSidePop}
            src={threedots}
            alt="threedots"
          />
        </div>
      </div>
      <div className="">
        {sidemodal ? (
          <div className="sidemodal">
            <ul onClick={addSubPopUp}>
              Add sub folder
              {/* {subFoldermodal ? <SubFolderPopUp key={props.key} /> : null} */}
            </ul>
            {subFoldermodal ? (
              <SubFolderPopUp key={props.key} toggle={addSubPopUp} />
            ) : null}
            <ul>Rename</ul>
            <ul>Delete</ul>
          </div>
        ) : //   <SidePopUp key={props.key} toggle={props.toggleSidePop} />
        null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderApi: (val, pid) => {
      dispatch(handleFolderApi(val, pid));
    },
  };
};
export default connect(null, mapDispatchToProps)(SidePopUpMenu);
