import threedots from "../../routes/Dashboard/threedots.svg";
const Menubar = (props) => {
  return (
    <img
      className="threedots"
      onClick={props.toggleSidePop}
      src={threedots}
      alt="threedots"
    />
  );
};
export default Menubar;
