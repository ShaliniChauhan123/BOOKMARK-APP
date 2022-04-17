import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { handleMeapi, getFoldersApi } from "../../../../store/actions";
import { connect } from "react-redux";
import "./dashboardstyles.css";
import PopUp from "./PopUp";
import linkimage from "./mainuplinkimage.svg";
import threedots from "./threedots.svg";

const Dashboard = (props) => {
  useEffect(() => {
    props.handleMeapi();
    props.getFoldersApi();
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
          <li className="sidenav2">
            <table>
              <tbody>
                <tr>
                  <td>Folders</td>
                  <td>
                    <img onClick={togglePop} src={threedots} />
                  </td>
                </tr>
              </tbody>
            </table>

            <br></br>
            {props.getfoldersname.map((i) => (
              <>
                {i.name}
                <br></br>
              </>
            ))}
          </li>
        </div>
        <div className="right1">
          <div className="header">
            <table>
              <tbody>
                <tr>
                  <td
                    onClick={routechangelinks}
                    className={clicklink ? "underline" : "nounderline"}
                  >
                    Links
                  </td>
                  <td
                    onClick={routechangeimages}
                    className={clickimage ? "underline" : "nounderline"}
                  >
                    Images
                  </td>
                  <td
                    onClick={routechangetext}
                    className={clicktext ? "underline" : "nounderline"}
                  >
                    Text
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main">
            {clicklink ? (
              <div>
                <div className="mainup">
                  <div className="mainuplink">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h3>Add Quick Link</h3>
                          </td>
                          <td rowSpan={5}>
                            <img
                              className="movelinkimageright"
                              src={linkimage}
                            />
                          </td>
                        </tr>
                        <tr className="rowpadding">
                          <td className="white">URL</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="rounded"
                              placeholder="Enter password"
                              // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="white">Folder</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="shortrounded"
                              placeholder="Enter password"
                              // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                            />
                          </td>
                          <td className="white">SaveS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="maindown"></div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="footer"></div>
        </div>
      </div>
      <button>
        <Link to="/">login</Link>
      </button>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    name: store.bookmarkAppReducer.name,
    getfoldersname: store.bookmarkAppReducer.getfolders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMeapi: () => {
      dispatch(handleMeapi());
    },
    getFoldersApi: () => {
      dispatch(getFoldersApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
