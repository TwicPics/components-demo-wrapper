import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

/**
 * list of unit images
 */
const seed = [
    {
        "url": `components/slider/pantone.jpg`,
    },
    {
        "url": `components/slider/coffee.jpg`,
    },
    {
        "url": `components/slider/reading.jpg`,
    },
    {
        "url": `components/slider/cat-2.jpg`,
    },
    {
        "url": `components/slider/mirror.jpg`,
    },
    {
        "url": `components/slider/books.jpg`,
    },
    {
        "url": `components/slider/sea.jpg`,
    },
    {
        "url": `components/slider/frames.jpg`,
    },
    {
        "url": `components/slider/dried-flower.jpg`,
    },
    {
        "url": `components/slider/dune.jpg`,
    },
    {
        "url": `components/slider/coffee-2.jpg`,
    },
    {
        "url": `components/slider/yak.jpg`,
    },
    {
        "url": `components/slider/dried-flower-2.jpg`,
    },
    {
        "url": `components/slider/guitar.jpg`,
    },
    {
        "url": `components/slider/field.jpg`,
    },
    {
        "url": `components/slider/woman-and-sand.jpg`,
    },
];

/**
 * list of images to display
 */
const images = [ ...seed ];

/**
 * displays images with a horizontal scroll bar
 */
const TwicSlider = () => (
    <TwicWrapper>
        <div className="twic-abstract">
            <h1>
                A slider
            </h1>
        </div>
        <div className="twic-slider-container">
            <ul className="slider">
                { images.map( ( image, i ) => (
                    <li className="slider-item" key={i}>
                        <figure className="card twic-item">
                            <TwicImg src={image.url}></TwicImg>
                        </figure>
                    </li>
                ) ) }
            </ul>
        </div>
    </TwicWrapper>
);

export default TwicSlider;
