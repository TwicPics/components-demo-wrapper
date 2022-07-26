import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const landscapeImgUrl = `components/position/horse.jpg`;
const portraitImgUrl = `components/position/forest.jpg`;
const verticalPositionArray = [ `top`, `bottom`, `center` ];
const horizontalPositionArray = [ `left`, `right`, `center` ];

/**
 * demonstrates position features (contain or cover)
 */
const TwicPosition = () => {

    // in this sample we are going to change position on a button click
    // --> we need state local management
    const [
        horizontalPositionIndex,
        setHorizontalPositionIndex,
    ] = useState( 0 );
    const [
        verticalPositionIndex,
        setVerticalPositionIndex,
    ] = useState( 0 );

    // user wants to change position
    const changePosition = () => {
        setHorizontalPositionIndex( ( horizontalPositionIndex + 1 ) % horizontalPositionArray.length );
        setVerticalPositionIndex( ( verticalPositionIndex + 1 ) % verticalPositionArray.length );
    };

    return (
        <TwicWrapper>
            <div className="twic-position-container">
                <TwicAbstract
                    title="position property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-react-position-ymjxgg"
                    codeSandBoxName="TwicPics x React - Position"
                >
                    <p>
                      In <span className="twic-code">contain</span> mode,{" "}
                      <strong>
                        the <dfn title="position property">position</dfn> property
                        changes the location of the image inside the area of the component.
                      </strong>
                    </p>
                    <p>
                      The syntax is the same as for CSS position properties (e.g.{" "}
                      <span className="twic-code"> background-position</span> or{" "}
                      <span className="twic-code"> object-position</span>).
                    </p>
                    <p>
                      Useful values are <span className="twic-code"> top</span>,{" "}
                      <span className="twic-code"> bottom</span>,{" "}
                      <span className="twic-code"> left</span>, and{" "}
                      <span className="twic-code"> right</span> but all valid CSS position
                      values are valid.
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
                            position={ verticalPositionArray[ verticalPositionIndex ] }
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">position="{ verticalPositionArray[verticalPositionIndex] }"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                            position={ horizontalPositionArray[ horizontalPositionIndex ] }
                        >
                        </TwicImg>
                        <span>
                          <span className="twic-code">position="{ horizontalPositionArray[horizontalPositionIndex] }"</span>
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ landscapeImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>No position set (<span className="twic-code"> center</span> by default)</span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ portraitImgUrl }`}
                            mode="contain"
                        >
                        </TwicImg>
                        <span>No position set (<span className="twic-code"> center</span> by default)</span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPosition;
