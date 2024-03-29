/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { twicPlaceholderContainer, showPlaceholders } from "./index.module.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/cat.jpg`;

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
        <TwicWrapper framework="gatsby">
            <div className={ twicPlaceholderContainer }>
                <TwicAbstract
                    title="placeholder property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-gatsby-placeholder-feature-2xy3pj"
                    codeSandBoxName="TwicPics x Gatsby - Modal"
                >
                    <p>
                      The <span className="twic-code">placeholder</span> property helps optimize
                      your CLS and implement the LQIP technique.
                    </p>
                    <p>
                      TwicPics Components automatically adds a background placeholder to
                      your images: their size are reserved in the page before the images are
                      actually loaded.
                    </p>
                    <p>
                      The <span className="twic-code"> placeholder </span> values can be:{" "}
                      <span className="twic-code">preview</span>,{" "}
                      <span className="twic-code"> meancolor </span>,{" "}
                      <span className="twic-code"> maincolor </span> or{" "}
                      <span className="twic-code"> none </span>.
                    </p>
                    <p>
                      The browser is told to load a SVG version as a backgroung image first,
                      then to replace it with the full version later on.
                    </p>
                    <p>
                      When set to <span className="twic-code">preview</span> (the default
                      value), a blurry version of your image is used as a background image.
                    </p>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        {showPlaceholder ? `Click to show images` : `Click to reveal placeholders` }
                    </button>
                </div>
                <div className={`twic-grid ${ showPlaceholder ? showPlaceholders : `` } `}>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="preview"></TwicImg>
                        <span>
                          <span className="twic-code">placeholder="preview"</span>{" "}
                          (default value)
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="meancolor"></TwicImg>
                        <span>
                          <span className="twic-code">placeholder="meancolor"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="maincolor"></TwicImg>
                        <span>
                          <span className="twic-code">placeholder="maincolor"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} placeholder="none"></TwicImg>
                        <span>
                          <span className="twic-code">placeholder="none"</span>
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPlaceholder;
