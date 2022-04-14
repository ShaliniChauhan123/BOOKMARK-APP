import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { handleMeapi } from "../../../../store/actions";
import { connect } from "react-redux";
import "./dashboardstyles.css";
import PopUp from "./PopUp";

const Dashboard = (props) => {
  useEffect(() => {
    props.handleMeapi();
  }, []);
  const navigate = useNavigate();
  const [seen, setSeen] = useState(false);
  const [clicklink, setClicklink] = useState(false);
  const [clickimage, setClickimage] = useState(false);
  const [clicktext, setClicktext] = useState(false);
  const togglePop = () => {
    setSeen(!seen);
  };
  const routechangelinks = () => {
    navigate("/links");
    setClicklink(true);
    setClickimage(false);
    setClicktext(false);
  };
  const routechangeimages = () => {
    navigate("/images");
    setClicklink(false);
    setClickimage(true);
    setClicktext(false);
  };
  const routechangetext = () => {
    navigate("/text");
    setClicklink(false);
    setClickimage(false);
    setClicktext(true);
  };

  return (
    <div>
      <div className="parent">
        <div className="left1">
          <h2 className="sidenav1">
            <b>LOGO</b>
          </h2>
          <li className="sidenav2">
            <Link to="/projects">
              <button>All Projects</button>
            </Link>
          </li>
          <li className="sidenav2">
            <Link to="/root">Root</Link>
          </li>
          <li className="sidenav2">
            <Link to="/favourites">Favourites</Link>
          </li>
          <li className="sidenav2">Folders Tags</li>
          <li className="sidenav2">
            <button className="plus" onClick={togglePop}>
              +
            </button>
          </li>
          {seen ? <PopUp toggle={togglePop} /> : null}
        </div>
        <div className="right1">
          <div className="header">
            <table>
              <tbody>
                <tr>
                  <td
                    onClick={routechangelinks}
                    className={clicklink ? "nounderline" : "underline"}
                  >
                    Links
                  </td>
                  <td
                    onClick={routechangeimages}
                    className={clickimage ? "nounderline" : "underline"}
                  >
                    Images
                  </td>
                  <td
                    onClick={routechangetext}
                    className={clicktext ? "nounderline" : "underline"}
                  >
                    Text
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main">
            <div className="mainup"></div>
            <div className="maindown"></div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
      jjjj click me hiiiiii......... {props.name}
      <button>
        <Link to="/">login</Link>
      </button>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    name: store.bookmarkAppReducer.name,
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
