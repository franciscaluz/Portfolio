import React from "react";
import { Route, Switch } from "react-router-dom";
import HomepageScreen from "./screens/HomepageScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import DevScreen from "./screens/DevScreen";
import WebDesignScreen from "./screens/WebDesignScreen";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomepageScreen} />
        <Route path="/portfolio" component={PortfolioScreen} />
        <Route path="/dev" component={DevScreen} />
        <Route path="/web-design" component={WebDesignScreen} />
      </Switch>
    </>
  );
}

export default App;
