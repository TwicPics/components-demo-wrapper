/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/horse.jpg`;

/**
 * demonstrates how you can set up components using pure CSS and the power of CSS variables.
 */
const TwicStyleDriven = () => (
    <TwicWrapper
    >
        <div className="twic-style-driven-container">
            <div className="twic-abstract">
                <h1>CSS styles driven</h1>
                <p>
                    You can set up the TwicPics components using pure CSS and the power of CSS variables.
                </p>
            </div>
            <h2>
                1. Display ratio with <span className="twic-code">--twic-ratio</span>
            </h2>
            <div className="twic-grid">
                <div className="twic-item landscape">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class landscape</span>
                </div>
                <div className="twic-item square">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class square</span>
                </div>
                <div className="twic-item portrait">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class portrait</span>
                </div>
            </div>
            <h2>
                2. Class combination: <span className="twic-code">object-fit</span> and <span className="twic-code">
                    position</span> with <span className="twic-code">--twic-mode</span> and <span className="twic-code">
                    twic-position</span>
            </h2>
            <div className="twic-grid">
                <div className="twic-item contain left">
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class left</span>
                </div>
                <div className="twic-item contain right">
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class right</span>
                </div>
                <div className="twic-item cover">
                    <TwicImg src={imgUrl} focus="50px100p" ratio="16/9"></TwicImg>
                    <span>class cover</span>
                </div>
            </div>
            <h2>3. Other classical settings (here with <span className="twic-code">width</span>)</h2>
            <div className="twic-grid">
                <div className="twic-item lg">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class lg</span>
                </div>
                <div className="twic-item md">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class md</span>
                </div>
                <div className="twic-item sm">
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class sm</span>
                </div>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicStyleDriven;
