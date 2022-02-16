import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
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
                    <NavLink to="/focus">
                        Focus
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mode">
                        Mode
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/placeholders">
                        Placeholders
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
                    <NavLink to="/style-driven">
                        Style Driven
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/responsive-design">
                        Responsive Design
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
