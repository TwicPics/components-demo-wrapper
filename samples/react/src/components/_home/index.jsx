import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <TwicWrapper>
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
                        Placeholder
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/positions">
                        Position
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
                    <NavLink to="/transition">
                        Transition
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
