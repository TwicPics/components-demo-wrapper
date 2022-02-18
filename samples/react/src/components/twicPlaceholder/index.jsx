/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `codepen/tp-canyon.jpg`;

/**
 * demonstrates placeholders features
 */
const TwicPlaceholder = () => {

    // in this sample we are going to toggle a class
    // --> we need state local management
    const [ showPlaceholder, setShowPlaceholder ] = useState( false );

    // user wants to toggle show-placeholders class
    const togglePlaceholder = () => {
        setShowPlaceholder( !showPlaceholder );
    };

    return (
        <TwicWrapper>
            <div className="twic-placeholder-container">
                <div className="twic-abstract">
                    <h1>
                        Placeholders help to keep low CLS & implement LQIP
                    </h1>
                    <p>
                        TwicPics Components automatically add a background placeholder
                        to your medias: their size are reserved in the page before they are actually loaded.
                    </p>
                    <p>
                        Placeholder value can be `preview`, `meancolor`, `maincolor` or `none`
                    </p>
                    <p>
                        The browser is told to load a svg version as backgroung image first
                        and to replace it with the full version later on.
                    </p>
                    <p>
                        When setted to `preview` (which is in fact the default value),
                        a blurry version of your image is used as background.
                        Nothing else is needed to implement the `Low Quality Image Placeholder`
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        {showPlaceholder ? `Click to show images` : `Click to reveal placeholders` }
                    </button>
                </div>
                <div className="twic-separator"></div>
                <div className={`twic-grid ${ showPlaceholder ? `show-placeholders` : `` } `}>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="preview"></TwicImg>
                        <span>placeholder = "preview" (default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="meancolor"></TwicImg>
                        <span>placeholder = "meancolor"</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="maincolor"></TwicImg>
                        <span>placeholder = "maincolor"</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="none"></TwicImg>
                        <span>placeholder = "none"</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPlaceholder;
