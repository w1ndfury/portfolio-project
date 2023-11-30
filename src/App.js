import React from "react";

import "./Styles/App.css";
import "./Styles/Variables.css";
import "./Styles/Buttons.css";
import "./Styles/Core.css";
import "./Styles/Containers.css";
import "./Styles/Animations.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyParticles from "./features/MyParticles/MyParticles";
import Intro from "./pages/Intro/Intro";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Piano from "./features/Piano/Piano.";

function App() {
  return (
    <div className="my-app">
      <MyParticles />
      <Router>
        <Route path="/portfolio-project" exact component={Intro} />
        <Route path="/portfolio-project/piano" component={Piano} />
      </Router>
    </div>
  );
}

export default App;
