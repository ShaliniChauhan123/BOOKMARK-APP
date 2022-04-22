import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

const AppContainer = (props) => {
  const { children } = props;
  const customId = "custom-id-yes";
  return (
    <React.Fragment>
      {props.showAlert &&
        toast(props.message, {
          toastId: customId,
        }) && <ToastContainer />}
      {children}
      {console.log("checker")}
    </React.Fragment>
  );
};
const mapStateToProps = (store) => {
  return {
    message: store.bookmarkAppReducer.message,
    showAlert: store.bookmarkAppReducer.showAlert,
  };
};

export default connect(mapStateToProps, null)(AppContainer);
