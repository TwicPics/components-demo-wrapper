import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const landscapeImgUrl = `components/position/horse.jpg`;
const portraitImgUrl = `components/position/forest.jpg`;
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
        <TwicWrapper framework="next">
            <div className={ styles[ `twic-position-container` ] }>
                <TwicAbstract
                    title="position property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-position-feature-0c0cs2"
                    codeSandBoxName="TwicPics x Next - Position"
                >
                    <p>
                        In <span className="twic-code">contain</span> mode,
                        the position property changes the location of the image inside the area of the component.
                    </p>
                    <p>
                        The syntax is the same as for CSS position properties (e.g. <span className="twic-code">
                        background-position</span> or <span className="twic-code">
                        object-position</span>).
                    </p>
                    <p>
                        Useful values are <span className="twic-code">
                            top</span>, <span className="twic-code">
                            bottom</span>, <span className="twic-code">
                            left</span>, <span className="twic-code">
                            right</span> but all valid CSS position values are valid.
                    </p>
                </TwicAbstract>
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
                        <span>position=`{vPositionArray[ vPositionIndex ] }`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                            position={ hPositionArray[ hPositionIndex ] }
                        >
                        </TwicImg>
                        <span>position=`{hPositionArray[ hPositionIndex ] }`</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ landscapeImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>No position set (center by default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>No position set (center by default)</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPosition;