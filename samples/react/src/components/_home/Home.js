import { TwicWrapper } from "@twicpics/components-demo-wrapper/wrapper/react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <TwicWrapper redirect="www.twicpics.com">
      <ul>
        <li>
          <NavLink to="/basic-grid">
            Basic Grid
          </NavLink>
        </li>
        <li>
          <NavLink to="/slider">
            Slider
          </NavLink>
        </li>
        <li>
          <NavLink to="/slideshow">
            Slideshow
          </NavLink>
        </li>
        <li>
          <NavLink to="/responsive-grid">
            Responsive Grid
          </NavLink>
        </li>
      </ul>
    </TwicWrapper>
  );
}

export default Home;
