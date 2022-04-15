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
                    title="transition property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-react-transition-yi7he5"
                    codeSandBoxName="TwicPics x React - Transition"
                >
                    <p>
                        The <span className="twic-code">transition</span> properties allow you
                        to customize the effect used to reveal the image once it has been loaded.
                    </p>
                    <ul>
                        <li>
                            <span class="twic-code">transition</span>: 
                            determines how image will be revealed once loaded :
                            with a <em>fade in</em> effect (`fade`), 
                            a <em>zoom</em> effect (`zoom`), 
                            <em>both</em> (`fade+zoom`) 
                            or without any transition (`none`).
                            (default: <span class="twic-code">fade</span>).
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
                            transition="none"
                            placeholder="preview"
                        >
                        </TwicImg>
                        <span>transition=`none`</span>
                    </div>
                    <div class="twic-item">
                        <TwicImg  
                            src={imgUrl} 
                            transition="zoom">
                        </TwicImg>
                        <span>transition=`zoom`</span>
                    </div>
                    <div class="twic-item">
                        <TwicImg
                            src={imgUrl} 
                            transition="fade">
                        </TwicImg>
                        <span>transition=`fade`</span>
                    </div>
                    <div class="twic-item">
                        <TwicImg 
                            src={imgUrl} 
                            transition="fade+zoom">
                        </TwicImg>
                        <span>transition=`fade+zoom`</span>
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
