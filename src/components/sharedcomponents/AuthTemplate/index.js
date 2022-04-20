import React from "react";
import { connect } from "react-redux";
import img from "../image.svg";
import gluelabs from "../gluelabs.svg";
import "../styles.css";

const Template = (props) => {
  const { children } = props;
  return (
    <div>
      {props.loading ? (
        <div className="loader"></div>
      ) : (
        <div className="boxform">
          <div className="left">
            <div className="overlay">
              <img className="img" src={img} alt="boypic" />
            </div>
          </div>
          <div className="right">
            <h5>
              <img src={gluelabs} alt="gluelabspic" />
            </h5>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    loading: store.bookmarkAppReducer.loading,
  };
};
export default connect(mapStateToProps, null)(Template);
