/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/puppy.jpg`;
const focusArray = [ null, `1920x1282`, `auto` ];

/**
 * demonstrates the focus property
 */
const TwicFocus = () => {
    const [ focusIndex, setFocusIndex ] = useState( 0 );

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
                      The <span className="twic-code">focus</span> property will change the
                      focus point coordinates of the image (only useful with{" "}
                      <span className="twic-code">mode="cover"</span>).
                      <br />
                      It allows to determine what should be visible when the image is
                      cropped.
                    </p>
                    <p>
                      You can set the focus by using coordinates or{" "}
                      <span className="twic-code">auto</span> values:
                    </p>
                    <ul>
                      <li>
                        <strong>Coordinates</strong> represent a point in the image,
                        specified as a couple of positive lengths, separated by the
                        character <span className="twic-code">x</span>.
                        <br />
                        As an example, in{" "}
                        <span className="twic-code">focus="1920x1282"</span>:<br />
                        - <span className="twic-code">1920</span> is the coordinate along the
                        x-axis (following the width of the image) <br />
                        - and <span className="twic-code">1282</span> is the coordinate along
                        the y-axis (following the height of the image)
                      </li>
                      <li>
                        If <span className="twic-code">auto</span> is used in place of actual
                        coordinates, the focus point will be chosen automagically for you!
                      </li>
                    </ul>
                </TwicAbstract>
                <div className="twic-grid">
                  <div className="twic-item">
                    <button className="twic-button" onClick={ changeFocus }>
                      Click to change the focus point
                    </button>
                    <TwicImg
                      src={ imgUrl }
                      focus={ focusArray[ focusIndex ] }
                      ratio="4/5"
                      placeholder="preview"
                    ></TwicImg>
                    { focusArray[focusIndex] ? (
                      <span>
                        <span className="twic-code">focus="{ focusArray[ focusIndex]  }"</span>
                      </span>
                    ) : (
                      <span>
                        <span>No focus</span> (default)
                      </span>
                    )}
                  </div>
                  <div className="twic-item">
                    <TwicImg src={ imgUrl } ratio="4/5" placeholder="preview"></TwicImg>
                    <span>
                      <span>No focus</span> (default)
                    </span>
                  </div>
                  <div className="twic-item">
                    <TwicImg
                      src={ imgUrl }
                      ratio="4/5"
                      focus="1920x1282"
                      placeholder="preview"
                    ></TwicImg>
                    <span>
                      <span className="twic-code">focus="1920x1282"</span>
                    </span>
                  </div>
                  <div className="twic-item">
                    <TwicImg
                      src={ imgUrl }
                      ratio="4/5"
                      focus="auto"
                      placeholder="preview"
                    ></TwicImg>
                    <span>
                      <span className="twic-code">focus="auto"</span>
                    </span>
                  </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicFocus;
