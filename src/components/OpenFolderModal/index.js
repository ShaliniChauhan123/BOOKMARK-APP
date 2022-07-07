import React, { useEffect, useState } from "react";
import { getFoldersApi } from "../../store/actions";
import { connect } from "react-redux";

const OpenFolderModal = (props) => {
  return (
    <div>
      {props.openFolder ? (
         

        <div className="">{props.getFoldersApi({ pid: props.pid })}</div>
      ) : null}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getFoldersApi: (val) => {
      dispatch(getFoldersApi(val));
    },
  };
};

export default connect(null, mapDispatchToProps)(OpenFolderModal);
