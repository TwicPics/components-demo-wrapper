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
                        Mode determines if the image fills or sits inside the aera
                    </h1>
                    <p>
                        Can be `cover` (default) or `contain`
                    </p>
                    <p>
                        `cover` : image fills the area and is cropped accordingly
                    </p>
                    <p>
                        `contain` : image sits inside the area with no cropping
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changeMode}>Click to change mode</button>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ imgUrl }?${ modeIndex }`} // tip to force image reload
                            mode={ modesArray[ modeIndex ] }
                        >
                        </TwicImg>
                        <span>mode = {modesArray[ modeIndex ] }</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl}></TwicImg>
                        <span>no mode setted (cover by default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} mode="cover"></TwicImg>
                        <span>mode = cover</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg src={imgUrl} mode="contain"></TwicImg>
                        <span>mode = contain</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicMode;
