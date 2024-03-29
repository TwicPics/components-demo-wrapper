/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const imgUrl = `components/fox.jpg`;
const modeValues = [ `cover`, `contain` ];

/**
 * demonstrates the mode property
 */
const TwicMode = () => {
    const [ modeIndex, setModeIndex ] = useState( 0 );

    const changeMode = () => {
        setModeIndex( ( modeIndex + 1 ) % modeValues.length );
    };

    return (
        <TwicWrapper framework="next">
            <div className={ styles[ `twic-mode-container` ] }>
                <TwicAbstract
                    title="mode property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-mode-feature-3iz23j"
                    codeSandBoxName="TwicPics x Next - Mode Property"
                >
                    <p>
                      <span>The </span>
                      <span className="twic-code">mode</span>{" "}
                      <span>
                        property determines if the image fills or sits inside the
                        area.</span
                      >
                    </p>
                    <p>Here are the two accepted values:</p>
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
                </TwicAbstract>
              <div className="twic-grid">
                <div className="twic-item">
                  <button className="twic-button" onClick={ changeMode }>
                    Click to change the mode value
                  </button>
                    <TwicImg
                      src={ `${ imgUrl }?${ modeIndex }`} // tip to force image reload.
                      mode={ modeValues[modeIndex] }
                    ></TwicImg>
                  <span>
                    <span className="twic-code">mode="{ modeValues[ modeIndex ] }"</span>
                  </span>
                </div>
                <div className="twic-item">
                  <TwicImg src={ imgUrl }></TwicImg>
                  <span>No mode set (<span className="twic-code">cover</span> by default)</span>
                </div>
                <div className="twic-item">
                  <TwicImg src={ imgUrl } mode="cover"></TwicImg>
                  <span>
                    <span className="twic-code">mode="cover"</span>
                  </span>
                </div>
                <div className="twic-item">
                  <TwicImg src={ imgUrl } mode="contain"></TwicImg>
                  <span>
                    <span className="twic-code">mode="contain"</span>
                  </span>
                </div>
              </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicMode;
