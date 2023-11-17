import React from "react";

import "./Styles/App.css";
import "./Styles/Variables.css";
import "./Styles/Buttons.css";
import "./Styles/Core.css";
import "./Styles/Containers.css";
import "./Styles/Animations.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyParticles from "./components/MyParticles/MyParticles";
import Intro from "./pages/Intro/Intro";

function App() {
  return (
    <div className="my-app">
      <MyParticles />
      <Intro />
    </div>
  );
}

export default App;
