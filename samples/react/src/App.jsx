import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/_home';
import TwicBasicGrid from './components/twicBasicGrid';
import TwicResponsiveGrid from './components/twicResponsiveGrid';
import TwicSlideshow from './components/twicSlideshow';
import TwicSlider from './components/twicSlider';

function App() {
    return (
        <div className="App">
            <Router>
                <>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basic-grid" component={TwicBasicGrid} />
                    <Route exact path="/slider" component={TwicSlider} />
                    <Route exact path="/slideshow" component={TwicSlideshow} />
                    <Route exact path="/responsive-grid" component={TwicResponsiveGrid} />
                </>
            </Router>
        </div>
    );
}
export default App;
