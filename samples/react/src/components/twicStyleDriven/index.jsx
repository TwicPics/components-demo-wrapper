/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `codepen/tp-moth.jpg`;

/**
 * demonstrates how you can set up components using pure CSS and the power of CSS variables.
 */
const TwicStyleDriven = () => (
    <TwicWrapper
        redirect="www.twicpics.com"
        title="A Style Driven Approach"
        tags={[ `tag1`, `tag2`, `tag3` ]}
    >
        <div className="twic-style-driven-container">
            <div className="twic-abstract">
                <h1>You can set up components using pure CSS and the power of CSS variables.</h1>
            </div>
            <h2>display ratio with `--twic-ratio`</h2>
            <div className="twic-grid">
                <div className="twic-item landscape">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class landscape</span>
                </div>
                <div className="twic-item square">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class square</span>
                </div>
                <div className="twic-item portrait">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class portrait</span>
                </div>
            </div>
            <div className="twic-separator"></div>
            <h2>class combination : object-fit and position with `--twic-mode` and `twic-position`</h2>
            <div className="twic-grid">
                <div className="twic-item contain left">
                    <TwicImg src={imgUrl} focus="auto" ratio="16/9"></TwicImg>
                    <span>class contain + class left</span>
                </div>
                <div className="twic-item contain right">
                    <TwicImg src={imgUrl} focus="auto" ratio="16/9"></TwicImg>
                    <span>class contain + class right</span>
                </div>
                <div className="twic-item cover">
                    <TwicImg src={imgUrl} focus="auto" ratio="16/9"></TwicImg>
                    <span>class cover</span>
                </div>
            </div>
            <div className="twic-separator"></div>
            <h2>other classical settings (here width)</h2>
            <div className="twic-grid">
                <div className="twic-item lg">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class lg</span>
                </div>
                <div className="twic-item md">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class md</span>
                </div>
                <div className="twic-item sm">
                    <TwicImg src={imgUrl} focus="auto"></TwicImg>
                    <span>class sm</span>
                </div>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicStyleDriven;
