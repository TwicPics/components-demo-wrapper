import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

/**
 * list of unit images
 */
const seed = [
    {
        "url": `codepen/eiffel-tower.jpg`,
        "caption": `eiffel tower`,
    },
    {
        "url": `codepen/hot-air-balloons.jpg`,
        "caption": `hot air balloons`,
    },
    {
        "url": `codepen/look-at-the-sky.jpg`,
        "caption": `look at the sky`,
    },
    {
        "url": `codepen/man-on-the-moon.jpg`,
        "caption": `man on the moon`,
    },
    {
        "url": `codepen/mountains-yoga.jpg`,
        "caption": `mountains yoga`,
    },
    {
        "url": `codepen/tp-artichoke.jpg`,
        "caption": `artichoke`,
    },
    {
        "url": `codepen/tp-cafe.jpg`,
        "caption": `cafe`,
    },
    {
        "url": `codepen/tp-canyon.jpg`,
        "caption": `canyon`,
    },
    {
        "url": `codepen/tp-castle.jpg`,
        "caption": `castle`,
    },
    {
        "url": `codepen/tp-cereals.jpg`,
        "caption": `cereals`,
    },
    {
        "url": `codepen/tp-doggy.jpg`,
        "caption": `doggy`,
    },
    {
        "url": `codepen/tp-friend.jpg`,
        "caption": `friend`,
    },
    {
        "url": `codepen/tp-lake.jpg`,
        "caption": `lake`,
    },
    {
        "url": `codepen/tp-lion.jpg`,
        "caption": `lion`,
    },
    {
        "url": `codepen/tp-moth.jpg`,
        "caption": `moth`,
    },
    {
        "url": `codepen/tp-pug.jpg`,
        "caption": `pug`,
    },
];

/**
 * list of images to display
 */
const images = [ ...seed, ...seed, ...seed, ...seed, ...seed, ...seed, ...seed, ...seed ];

/**
 * displays images with a horizontal scroll bar
 */
const TwicSlider = () => (
    <TwicWrapper redirect="www.twicpics.com" tags={[ `tag1`, `tag2`, `tag3` ]}>
        <div className="twic-slider-container">
            <ul className="slider">
                { images.map( ( image, i ) => (
                    <li className="slider-item" key={i}>
                        <figure className="card">
                            <TwicImg src={image.url} focus="auto"></TwicImg>
                            <figcaption>
                                <p>{image.caption}</p>
                            </figcaption>
                        </figure>
                    </li>
                ) ) }
            </ul>
        </div>
    </TwicWrapper>
);

export default TwicSlider;
