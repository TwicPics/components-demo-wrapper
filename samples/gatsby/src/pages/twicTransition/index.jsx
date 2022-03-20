/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import { twicTransitionContainer, showPlaceholders } from "./index.module.scss";

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
        <TwicWrapper framework="gatsby">
            <div className={ twicTransitionContainer }>
                <TwicAbstract
                    title="transition property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-gatsby-transition-feature-k1kec0"
                    codeSandBoxName="TwicPics x Gatsby - Transition"
                >
                    <p>
                        The <span className="twic-code">transition</span> properties allow you
                        to customize the effect used to reveal the image once it has been loaded.
                    </p>
                    <ul>
                        <li>
                            <span className="twic-code">transition</span>: whether or not to reveal
                            images with a <em>fade in</em> effect (default: <span className="twic-code">true</span>).
                        </li>
                        <li>
                            <span className="twic-code">transitionDelay</span>: transition delay of
                            the transition effect (default: <span className="twic-code">0ms</span>).
                        </li>
                        <li>
                            <span className="twic-code">transitionDuration</span>: duration of the transition effect
                            (default: <span className="twic-code">400ms</span>).
                        </li>
                        <li>
                            <span className="twic-code">transitionTimingFunction</span>: CSS timing function applied
                            to the transition effect (default: <span className="twic-code">ease</span>).
                        </li>
                    </ul>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ togglePlaceholder }>
                        Click to reveal transition
                    </button>
                </div>
                <div className={`twic-grid ${ showPlaceholder ? showPlaceholders : `` } `}>
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
                        <span>transition=`false`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDuration=`2000ms`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDuration="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDuration=`2000ms` and transitionTimingFunction=`linear`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            transitionDelay="2000ms"
                            transitionTimingFunction="linear"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transitionDelay=`2000ms`</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicTransition;
