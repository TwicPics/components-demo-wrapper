import React, { useState } from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const landscapeImgUrl = `https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-feature-section-01.jpeg`;
const portraitImgUrl = `https://assets.twicpics.com/demo/fake-websites/homepage/home-page-01-category-03.jpeg`;
const vPositionArray = [ `top`, `bottom`, `center` ];
const hPositionArray = [ `left`, `right`, `center` ];

/**
 * demonstrates position features (contain or cover)
 */
const TwicPosition = () => {

    // in this sample we are going to change position on a button click
    // --> we need state local management
    const [
        hPositionIndex,
        setHPositionIndex,
    ] = useState( 0 );
    const [
        vPositionIndex,
        setVPositionIndex,
    ] = useState( 0 );

    // user wants to change position
    const changePosition = () => {
        setHPositionIndex( ( hPositionIndex + 1 ) % hPositionArray.length );
        setVPositionIndex( ( vPositionIndex + 1 ) % vPositionArray.length );
    };

    return (
        <TwicWrapper>
            <div className="twic-position-container">
                <div className="twic-abstract">
                    <h1>
                        Position locates the image inside the aera (only useful in `contain`mode)
                    </h1>
                    <p>
                        Syntax is the same as for CSS position properties like `background-position`
                        or `object-position`
                    </p>
                    <p>
                        Useful values are `top`, `bottom`, `left`, `right`...
                        (it depends on original image ratio)
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changePosition}>Click to change position</button>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ landscapeImgUrl }`}
                            mode="contain"
                            position={ vPositionArray[ vPositionIndex ] }
                        >
                        </TwicImg>
                        <span>position = {vPositionArray[ vPositionIndex ] }</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                            position={ hPositionArray[ hPositionIndex ] }
                        >
                        </TwicImg>
                        <span>position = {hPositionArray[ hPositionIndex ] }</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ landscapeImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>no position setted (center by default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>no position setted (center by default)</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPosition;
