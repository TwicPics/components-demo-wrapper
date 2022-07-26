/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/peacock.jpg`;

/**
 * demonstrates transition features
 */
const TwicTransition = () => {

    // in this sample we are going to toggle a class
    // --> we need state local management
    const [ showPlaceholder, setShowPlaceholder ] = useState( false );

    // user wants to toggle show-placeholders class
    const togglePlaceholder = () => {
        setShowPlaceholder( !showPlaceholder );
    };

    return (
        <TwicWrapper>
            <div className="twic-transition-container">
                <TwicAbstract
                    title="transition properties"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-react-transition-yi7he5"
                    codeSandBoxName="TwicPics x React - Transition"
                >
                    <p>
                      <strong>
                        The <dfn title="transition property">transition</dfn> properties allow you to
                        customize the effect used to reveal the image once it has been loaded
                      </strong>.
                    </p>
                    <ul>
                      <li>
                        <span className="twic-code">transition</span>: determines how the image
                        will be revealed once loaded (default:{" "}
                        <span className="twic-code">fade</span>). The possible values are:
                        <br />
                        - <span className="twic-code">fade</span>, for a{" "}
                        <em>fade in</em> effect<br />
                        - <span className="twic-code">zoom</span>, for a{" "}
                        <em>zoom</em> effect<br />
                        - <span className="twic-code">fade+zoom</span>, for both{" "}
                        <em>fade</em> and <em>zoom</em> effects<br />
                        - or <span className="twic-code">none</span>, for no transition
                      </li>
                      <li>
                        <span className="twic-code">transitionDelay</span>: transition delay of{" "}
                        the transition effect (default: <span className="twic-code">0ms</span>).
                      </li>
                      <li>
                        <span className="twic-code">transitionDuration</span>: duration of the{" "}
                        transition effect (default: <span className="twic-code">400ms</span>).
                      </li>
                      <li>
                        <span className="twic-code">transitionTimingFunction</span>: CSS timing{" "}
                        function applied to the transition effect (default:{" "}
                        <span className="twic-code">ease</span>).
                      </li>
                    </ul>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        Click to reveal transitions
                    </button>
                </div>
                <div className={`twic-grid ${ showPlaceholder ? `show-placeholders` : `` } `}>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>Default values</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transition="none"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">transition="none"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg  
                            src={imgUrl} 
                            transition="zoom">
                        </TwicImg>
                        <span>
                          <span className="twic-code">transition="zoom"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl} 
                            transition="fade">
                        </TwicImg>
                        <span>
                          <span className="twic-code">transition="fade"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg 
                            src={imgUrl} 
                            transition="fade+zoom">
                        </TwicImg>
                        <span>
                          <span className="twic-code">transition="fade+zoom"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">transitionDuration="2000ms"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">transitionDuration="2000ms"</span>{" "}
                          and <span className="twic-code">transitionTimingFunction="linear"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDelay="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">transitionDelay="2000ms"</span>
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicTransition;
