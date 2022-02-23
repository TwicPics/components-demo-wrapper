/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `codepen/tp-doggy.jpg`;
const modesArray = [ `cover`, `contain` ];

/**
 * demonstrates mode features (contain or cover)
 */
const TwicMode = () => {

    // in this sample we are going to change mode on a button click
    // --> we need state local management
    const [ modeIndex, setModeIndex ] = useState( 0 );

    // user wants to change mode
    const changeMode = () => {
        setModeIndex( ( modeIndex + 1 ) % modesArray.length );
    };

    return (
        <TwicWrapper>
            <div className="twic-mode-container">
                <div className="twic-abstract">
                    <h1>
                        <span className="twic-code">mode</span> property
                    </h1>
                    <p>
                        <span>The </span>
                        <span className="twic-code">mode</span>
                        <span> property determines if the image fills or sits inside the aera.</span>
                    </p>
                    <p>
                        Here are the two accepted values:
                        <ul>
                            <li>
                                <span className="twic-code">cover</span>:
                                <span> the image fills the area and is cropped accordingly.</span>
                            </li>
                            <li>
                                <span className="twic-code">contain</span>:
                                <span> the image sits inside the area with no cropping.</span>
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <button
                            className="twic-button"
                            onClick={changeMode}>Click to change the mode value
                        </button>
                        <TwicImg
                            src={ `${ imgUrl }?${ modeIndex }`} // tip to force image reload
                            mode={ modesArray[ modeIndex ] }
                        >
                        </TwicImg>
                        <span>mode=`{modesArray[ modeIndex ] }`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl}></TwicImg>
                        <span>No mode setted (cover by default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} mode="cover"></TwicImg>
                        <span>mode=`cover`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} mode="contain"></TwicImg>
                        <span>mode=`contain`</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicMode;
