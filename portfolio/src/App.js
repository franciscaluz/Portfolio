import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HomepageScreen from "./screens/HomepageScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import DevScreen from "./screens/DevScreen";
import WebDesignScreen from "./screens/WebDesignScreen";
import ProjectScreen from "./screens/ProjectScreen";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomepageScreen />
        </Route>
        <Route path="/portfolio" exact>
          <PortfolioScreen />
        </Route>
        <Route path="/dev" exact>
          <DevScreen />
        </Route>
        <Route path="/web-design" exact>
          <WebDesignScreen />
        </Route>
        <Route path="/project/:slug">
          <ProjectScreen />
        </Route>
      </Switch>
    </>
  );
}

export default App;
