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
    <div>
      {props.name}

      <img
        className="threedots"
        onClick={toggleSidePop}
        src={threedots}
        alt="threedots"
      />
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
