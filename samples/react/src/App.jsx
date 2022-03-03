import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

function App() {
    return (
        <div className="App">
            <Router>
                <>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basic-grid" component={TwicBasicGrid} />
                    <Route exact path="/art-direction" component={TwicArtDirection} />
                    <Route exact path="/flip" component={TwicFlipCard} />
                    <Route exact path="/focus" component={TwicFocus} />
                    <Route exact path="/life-cycle" component={TwicLifeCycle} />
                    <Route exact path="/modal" component={TwicModal} />
                    <Route exact path="/mode" component={TwicMode} />
                    <Route exact path="/positions" component={TwicPosition} />
                    <Route exact path="/placeholders" component={TwicPlaceholder} />
                    <Route exact path="/ratio" component={TwicRatio} />
                    <Route exact path="/slider" component={TwicSlider} />
                    <Route exact path="/slideshow" component={TwicSlideshow} />
                    <Route exact path="/style-driven" component={TwicStyleDriven} />
                    <Route exact path="/transition" component={TwicTransition} />
                </>
            </Router>
        </div>
    );
}
export default App;
