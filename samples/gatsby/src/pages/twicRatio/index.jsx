import React, { useState } from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import { twicRatioContainer } from "./index.module.scss";

const imgUrl = `components/woman-and-winter.jpg`;
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
        <TwicWrapper framework="gatsby">
            <div className={ twicRatioContainer }>
                <TwicAbstract
                    title="ratio property"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-ratio-feature-485wh8"
                    codeSandBoxName="TwicPics x Next - Ratio"
                >
                    <p>
                        The <span className="twic-code">ratio</span> property determines the value
                        of the width/height ratio of the image display area.
                    </p>
                    <p>
                        Value can be:
                    </p>
                    <ul>
                        <li>
                            a ratio expression of the form width/height like 4/3, 16/9 or 1/1.
                        </li>
                        <li>
                            a number that is the result of such an expression like 1.85, 2 or 0.5.
                        </li>
                    </ul>
                    <p>
                        A square area (<span className="twic-code">
                        ratio=`1`</span>) will be created by default.
                    </p>
                </TwicAbstract>
                <div className="twic-testing-container">
                    <button className="twic-button" onClick={changeRatio}>Click to change ratio</button>
                    <button className="twic-button" onClick={changeAeraWidth}>Click to change area width</button>
                </div>
                <div className={`twic-grid ${ fullWidthAera ? `full-width` : `half-width` } `}>
                    <div className="twic-item">
                        <TwicImg
                            src={ `${ imgUrl }`}
                            ratio={ ratiosArray[ ratioIndex ] }
                        >
                        </TwicImg>
                        <span>
                            ratio={ratiosArray[ ratioIndex ] ? ratiosArray[ ratioIndex ] : `1 (default)`} (cover)
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
                            ratio={ratiosArray[ ratioIndex ] ? ratiosArray[ ratioIndex ] : `1 (default)`} (contain)
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicRatio;
