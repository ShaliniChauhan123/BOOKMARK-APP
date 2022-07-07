import React, { useState } from "react";
import "../../routes/Dashboard/styles.css";
import { Link } from "react-router-dom";
import PopUp from "../../routes/Dashboard/PopUp";
import SidePopUpMenu from "../dashboardcomponents/sidePopUpMenu";
import AddLinkPopUp from "../dashboardcomponents/AddLinkPopUp";
import AddFolder from "../AddFolder";
import { connect } from "react-redux";
const LeftNav = (props) => {
  const {
    clickFoldersUnderlineFalse,
    clickTagsUnderline,
    tagsUnderline,
    foldersUnderlineFalse,
    modal,
    togglePop,
    getfoldersname,
  } = props;
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <li className="sidenav2">
        <Link to="/projects">
          <button className="projectsButton">All Projects</button>
        </Link>
      </li>
      <li className="sidenav2">
        <Link to="/root">Root</Link>
      </li>
      <li className="sidenav2">
        <Link to="/favourites">Favourites</Link>
      </li>
      <li className="sidenav2">
        <div
          className={
            foldersUnderlineFalse ? "nounderline" : "underlineForFolders"
          }
          onClick={clickFoldersUnderlineFalse}
        >
          Folders
        </div>
        <div
          className={tagsUnderline ? "underlineForTags" : "nounderline"}
          onClick={clickTagsUnderline}
        >
          Tags
        </div>
      </li>

      {foldersUnderlineFalse ? (
        <div></div>
      ) : (
        <div>
          <div className="sidenav2">
            <div className="foldersdown">
              <form className="nosubmit">
                <input
                  className="nosubmit"
                  type="search"
                  placeholder="Search..."
                ></input>
              </form>
            </div>

            {/* <img src={search} alt="search" /> */}
            <div className="tagsdown">
              {" "}
              <button
                className="plusButton"
                disabled={modal}
                onClick={togglePop}
              >
                +
              </button>
            </div>

            {/* +
                </button> */}
            {modal && (
              <AddFolder
                togglePop={togglePop}
                toggleAddLink={props.toggleAddLink}
                modal={modal}
                getfolders={getfoldersname}
              />
            )}
          </div>

          <br></br>
          <div className="folderList p-2 flex-auto overflow-auto">
            {console.log("getfolders", props.getfolders)}
            {props.getfolders != null ? (
              props.getfolders.map((i) => (
                <div key={i.id} className="folders flex-col">
                  <SidePopUpMenu
                    name={i.name}
                    id={i.id}
                    array={i}
                    showMenu={true}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    handleClick={handleClick}
                  />
                </div>
              ))
            ) : (
              <div className="loader"></div>
            )}
          </div>
          {/* </li> */}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    getfolders: store.bookmarkAppReducer.getfolders,
    //getfoldersname: store.bookmarkAppReducer.getfolders,
  };
};
export default connect(mapStateToProps, null)(LeftNav);

//export default LeftNav;
