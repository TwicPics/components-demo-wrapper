import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";
import Home from './components/_home';
import TwicBasicGrid from './components/twicBasicGrid';
import TwicSlideshow from './components/twicSlideshow';
import TwicSlider from './components/twicSlider';
import TwicStyleDriven from "./components/twicStyleDriven";
import TwicFocus from "./components/twicFocus";
import TwicMode from "./components/twicMode";
import TwicPlaceholder from "./components/twicPlaceholder";
import TwicPosition from "./components/twicPosition";
import TwicTransition from "./components/twicTransition";
import TwicRatio from "./components/twicRatio";
import TwicFlipCard from "./components/twicFlipCard";
import TwicModal from "./components/twicModal";
import TwicLifeCycle from "./components/twicLifeCycle";
import TwicArtDirection from "./components/twicArtDirection";



const App = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "basic-grid", element: <TwicBasicGrid /> },
      { path: "art-direction", element: <TwicArtDirection /> },
      { path: "flip", element: <TwicFlipCard /> },
      { path: "focus", element: <TwicFocus /> },
      { path: "life-cycle", element: <TwicLifeCycle /> },
      { path: "modal", element: <TwicModal /> },
      { path: "mode", element: <TwicMode /> },
      { path: "positions", element: <TwicPosition /> },
      { path: "placeholders", element: <TwicPlaceholder /> },
      { path: "ratio", element: <TwicRatio /> },
      { path: "slider", element: <TwicSlider /> },
      { path: "slideshow", element: <TwicSlideshow /> },
      { path: "style-driven", element: <TwicStyleDriven /> },
      { path: "transition", element: <TwicTransition /> },
    ]);
    return routes;
  };


const AppWrapper = () => {
    return (
      <Router>
        <App />
      </Router>
    );
  };

export default AppWrapper;
