import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../../routes/Dashboard/styles.css";
import Menubar from "../../Menubar";
import OpenFolderModal from "../../OpenFolderModal";
import { getFoldersApi, getRenameApi } from "../../../store/actions";
import threedots from "../../../routes/Dashboard/threedots.svg";
import SubFolderPopUp from "../../../routes/Dashboard/SubFolderPopUp";
import { handleFolderApi, openFolderAction } from "../../../store/actions";
import ChildFolder from "./childFolder";
const SidePopUpMenu = (props) => {
  const [apicall, setApicall] = useState(true);
  const [sidemodal, setSidemodal] = useState(false);
  const [subFoldermodal, setSubFoldermodal] = useState(false);
  const [openclick, setOpenclick] = useState(false);
  const [me, setMe] = useState(false);
  const handleMe = () => {
    setMe(!me);
  };
  const toggleSidePop = () => {
    setSidemodal(!sidemodal);
  };
  const addSubPopUp = () => {
    setSubFoldermodal(!subFoldermodal);
  };
  const handleOpenFolder = () => {
    setOpenclick(!openclick);
    if (!openclick && !props.array.children.length >= 1) {
      props.getFoldersApi({ pid: props.id, folders: props.getfolders });
    }
  };

  const { handleClick, handleClose, anchorEl } = props;
  const open = Boolean(anchorEl);
  const renameFunction = (id, name) => {
    let val = {
      id: id,
      name: name,
    };
    props.getRenameApi(val);
  };
  return (
    <div key={props.id} onClick={handleClick}>
      <div className="relative" onClick={handleMe}>
        <div
          key={props.id}
          className="folderComponent p-2 flex items-center justify-around cursor-pointer "
        >
          {openclick ? (
            <img
              className="folderarrowmargin"
              onClick={handleOpenFolder}
              src="https://bookmarksreact.netlify.app/static/media/open_folder_arrow.777d3be5.svg"
              alt="folder-down-arrow"
            />
          ) : (
            <img
              className="folderarrowmargin"
              onClick={handleOpenFolder}
              src="https://bookmarksreact.netlify.app/static/media/closed_folder_arrow.c1d97d5a.svg"
              alt="folder-arrow"
            />
          )}

          <img
            src="https://bookmarksreact.netlify.app/static/media/folder_icon.568ab9fe.svg"
            alt="folder-icon"
          />
          <p className="ml-2 text-gray-500 w-2/3">{props.name}</p>

          {props.showMenu ? (
            <Menubar toggleSidePop={toggleSidePop} />
          ) : (
            <div></div>
          )}
        </div>

        {openclick && props.openfolder ? (
          <div className="ml-3">
            {console.log("propschildrenarray", props.array.children)}
            {props.array.children != null &&
              props.array.children.map((i) => (
                <div key={i.id}>
                  <ChildFolder name={i.name} id={i.id} />
                </div>
              ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    children: store.bookmarkAppReducer.children,
    currentChildrens: store.bookmarkAppReducer.currentChildrens,
    getfolders: store.bookmarkAppReducer.getfolders,
    openfolder: store.bookmarkAppReducer.openfolder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFolderApi: (val, pid) => {
      dispatch(handleFolderApi(val, pid));
    },
    getFoldersApi: (val) => {
      dispatch(getFoldersApi(val));
    },
    getRenameApi: (val) => {
      dispatch(getRenameApi(val));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SidePopUpMenu);
