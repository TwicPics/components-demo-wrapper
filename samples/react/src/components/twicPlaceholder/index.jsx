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
                        <span className="twic-code">placeholder</span> property
                    </h1>
                    <p>
                        The <span className="twic-code">placeholder</span> property
                        helps to optimize your CLS and implement the LQIP technique.
                    </p>
                    <p>
                        TwicPics Components automatically add a background placeholder
                        to your images: their size are reserved in the page before the images are actually loaded.
                    </p>
                    <p>
                        The <span className="twic-code">
                            placeholder
                        </span> values can be: <span className="twic-code">preview</span>, <span className="twic-code">
                            meancolor
                        </span>, <span className="twic-code">
                            maincolor
                        </span> or <span className="twic-code">
                            none
                        </span>.
                    </p>
                    <p>
                        The browser is told to load a SVG version as a backgroung image first,
                        then to replace it with the full version later on.
                    </p>
                    <p>
                        When setted to <span className="twic-code">preview</span> (the default value),
                        a blurry version of your image is used as a background image.
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        {showPlaceholder ? `Click to show images` : `Click to reveal placeholders` }
                    </button>
                </div>
                <div className={`twic-grid ${ showPlaceholder ? `show-placeholders` : `` } `}>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="preview"></TwicImg>
                        <span>placeholder=`preview` (default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="meancolor"></TwicImg>
                        <span>placeholder=`meancolor`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="maincolor"></TwicImg>
                        <span>placeholder=`maincolor`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="none"></TwicImg>
                        <span>placeholder=`none`</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPlaceholder;
