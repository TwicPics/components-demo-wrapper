/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `codepen/tp-canyon.jpg`;

/**
 * demonstrates placeholders features
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
                <div className="twic-abstract">
                    <h1>
                        The transition functions allow you to customize the effects of revealing images
                        once they have been loaded
                    </h1>
                    <p>
                        transition: whether or not to reveal images with a fade in effect
                        (default = true)
                    </p>
                    <p>
                        transitionDelay: transition delay of the transition effect (default = 0ms)
                    </p>
                    <p>
                        transitionDuration: duration of the transition effect (default = 400ms)
                    </p>
                    <p>
                        transitionTimingFunction: CSS timing function applied to the transition effect (default = ease)
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        Click to reveal transition
                    </button>
                </div>
                <div className={`twic-grid ${ showPlaceholder ? `show-placeholders` : `` } `}>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>default</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transition="false"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transition = "false"</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDuration = "2000ms"</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDuration = "2000ms" and transitionTimingFunction = "linear"</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDelay="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDelay = "2000ms"</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicTransition;
