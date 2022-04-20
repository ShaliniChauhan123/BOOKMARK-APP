import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/sharedcomponents/Button";
import { handleFolderApi } from "../../../store/actions";
import "../popUpstyles.css";
import Input from "../../../components/sharedcomponents/Input";
import PopUp from "../PopUp";
import SubFolderPopUp from "../SubFolderPopUp";
const SidePopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  const [subFoldermodal, setSubFoldermodal] = useState(false);
  const addSubPopUp = () => {
    setSubFoldermodal(!subFoldermodal);
  };
  const handleFolderNameChange = (e) => {
    setFoldername(e.target.value);
  };
  const [foldername, setFoldername] = useState("");
  return (
    <div className="sidemodal">
      <ul onClick={addSubPopUp}>
        Add sub folder
        {subFoldermodal ? (
          <SubFolderPopUp key={props.key} toggle={addSubPopUp} />
        ) : null}
      </ul>
      <ul>Rename</ul>
      <ul>Delete</ul>
    </div>
  );
};
// const mapStateToProps = (store) => {
//   return {
//     foldername: store.bookmarkAppReducer.foldername,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleFolderApi: (val) => {
//       dispatch(handleFolderApi(val));
//     },
//   };
// };

export default SidePopUp;
