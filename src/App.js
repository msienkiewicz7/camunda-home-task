import React from "react";
// import route stuff
import { Switch, Route } from "react-router-dom";

// import Navigation component
import Navigation from "./components/Navigation";
// import HomePage component
import HomePage from "./pages/HomePage";
// import ModelerPage component
import ModelerPage from "./pages/ModelerPage";

import FrameworksPage from "./pages/FrameworksPage";


export default () => (
  <div>
    {/* render a navigation component */}
    <Navigation />

    {/* render routing logic of react-router-dom */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/modeler">
        <ModelerPage />
      </Route>
      <Route path="/frameworks">
        <FrameworksPage />
      </Route>
    </Switch>
  </div>
);
