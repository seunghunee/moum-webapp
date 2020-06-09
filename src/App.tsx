import React, { Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import BodyCon from "./components/BodyCon";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    // TODO: Suspense를 공부한 후 알맞은 장소에 놓기
    <Suspense fallback={"Loading..."}>
      <CssBaseline />
      <Header />
      <BodyCon />
    </Suspense>
  );
};

export default App;
