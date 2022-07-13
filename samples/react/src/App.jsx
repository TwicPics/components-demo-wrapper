import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";
import Home from './components/_home';
import TwicArtDirections from "./components/twicArtDirections";
import TwicBasicGrid from './components/twicBasicGrid';
import TwicFlipCards from "./components/twicFlipCards";
import TwicFocus from "./components/twicFocus";
import TwicGridAndZoom from "./components/twicGridAndZoom";
import TwicModal from "./components/twicModal";
import TwicMode from "./components/twicMode";
import TwicPlaceholder from "./components/twicPlaceholder";
import TwicPosition from "./components/twicPosition";
import TwicRatio from "./components/twicRatio";
import TwicSlider from './components/twicSlider';
import TwicSlideshow from './components/twicSlideshow';
import TwicStyleDriven from "./components/twicStyleDriven";
import TwicTransition from "./components/twicTransition";



const App = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "basic-grid", element: <TwicBasicGrid /> },
      { path: "art-directions", element: <TwicArtDirections /> },
      { path: "flip-cards", element: <TwicFlipCards /> },
      { path: "focus", element: <TwicFocus /> },
      { path: "grid-and-zoom", element: <TwicGridAndZoom /> },
      { path: "modal", element: <TwicModal /> },
      { path: "mode", element: <TwicMode /> },
      { path: "position", element: <TwicPosition /> },
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
