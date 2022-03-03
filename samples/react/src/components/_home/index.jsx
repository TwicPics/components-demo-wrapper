import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <TwicWrapper>
            <ul>
                <li>
                    <NavLink to="/basic-grid">
                        Basic Example
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/art-direction">
                        Art direction
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/flip">
                        Flip Card
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/focus">
                        Focus
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/life-cycle">
                        Life cycle
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/modal">
                        Modal
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
                    <NavLink to="/ratio">
                        Ratio
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
            </ul>
        </TwicWrapper>
    );
}

export default Home;
