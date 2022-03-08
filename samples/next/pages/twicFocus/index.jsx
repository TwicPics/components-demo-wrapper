/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/puppy.jpg`;
const focusArray = [ null, `1920x1282`, `auto` ];

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
        <TwicWrapper framework="next">
            <div className="twic-focus-container">
                <TwicAbstract
                    title="focus property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-focus-qxhubm"
                    codeSandBoxName="TwicPics x Next - Focus"
                >
                    <p>
                            The <span className="twic-code">focus</span> property will change
                            the focus point coordinates of the image (only useful with <span className="twic-code">
                                mode=`cover`</span>).
                    </p>
                    <p>
                            You can set the focus by using <em>coordinates </em>
                            or <span className="twic-code">auto</span> values:
                    </p>
                    <ul>
                        <li>
                            <em>Coordinates</em> represent a point in the image, specified as a couple of
                                    positive lengths, separated by the character
                            <span className="twic-code">x</span>.
                            <br/>
                            <i>eg</i> : 1920x1282
                            <br/>1920 is the coordinate along the x-axis
                                    (following the width of the image),<br/>1282
                                    is the coordinate along the y-axis (following the height of the image).
                        </li>
                        <li>
                                    If <span className="twic-code">auto</span> is used in place of actual coordinates,
                                    the focus point will be chosen automagically for you!
                        </li>
                    </ul>
                </TwicAbstract>
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
                            ratio="4/5"
                        ></TwicImg>
                        <span>focus={focusArray[ focusIndex ] ? focusArray[ focusIndex ] : `none (default)`}</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="4/5"
                        ></TwicImg>
                        <span>focus=`none` (default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="4/5"
                            focus="1920x1282"
                        ></TwicImg>
                        <span>focus=`1920x1282`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="4/5"
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
