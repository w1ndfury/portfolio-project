import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Piano from "./features/Piano/Piano.";
import LandingPage from "./pages/Landing/Landing";
import TicTacToe from "./features/TicTacToe/TicTacToe";
import Playground from "./pages/Playground/Playground";

export const router = createBrowserRouter([
  {
    path: "/portfolio-project",
    element: <Intro />,
  },
  {
    path: "/portfolio-project/home",
    element: <LandingPage />,
  },
  {
    path: "/portfolio-project/playground",
    element: <Playground />,
  },
  {
    path: "/portfolio-project/piano",
    element: <Piano />,
  },
  {
    path: "/portfolio-project/tic-tac-toe",
    element: <TicTacToe />,
  },
]);
