import "../../routes/Dashboard/styles.css";
import { Link } from "react-router-dom";
import PopUp from "../../routes/Dashboard/PopUp";
import SidePopUpMenu from "../dashboardcomponents/sidePopUpMenu";
const LeftNav = (props) => {
  const {
    clickFoldersUnderline,
    clickTagsUnderline,
    tagsUnderline,
    foldersUnderline,
    modal,
    togglePop,
    getfoldersname,
  } = props;
  return (
    <div>
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
      <li className="sidenav2">
        <div>
          <a
            className={foldersUnderline ? "underline" : "nounderline"}
            onClick={clickFoldersUnderline}
          >
            Folders
          </a>

          <a
            className={tagsUnderline ? "underline" : "nounderline"}
            onClick={clickTagsUnderline}
          >
            Tags
          </a>
        </div>
      </li>

      {foldersUnderline ? (
        <div>
          <li className="sidenav2">
            <form className="nosubmit">
              <input
                className="nosubmit"
                type="search"
                placeholder="Search..."
              ></input>
            </form>
            {/* <img src={search} alt="search" /> */}
            <button className="plusButton" disabled={modal} onClick={togglePop}>
              +
            </button>
            {/* +
                </button> */}
            {modal && <PopUp toggle={togglePop} />}
          </li>
          <li className="scrollinglist">
            <br></br>
            {props.name}
            <div className="modal1">
              {getfoldersname.map((i) => (
                <div key={i.id} className="modal11">
                  <SidePopUpMenu name={i.name} key={i.id} />
                </div>
              ))}
            </div>
          </li>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default LeftNav;
