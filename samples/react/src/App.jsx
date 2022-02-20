import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/_home';
import TwicBasicGrid from './components/twicBasicGrid';
import TwicResponsiveGrid from './components/twicResponsiveGrid';
import TwicSlideshow from './components/twicSlideshow';
import TwicSlider from './components/twicSlider';
import TwicStyleDriven from "./components/twicStyleDriven";
import TwicResponsiveDesign from "./components/twicResponsiveDesign";
import TwicFocus from "./components/twicFocus";
import TwicMode from "./components/twicMode";
import TwicPlaceholder from "./components/twicPlaceholder";
import TwicPosition from "./components/twicPosition";
import TwicTransition from "./components/twicTransition";
import TwicRatio from "./components/twicRatio";
import TwicFlipCard from "./components/twicFlipCard";
import TwicModal from "./components/twicModal";

function App() {
    return (
        <div className="App">
            <Router>
                <>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basic-grid" component={TwicBasicGrid} />
                    <Route exact path="/flip" component={TwicFlipCard} />
                    <Route exact path="/focus" component={TwicFocus} />
                    <Route exact path="/modal" component={TwicModal} />
                    <Route exact path="/mode" component={TwicMode} />
                    <Route exact path="/positions" component={TwicPosition} />
                    <Route exact path="/placeholders" component={TwicPlaceholder} />
                    <Route exact path="/ratio" component={TwicRatio} />
                    <Route exact path="/slider" component={TwicSlider} />
                    <Route exact path="/slideshow" component={TwicSlideshow} />
                    <Route exact path="/style-driven" component={TwicStyleDriven} />
                    <Route exact path="/transition" component={TwicTransition} />
                    <Route exact path="/responsive-design" component={TwicResponsiveDesign} />
                    <Route exact path="/responsive-grid" component={TwicResponsiveGrid} />
                </>
            </Router>
        </div>
    );
}
export default App;
