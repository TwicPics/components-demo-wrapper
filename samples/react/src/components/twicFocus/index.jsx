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
        <TwicWrapper redirect="www.twicpics.com" tags={[ `tag1`, `tag2`, `tag3` ]}>
            <div className="twic-focus-container">
                <div className="twic-abstract">
                    <h1>
                        Focus point coordinates (only useful in cover mode)
                    </h1>
                    <p>
                        Focus will set the focus point coordinates.
                    </p>
                    <p>
                        By default,
                        the focus point is in the middle of the image.
                    </p>
                    <p>
                        You can change its coordinates by using `coordinates` or `auto`.
                    </p>
                    <p>
                        Coordinates represent a point in the <u>origin image</u>,
                        specified as a couple of positive lengths separated by the character x (eg 100x100)
                    </p>
                    <p>
                        If `auto` is used the focus point will be chosen automagically for you!
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={ changeFocus }>Click to change focus</button>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl} focus={focusArray[ focusIndex ]}
                            ratio="3/4"
                        ></TwicImg>
                        <span>focus = {focusArray[ focusIndex ] ? focusArray[ focusIndex ] : `none (default)`}</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                        ></TwicImg>
                        <span>focus = none (default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                            focus="2080x50"
                        ></TwicImg>
                        <span>focus = 2080x50</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={imgUrl}
                            ratio="3/4"
                            focus="auto"
                        ></TwicImg>
                        <span>focus = auto</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicFocus;
