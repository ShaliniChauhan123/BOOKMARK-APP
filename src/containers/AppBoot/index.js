import React from "react";
import AppRoutes from "../../routes";
import AppContainer from "../AppContainer";
const App = (props) => {
  return (
    <div>
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </div>
  );
};

export default App;
