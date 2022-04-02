import '../../AppContainer/styles.css';
import React from "react";
import { Navigate, Link } from 'react-router-dom';
import { loginData, handleInput1ChangeInRedux ,handleInput2ChangeInRedux} from "../../../store/actions";
import { connect } from "react-redux";
import img from '../../AppContainer/1.png';
const Signin = (props) => {
  function handleLoginData() {
    props.loginData(props.login);
  }

  return (<div>{props.login.loading?<div className="loader"></div>:<div className="boxform">

  <div className="left">
  <div className="overlay">
<img className="img" src={img}/>
</div></div>  
  <div className="right">
  <h5>Login</h5>
  <p>Don't have an account? <Link to="/signup">Create Your Account</Link> it takes less than a minute</p>
  <div className='inputs'>
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
    <button disabled={!(props.login.loginEmailid&&props.login.loginPassword)} onClick={handleLoginData}>
      
    Signin
    </button>
{/* {localStorage.getItem('token')?
    <Navigate to="/dashboard" />
    :<Navigate to="/" />} */}
    {/* {localStorage.getItem('token') && (
        <div>
           Name: <p>{localStorage.getItem('token')}</p>
        </div>
     )} */}
     
   
  </div>
  

  </div>
}
   




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
    loginData: (val) => {
      dispatch(loginData(val));
    },

    handleInput1ChangeInRedux: (val) => {
      dispatch(handleInput1ChangeInRedux(val));
    },
    handleInput2ChangeInRedux: (val) => {
        dispatch(handleInput2ChangeInRedux(val));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
