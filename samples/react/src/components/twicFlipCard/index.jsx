import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const cards = [
    {
        "front": {
            "url": `codepen/eiffel-tower.jpg`,
            "caption": `eiffel tower`,
        },
        "back": {
            "url": `codepen/hot-air-balloons.jpg`,
            "caption": `hot air balloons`,
        },
    },
    {
        "front": {
            "url": `codepen/look-at-the-sky.jpg`,
            "caption": `look at the sky`,
        },
        "back": {
            "url": `codepen/man-on-the-moon.jpg`,
            "caption": `man to the moon`,
        },
    },
    {
        "front": {
            "url": `codepen/tp-canyon.jpg`,
            "caption": `canyon`,
        },
        "back": {
            "url": `codepen/tp-lake.jpg`,
            "caption": `lake`,
        },
    },
    {
        "front": {
            "url": `codepen/tp-moth.jpg`,
            "caption": `moth`,
        },
        "back": {
            "url": `codepen/tp-rasp.jpg`,
            "caption": `rasp`,
        },
    },
];

/**
 * demonstrates how to implement a flip effect
 */
const TwicFlipCard = () => (
    <TwicWrapper>
        <div className="twic-flip-card-container">
            <div className="twic-abstract">
                <h1>
                        A Flip Card
                </h1>
                <p>Move your mouse over images below</p>
            </div>
            <div className="twic-grid">
                { cards.map( ( card, i ) => (
                    <div className="flip-card" key={i}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <figure>
                                    <TwicImg
                                        src={ `${ card.front.url }`}
                                    ></TwicImg>
                                    <figcaption>
                                        <p>{card.front.caption}</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flip-card-back">
                                <figure>
                                    <TwicImg
                                        src={ `${ card.back.url }`}
                                    ></TwicImg>
                                    <figcaption>
                                        <p>{card.back.caption}</p>
                                    </figcaption>
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
