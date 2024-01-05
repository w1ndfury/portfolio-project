import React from "react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

import "./Styles/App.css";
import "./Styles/Variables.css";
import "./Styles/Buttons.css";
import "./Styles/Core.css";
import "./Styles/Containers.css";
import "./Styles/Animations.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyParticles from "./features/MyParticles/MyParticles";

export function Shell() {
  return (
    <div className="my-app">
      <RouterProvider router={router} />
    </div>
  );
}
