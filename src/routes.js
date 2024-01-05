import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import Piano from "./features/Piano/Piano.";
import LandingPage from "./pages/Landing/Landing";
import TicTacToe from "./features/TicTacToe/TicTacToe";
import Playground from "./pages/Playground/Playground";

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
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "/piano",
    element: <Piano />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
]);
