import React from "react";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import { twicFlipCardContainer,
    flipCard,
    flipCardInner,
    flipCardFront,
    flipCardBack } from "./index.module.scss";

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
    <TwicWrapper framework="gatsby">
        <div className={ twicFlipCardContainer }>
            <TwicAbstract
                title="Flip cards"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-gatsby-flip-cards-18bz3h"
                codeSandBoxName="TwicPics x Gatsby - Flip Cards"
            >
                <p>Move your mouse over the images below.</p>
            </TwicAbstract>
            <div className="twic-grid">
                { cards.map( ( card, i ) => (
                    <div className={ flipCard } key={i}>
                        <div className={ flipCardInner }>
                            <div className={ flipCardFront }>
                                <figure className="twic-item">
                                    <TwicImg
                                        src={ `${ card.front.url }`}
                                        focus="auto"
                                    ></TwicImg>
                                </figure>
                            </div>
                            <div className={ flipCardBack }>
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
