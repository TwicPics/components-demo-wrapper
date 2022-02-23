/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `https://assets.twicpics.com/examples/football.jpg`;
const focusArray = [ null, `2080x50`, `auto` ];

/**
 * demonstrates focus features
 */
const TwicFocus = () => {

    // in this sample we are going to change ratio on a button click
    // --> we need state local management
    const [ focusIndex, setFocusIndex ] = useState( 0 );

    // user wants to change focus
    const changeFocus = () => {
        setFocusIndex( ( focusIndex + 1 ) % focusArray.length );
    };

    return (
        <TwicWrapper
            redirect="https://www.twicpics.com/docs/api/transformations#focus"
        >
            <div className="twic-focus-container">
                <div className="twic-abstract">
                    <h1>
                        <span className="twic-code">focus</span> property
                    </h1>
                    <p>
                        The <span className="twic-code">focus</span> property will change
                        the focus point coordinates of the image (only useful with <span className="twic-code">
                            mode=`cover`</span>).
                    </p>
                    <p>
                        You can set the focus by using <em>coordinates </em>
                        or <span className="twic-code">auto</span> values:
                        <ul>
                            <li>
                                <em>Coordinates</em> represent a point in the image, specified as a couple of
                                positive lengths, separated by the character <span className="twic-code">x</span>:
                                <br/>the first length is the coordinate along the x-axis
                                (following the width of the image), and the second length
                                is the coordinate along the y-axis (following the height of the image).
                            </li>
                            <li>
                                If <span className="twic-code">auto</span> is used in place of actual coordinates,
                                the focus point will be chosen automagically for you!
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <button
                            className="twic-button"
                            onClick={ changeFocus }
                        >
                            Click to change the focus point
                        </button>
                        <TwicImg
                            src={imgUrl} focus={focusArray[ focusIndex ]}
                            ratio="3/4"
                        ></TwicImg>
                        <span>focus={focusArray[ focusIndex ] ? focusArray[ focusIndex ] : `none (default)`}</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                        ></TwicImg>
                        <span>focus=`none` (default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                            focus="2080x50"
                        ></TwicImg>
                        <span>focus=`2080x50`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                            focus="auto"
                        ></TwicImg>
                        <span>focus=`auto`</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicFocus;
