import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { handleMeapi} from "../store/actions";
import { connect } from "react-redux";
const Dashboard = (props) => {
  useEffect(()=>{
    props.handleMeapi()
  },[])
  const history=useHistory()
  // if(!props.login.authorised)
  // {
  //   return <Navigate to="/" />
  // }
  return (
    <div>jjjj
      click me 
     {/* ooo{props.handleMeapi} */}
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
    handleMeapi: () => {
        dispatch(handleMeapi());
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
