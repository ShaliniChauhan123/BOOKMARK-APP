import React from "react";
import { Link } from 'react-router-dom';
import { registerData, handleInputChangeInRedux,
handleInput1ChangeInRedux,
handleInput2ChangeInRedux} from "../../../store/actions";
import { connect } from "react-redux";
import img from '../../AppContainer/1.png';
const Signup = (props) => {
  function handleRegisterData() {
    props.registerData(props.login);
    //console.log("$$$$$props.login",props.login);
  }

  return (
    <div>{props.login.loading?<div className="loader"></div>:<div className="boxform">
<div className="left">
  <div className="overlay">
<img className="img" src={img}/>
</div></div>  
  <div className="right">
  <h5>Signup</h5>
  <div className='inputs'>
  <input
          value={props.login.name}
          placeholder="Enter name"
          onChange={(e) => props.handleInputChangeInRedux(e.target.value)}
        />
        <br></br>
        <br></br>
        
      <input
          value={props.login.emailId}
          placeholder="Enter emailid"
          onChange={(e) => props.handleInput1ChangeInRedux(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          value={props.login.password}
          placeholder="Enter password"
          onChange={(e) => props.handleInput2ChangeInRedux(e.target.value)}
        />
  </div>

        <br></br>
        <br></br>
        <button onClick={handleRegisterData}>
          Submit
        </button>
        {/* <button><Link to="/">Signin</Link>
           
        </button> */}

      </div>
      </div>}
      </div>
    
  );
};
const mapStateToProps = (store) => {
  return {
    login: store.fetchDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerData: (val) => {
      dispatch(registerData(val));
    },
    handleInputChangeInRedux: (val) => {
        dispatch(handleInputChangeInRedux(val));
      },
    handleInput1ChangeInRedux: (val) => {
      dispatch(handleInput1ChangeInRedux(val));
    },
    handleInput2ChangeInRedux: (val) => {
        dispatch(handleInput2ChangeInRedux(val));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
