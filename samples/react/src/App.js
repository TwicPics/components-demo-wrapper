import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/_home/Home';
import TwicBasicGrid from './components/twicBasicGrid/TwicBasicGrid';
import TwicResponsiveGrid from './components/twicResponsiveGrid/TwicResponsiveGrid';
import TwicSlideshow from './components/twicSlideshow/TwicSlideShow';
import TwicSlider from './components/twicSlider/TwicSlider';

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
