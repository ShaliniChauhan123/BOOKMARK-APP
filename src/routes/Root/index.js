import { Navigate } from "react-router-dom";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants";

const Root = () => {
  if (localStorage.getItem("token")) {
    return <Navigate to={DASHBOARD_ROUTE} />;
  }

  return <Navigate to={LOGIN_ROUTE} />;
};
export default Root;
