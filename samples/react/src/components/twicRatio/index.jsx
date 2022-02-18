import React, { useState } from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const imgUrl = `codepen/tp-canyon.jpg`;
const ratiosArray = [ `2.39`, `16/9`, `4/3`, null, `0.75` ];

/**
 * demonstrates ratio features
 */
const TwicRatio = () => {

    // in this sample we are going to change ratio on a button click
    // --> we need state local management
    const [ ratioIndex, setRatioIndex ] = useState( 0 );
    const [ fullWidthAera, setFullWidthAera ] = useState( true );

    // user wants to change ratio
    const changeRatio = () => {
        setRatioIndex( ( ratioIndex + 1 ) % ratiosArray.length );
    };

    const changeAeraWidth = () => {
        setFullWidthAera( !fullWidthAera );
    };

    return (
        <TwicWrapper>
            <div className="twic-ratio-container">
                <div className="twic-abstract">
                    <h1>
                        Ratio determines the value of the height/width ratio of the image display area
                    </h1>
                    <p>
                        Can be a number (1.85, 2, 0.5...) or a string (`4/3`, `16/9`...)
                    </p>
                    <p>
                        A square area (ratio = 1 ) will be created by default
                    </p>
                    <p>
                    Important: it is the width of the zone coupled with the ratio
                    that allow to calculate the reserved height
                    (and this while the image is not yet loaded).
                    </p>
                </div>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changeRatio}>Click to change ratio</button>
                    <button className="twic-button" onClick={changeAeraWidth}>Click to change aera width</button>
                </div>
                <div className={`twic-grid ${ fullWidthAera ? `full-width` : `half-width` } `}>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ imgUrl }`}
                            ratio={ ratiosArray[ ratioIndex ] }
                        >
                        </TwicImg>
                        <span>
                            ratio = {ratiosArray[ ratioIndex ] ? ratiosArray[ ratioIndex ] : `1 (default)`} (cover)
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ imgUrl }`}
                            mode="contain"
                            ratio={ ratiosArray[ ratioIndex ] }
                        >
                        </TwicImg>
                        <span>
                            ratio = {ratiosArray[ ratioIndex ] ? ratiosArray[ ratioIndex ] : `1 (default)`} (contain)
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicRatio;
