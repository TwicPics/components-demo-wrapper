import React from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const cards = [
    {
        "front": {
            "url": `components/flip/orange-1.jpg`,
        },
        "back": {
            "url": `components/flip/orange-2.jpg`,
        },
    },
    {
        "front": {
            "url": `components/flip/fig-1.jpg`,
        },
        "back": {
            "url": `components/flip/fig-2.jpg`,
        },
    },
    {
        "front": {
            "url": `components/flip/cherry-3.jpg`,
        },
        "back": {
            "url": `components/flip/cherry-2.jpg`,
        },
    },
    {
        "front": {
            "url": `components/flip/melon-1.jpg`,
        },
        "back": {
            "url": `components/flip/melon-2.jpg`,
        },
    },
];

/**
 * demonstrates how to implement a flip effect
 */
const TwicFlipCard = () => (
    <TwicWrapper>
        <div className="twic-flip-card-container">
            <TwicAbstract
                title="Flip cards"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-react-flip-cards-jq4hn2"
                codeSandBoxName="TwicPics x React - Flip Cards"
            >
                <p>Move your mouse over the images below.</p>
            </TwicAbstract>
            <div className="twic-grid">
                { cards.map( ( card, i ) => (
                    <div className="flip-card" key={i}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <figure className="twic-item">
                                    <TwicImg
                                        src={ `${ card.front.url }`}
                                        focus="auto"
                                    ></TwicImg>
                                </figure>
                            </div>
                            <div className="flip-card-back">
                                <figure className="twic-item">
                                    <TwicImg
                                        src={ `${ card.back.url }`}
                                    ></TwicImg>
                                </figure>
                            </div>
                        </div>
                    </div>
                ) ) }
            </div>
        </div>
    </TwicWrapper>
);

export default TwicFlipCard;
