import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BasicGrid from './components/basicGrid/BasicGrid';
import ResponsiveGrid from './components/responsiveGrid/ResponsiveGrid';
import Home from './components/_home/Home';

function App() {
    return (
        <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/basic-grid" component={BasicGrid} />
          <Route exact path="/responsive-grid" component={ResponsiveGrid} />
        </>
      </Router>
    </div>
    );
}
export default App;
