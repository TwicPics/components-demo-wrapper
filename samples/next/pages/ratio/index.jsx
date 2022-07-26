import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const imgUrl = `components/woman-and-winter.jpg`;
const ratioValues = [ `2.39`, `16/9`, `4/3`, null, `0.75` ];

/**
 * demonstrates the ratio property
 */
const TwicRatio = () => {
    const [ ratioIndex, setRatioIndex ] = useState( 0 );
    const [ fullWidthAera, setFullWidthAera ] = useState( true );

    const changeRatio = () => {
        setRatioIndex( ( ratioIndex + 1 ) % ratioValues.length );
    };

    const changeAeraWidth = () => {
        setFullWidthAera( !fullWidthAera );
    };

    return (
        <TwicWrapper framework="next">
            <div className={ styles[ `twic-ratio-container` ] }>
                <TwicAbstract
                    title="ratio property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-ratio-feature-485wh8"
                    codeSandBoxName="TwicPics x Next - Ratio"
                >
                    <p>
                      The <span className="twic-code">ratio</span> property determines the value
                      of the width/height ratio of the image display area.
                    </p>
                    <p>Its value can be:</p>
                    <ul>
                      <li>
                        a ratio expression of the form width/height like{" "}
                        <span className="twic-code">4/3</span>,{" "}
                        <span className="twic-code">16/9</span>, or{" "}
                        <span className="twic-code">1/1</span>.
                      </li>
                      <li>
                        a number that is the result of such an expression like{" "}
                        <span className="twic-code">1.85</span>,{" "}
                        <span className="twic-code">2</span>, or{" "}
                        <span className="twic-code">0.5</span>.
                      </li>
                    </ul>
                    <p>
                      A square area (<span className="twic-code"> ratio="1"</span>) will be
                      created by default.
                    </p>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changeRatio}>Click to change ratio</button>
                    <button className="twic-button" onClick={changeAeraWidth}>Click to change area width</button>
                </div>
                <div className={`twic-grid ${fullWidthAera ? `full-width` : `half-width`} `}>
                    <div className="twic-item">
                      <TwicImg src={ imgUrl } ratio={ ratioValues[ratioIndex] }>
                      </TwicImg>
                      <span>
                        <span className="twic-code">ratio="{
                          ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1
                        }"</span>{" "}
                        { !ratioValues[ ratioIndex ] && "- default ratio"}{" "}
                        (mode is <span className="twic-code">cover</span>)
                      </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                        src={ imgUrl }
                        mode="contain"
                        ratio={ ratioValues[ratioIndex] }
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">ratio="{
                            ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1
                          }"</span>{" "}
                          { !ratioValues[ ratioIndex ] && "- default ratio"}{" "}
                          (mode is <span className="twic-code">contain</span>)
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicRatio;
