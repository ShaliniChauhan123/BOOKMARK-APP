import React from "react";
import { Link } from 'react-router-dom';
import { loginData, handleInput1ChangeInRedux ,handleInput2ChangeInRedux} from "../../../store/actions";
import { connect } from "react-redux";
const Signin = (props) => {
  function handleLoginData() {
    props.loginData(props.login);
  }

  return (
    <div>

        
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
        <br></br>
        <br></br>
        <button onClick={handleLoginData}>
          Signin
        </button>
        <button><Link to="/signup">Signup</Link>
          
        </button>

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
