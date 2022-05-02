import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { handleMeapi, getFoldersApi } from "../../store/actions";
import { connect } from "react-redux";
import "./styles.css";
import LeftNav from "../../components/LeftNav";
import PopUp from "./PopUp";
import search from "../../components/sharedcomponents/search.svg";
import linkimage from "./mainuplinkimage.svg";
import threedots from "./threedots.svg";
import {
  LINKS_ROUTE,
  IMAGES_ROUTE,
  TEXT_ROUTE,
} from "../../utils/routeConstants";
import SidePopUpMenu from "../../components/dashboardcomponents/sidePopUpMenu";
import Button from "../../components/sharedcomponents/Button";
import AddLinkPopUp from "../../components/dashboardcomponents/AddLinkPopUp";

const Dashboard = (props) => {
  useEffect(() => {
    props.handleMeapi();
    props.getFoldersApi();
    // eslint-disable-next-line
  }, []);
  let { id } = useParams();

  const [modal, setModal] = useState(false);
  const [addLink, setAddLink] = useState(false);
  const [leftNav, setLeftNav] = useState(false);
  const [foldersUnderline, setFoldersUnderline] = useState(false);
  const [tagsUnderline, setTagsUnderline] = useState(false);
  const clickFoldersUnderline = () => {
    setFoldersUnderline(true);
    setTagsUnderline(false);
  };
  const clickTagsUnderline = () => {
    setTagsUnderline(true);
    setFoldersUnderline(false);
  };
  const togglePop = () => {
    setModal(!modal);
  };
  const toggleAddLink = () => {
    setAddLink(!addLink);
  };
  const handleLeftNav = () => {
    setLeftNav(!leftNav);
  };
  // const handleFolders = () => {
  //   setFoldersUnderline(!foldersUnderline);
  // };
  return (
    <div className={modal ? "noscrolling" : ""}>
      <div className="top">
        <div onClick={handleLeftNav} className="topdiv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="cursor-pointer w-8 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
        {leftNav ? (
          <div
            className="fixed inset-0 overflow-y-auto z-20 bg-layoutBackground py-4 px-4 w-40 h-full border-r transition duration-500 ease-in-out transform   md:relative md:translate-x-0 
      "
          >
            {" "}
            <div className="cancel" onClick={handleLeftNav}>
              X
            </div>
            <div className="flex flex-col space-y-3 mt-4 ml-1">
              <LeftNav
                modal={modal}
                clickFoldersUnderline={clickFoldersUnderline}
                clickTagsUnderline={clickTagsUnderline}
                foldersUnderline={foldersUnderline}
                tagsUnderline={tagsUnderline}
                togglePop={togglePop}
                getfoldersname={props.getfoldersname}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
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
        <div className={"left1"}>
          <h1></h1>
          <LeftNav
            modal={modal}
            clickFoldersUnderline={clickFoldersUnderline}
            clickTagsUnderline={clickTagsUnderline}
            foldersUnderline={foldersUnderline}
            tagsUnderline={tagsUnderline}
            togglePop={togglePop}
            getfoldersname={props.getfoldersname}
          />
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
                          className="rounded"
                          placeholder="Url"
                          // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <div className="white">Folder</div>
                        <br></br>
                        <input
                          className="shortrounded"
                          placeholder="Folder"
                          // onChange={(e) => props.handleInputQuickLink(e.target.value)}
                        />
                        <button className="whitebutton">Save</button>
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
                <div className="maindown">
                  <div className="h-full w-full flex items-center">
                    <div className="w-1/2 flex py-3 items-center justify-around">
                      <div className="w-6/7">
                        <div className="mainInput w-full h-full rounded-xl">
                          <input
                            type="text"
                            placeholder="🔍   Search"
                            className="w-full h-full p-3 rounded-lg bg-gray-200"
                          />
                        </div>
                      </div>
                      <div className="p-3 flex items-center justify-center rounded-lg border-2 border-solid border-gray-200">
                        <img
                          src="https://bookmarksreact.netlify.app/static/media/filter_icon.ff8ae6be.svg"
                          alt="filtericon"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                      <div className="w-1/4">
                        <div className="mainButton w-full h-full rounded-xl">
                          <button
                            className="rounded-lg w-full py-2 rounded-3xl border-2 border-solid border-app-blue hover:bg-app-gray"
                            // style="background-color: rgba(0, 0, 0, 0); color: rgb(106, 135, 230);"
                          >
                            + ADD LINK
                          </button>
                        </div>
                      </div>
                      <div className="w-1/4">
                        <div className="dashboardListViewSelector w-2/3 bg-gray-200 ml-2 rounded-lg flex">
                          <div className="gridIcon flex w-1/2 items-center justify-center p-2 rounded-l-lg cursor-pointer bg-app-blue">
                            <div>
                              <img
                                src="/static/media/grid_icon.8e08b02e.svg"
                                alt="gridicon"
                                className="my-1 mr-1"
                              />
                              <img
                                src="/static/media/grid_icon.8e08b02e.svg"
                                alt="gridicon"
                                className="my-1 "
                              />
                            </div>
                            <div>
                              <img
                                src="/static/media/grid_icon.8e08b02e.svg"
                                alt="gridicon"
                                className="my-1 mr-1"
                              />
                              <img
                                src="/static/media/grid_icon.8e08b02e.svg"
                                alt="gridicon"
                                className="my-1"
                              />
                            </div>
                          </div>
                          <div className="listIcon flex items-center justify-center w-1/2 h-full p-3 rounded-r-lg cursor-pointer ">
                            <img
                              src="/static/media/list_icon.3e833105.svg"
                              alt="listicon"
                              className="ml-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
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
