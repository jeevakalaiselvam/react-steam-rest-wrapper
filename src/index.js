import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGames from "./pages/AllGames/AllGames";
import "./index.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import AchievementsHistory from "./pages/AchievementsHistory/AchievementsHistory";
import AllAchievements from "./pages/AllAchievements/AllAchievements";
import Milestones from "./pages/Milestones/Milestones";

console.clear();

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/all-games'>
        <AllGames />
      </Route>
      <Route path='/all-achievements'>
        <AllAchievements />
      </Route>
      <Route path='/achievements-history'>
        <AchievementsHistory />
      </Route>
      <Route path='/milestones'>
        <Milestones />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
