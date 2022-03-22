/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import { twicStyleDrivenContainer,
    landscape,
    square,
    portrait,
    contain,
    left,
    right,
    cover,
    lg,
    sm,
    md } from "./index.module.scss";

const imgUrl = `components/horse.jpg`;

/**
 * demonstrates how you can set up components using pure CSS and the power of CSS variables.
 */
const TwicStyleDriven = () => (
    <TwicWrapper framework="gatsby">
        <div className={ twicStyleDrivenContainer }>
            <TwicAbstract
                title="CSS style driven"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-gatsby-style-driven-h97h50"
                codeSandBoxName="TwicPics x Gatsby - Style driven"
            >
                <p>
                    You can set up the TwicPics components using pure CSS and the power of CSS variables.
                </p>
            </TwicAbstract>
            <h2>
                1. Display ratio with <span className="twic-code">--twic-ratio</span>
            </h2>
            <div className="twic-grid">
                <div className={ `${ landscape } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class landscape</span>
                </div>
                <div className={ ` ${ square } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class square</span>
                </div>
                <div className={ ` ${ portrait } twic-item` }>
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
                <div className={ `${ contain } ${ left } twic-item` }>
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class left</span>
                </div>
                <div className={ `${ contain } ${ right } twic-item` }>
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class right</span>
                </div>
                <div className={ `${ cover } twic-item` }>
                    <TwicImg src={imgUrl} focus="50px100p" ratio="16/9"></TwicImg>
                    <span>class cover</span>
                </div>
            </div>
            <h2>3. Other classical settings (here with <span className="twic-code">width</span>)</h2>
            <div className="twic-grid">
                <div className={ `${ lg } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class lg</span>
                </div>
                <div className={ `${ md } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class md</span>
                </div>
                <div className={ `${ sm } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class sm</span>
                </div>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicStyleDriven;
