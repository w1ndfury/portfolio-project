import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Piano from "./features/Piano/Piano.";
import LandingPage from "./pages/Landing/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/piano",
    element: <Piano />,
  },
]);
