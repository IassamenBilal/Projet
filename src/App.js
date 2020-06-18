import React from "react";
import logo from "./logo.svg";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accueil from "./components/Accueil";

import PlanMaintenance from "./components/PlanMaintenance";
import CreerPlanDeMaintenance from "./components/CreerPlanDeMaintenance";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Accueil}></Route>
        <Route
          path="/planmaintenance"
          exact
          component={PlanMaintenance}
        ></Route>
        <Route
          path="/creerplandemaintenance"
          exact
          component={CreerPlanDeMaintenance}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
