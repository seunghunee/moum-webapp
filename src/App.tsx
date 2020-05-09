import React from "react";

import BodyCon from "./components/BodyCon";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <BodyCon />
    </>
  );
};

export default App;
