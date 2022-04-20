import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { handleMeapi, getFoldersApi } from "../../store/actions";
import { connect } from "react-redux";
import "./styles.css";
import PopUp from "./PopUp";
import SidePopUp from "./SidePopUp";
import linkimage from "./mainuplinkimage.svg";
import threedots from "./threedots.svg";
import {
  LINKS_ROUTE,
  IMAGES_ROUTE,
  TEXT_ROUTE,
} from "../../utils/routeConstants";
import Button from "../../components/sharedcomponents/Button";

const Dashboard = (props) => {
  useEffect(() => {
    props.handleMeapi();
    props.getFoldersApi();
    // eslint-disable-next-line
  }, []);
  let { id } = useParams();

  const [modal, setModal] = useState(false);
  const [sidemodal, setSidemodal] = useState(false);
  const togglePop = () => {
    setModal(!modal);
  };
  const toggleSidePop = () => {
    setSidemodal(!sidemodal);
  };

  return (
    <div className={modal ? "noscrolling" : ""}>
      <div className="top">
        <div className="topdiv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="cursor-pointer w-8 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
        <div className="topdiv0">
          <b>LOGO</b>
        </div>
        <div className="topdiv1">
          <div className={id === "links" ? "underline" : "nounderline"}>
            <Link to={LINKS_ROUTE}>Links</Link>
          </div>
          <div className={id === "images" ? "underline" : "nounderline"}>
            <Link to={IMAGES_ROUTE}>Images</Link>
          </div>

          <div className={id === "text" ? "underline" : "nounderline"}>
            <Link to={TEXT_ROUTE}>Text</Link>
          </div>
        </div>
        <div className="topdiv2">{props.name}</div>
      </div>
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
            <Button disabled={modal} onClick={togglePop} buttonName={"+"} />
          </li>
          {modal ? <PopUp toggle={togglePop} /> : null}
          <div className="modal1">
            <div className="modal11">
              Folders
              <img
                className="threedots"
                onClick={toggleSidePop}
                src={threedots}
                alt="threedots"
              />
              <div className="">
                {sidemodal ? <SidePopUp toggle={toggleSidePop} /> : null}
              </div>
            </div>
          </div>
          <li className="">
            {/* <p>
              Folders{" "}
              <img onClick={toggleSidePop} src={threedots} alt="threedots" />
            </p>
            {sidemodal ? <SidePopUp toggle={toggleSidePop} /> : null} */}
            {/* <table>
              <tbody>
                <tr>
                  <td>Folders</td>
                  <td>
                    <img onClick={toggleSidePop} src={threedots} alt="threedots" />
                  </td>
                </tr>
              </tbody>
            </table> */}

            <br></br>
            {props.name}
            <div className="modal1">
              {props.getfoldersname.map((i) => (
                <>
                  <div key={i.id} className="modal11">
                    {i.name}

                    <img
                      className="threedots"
                      onClick={toggleSidePop}
                      src={threedots}
                      alt="threedots"
                    />
                    <div className="">
                      {sidemodal ? (
                        <SidePopUp key={i.id} toggle={toggleSidePop} />
                      ) : null}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </li>
        </div>
        <div className="right1">
          <div className="main">
            {`${id}` === "links" ? (
              <div>
                <div className="mainup">
                  <div className="mainuplink">
                    <div className="mainleft">
                      <div className="white">
                        <h3>Add Quick Link</h3>
                        <br></br>
                        <div className="white">URL</div>
                        <br></br>
                        <input
                          //  className="rounded"
                          placeholder="Enter password"
                          // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <div className="white">Folder</div>
                        <br></br>
                        <input
                          // className="shortrounded"
                          placeholder="Enter password"
                          // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                        />
                        Save
                      </div>
                    </div>
                    <div className="mainright">
                      <img
                        className="movelinkimageright"
                        src={linkimage}
                        alt="linkimage"
                      />
                    </div>
                  </div>
                </div>
                <div className="maindown"></div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* <div className="footer"></div> */}
      </div>
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
