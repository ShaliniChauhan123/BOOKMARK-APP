import React, { useState } from "react";

import "../popUpstyles.css";

import SubFolderPopUp from "../SubFolderPopUp";
const SidePopUp = (props) => {
  const [subFoldermodal, setSubFoldermodal] = useState(false);
  const addSubPopUp = () => {
    setSubFoldermodal(!subFoldermodal);
  };

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
