import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const landscapeImgUrl = `components/position/horse.jpg`;
const portraitImgUrl = `components/position/forest.jpg`;
const verticalPositionArray = [ `top`, `bottom`, `center` ];
const horizontalPositionArray = [ `left`, `right`, `center` ];

/**
 * demonstrates the position property
 */
const TwicPosition = () => {
    const [
        horizontalPositionIndex,
        setHorizontalPositionIndex,
    ] = useState( 0 );
    const [
        verticalPositionIndex,
        setVerticalPositionIndex,
    ] = useState( 0 );

    const changePosition = () => {
        setHorizontalPositionIndex( ( horizontalPositionIndex + 1 ) % horizontalPositionArray.length );
        setVerticalPositionIndex( ( verticalPositionIndex + 1 ) % verticalPositionArray.length );
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
                      In <span className="twic-code">contain</span> mode, the position property
                      changes the location of the image inside the area of the component.
                    </p>
                    <p>
                      The syntax is the same as for CSS position properties (e.g.{" "}
                      <span className="twic-code"> background-position</span> or{" "}
                      <span className="twic-code"> object-position</span>).
                    </p>
                    <p>
                      Useful values are <span className="twic-code"> top</span>,{" "}
                      <span className="twic-code"> bottom</span>,{" "}
                      <span className="twic-code"> left</span>, and {" "}
                      <span className="twic-code"> right</span>, but all valid CSS position
                      values are valid.
                    </p>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changePosition}>Click to change position</button>
                </div>
                <div className="twic-grid">
                  <div className="twic-item">
                    <TwicImg
                      src={ landscapeImgUrl }
                      mode="contain"
                      placeholder="none"
                      position={ verticalPositionArray[verticalPositionIndex] }
                    >
                    </TwicImg>
                    <span>
                      <span className="twic-code">position="{ verticalPositionArray[verticalPositionIndex] }"</span>
                    </span>
                  </div>
                  <div className="twic-item">
                    <TwicImg
                      src={ portraitImgUrl }
                      mode="contain"
                      placeholder="none"
                      position={ horizontalPositionArray[horizontalPositionIndex] }
                    >
                    </TwicImg>
                    <span>
                      <span className="twic-code">position="{ horizontalPositionArray[horizontalPositionIndex] }"</span>
                    </span
                    >
                  </div>
                  <div className="twic-item">
                    <TwicImg src={ landscapeImgUrl } mode="contain" placeholder="none">
                    </TwicImg>
                    <span>No position set (<span className="twic-code"> center</span> by default)</span>
                  </div>
                  <div className="twic-item">
                    <TwicImg src={ portraitImgUrl } mode="contain" placeholder="none">
                    </TwicImg>
                    <span>No position set (<span className="twic-code"> center</span> by default)</span>
                  </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicPosition;
