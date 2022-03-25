import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "../containers/AppContainer/Signin";
import Signup from "../containers/AppContainer/Signup";
import PageNotFound from "./PageNotFound";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
