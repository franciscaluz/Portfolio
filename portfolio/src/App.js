import React from "react";
import { Route, Switch } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import HomepageScreen from "./screens/HomepageScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import DevScreen from "./screens/DevScreen";
import WebDesignScreen from "./screens/WebDesignScreen";
import GraphicDesignScreen from "./screens/GraphicDesignScreen";
import ProjectScreen from "./screens/ProjectScreen";
import InfosScreen from "./screens/InfosScreen";
import Test from "./screens/test";

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
        <Route path="/graphic-design" exact>
          <GraphicDesignScreen />
        </Route>
        <Route path="/project/:slug">
          <ProjectScreen />
        </Route>
        <Route path="/infos">
          <InfosScreen />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </>
  );
}

export default App;
