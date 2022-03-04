/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/horse.jpg`;

/**
 * demonstrates how you can set up components using pure CSS and the power of CSS variables.
 */
const TwicStyleDriven = () => (
    <TwicWrapper
    >
        <div className={ styles[ `twic-style-driven-container` ] }>
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
                <div className={ `${ styles.landscape } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class landscape</span>
                </div>
                <div className={ ` ${ styles.square } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class square</span>
                </div>
                <div className={ ` ${ styles.portrait } twic-item` }>
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
                <div className={ `${ styles.contain } ${ styles.left } twic-item` }>
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class left</span>
                </div>
                <div className={ `${ styles.contain } ${ styles.right } twic-item` }>
                    <TwicImg src={imgUrl} ratio="16/9"></TwicImg>
                    <span>class contain + class right</span>
                </div>
                <div className={ `${ styles.cover } twic-item` }>
                    <TwicImg src={imgUrl} focus="50px100p" ratio="16/9"></TwicImg>
                    <span>class cover</span>
                </div>
            </div>
            <h2>3. Other classical settings (here with <span className="twic-code">width</span>)</h2>
            <div className="twic-grid">
                <div className={ `${ styles.lg } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class lg</span>
                </div>
                <div className={ `${ styles.md } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class md</span>
                </div>
                <div className={ `${ styles.sm } twic-item` }>
                    <TwicImg src={imgUrl}></TwicImg>
                    <span>class sm</span>
                </div>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicStyleDriven;
