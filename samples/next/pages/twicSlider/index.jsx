import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

/**
 * list of images to display in slider
 */
const images = [
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
 * displays images with a horizontal scroll bar
 */
const TwicSlider = () => (
    <TwicWrapper framework="next">
        <div className="twic-abstract">
            <h1>
                A slider
            </h1>
            <p>
                A simple slider and TwicPics components : lazy-loading, CLS, art direction...
            </p>
            <p>
                <strong>Change the width of your browser</strong> to see the image ratio adapts according to
                    the CSS rules.
            </p>
        </div>
        <div className={ styles[ `twic-slider-container` ] }>
            <ul className= { styles.slider }>
                { images.map( ( image, i ) => (
                    <li className={ styles[ `slider-item` ] } key={i}>
                        <figure className={ `${ styles.card } twic-item` }>
                            <TwicImg src={image.url}></TwicImg>
                        </figure>
                    </li>
                ) ) }
            </ul>
        </div>
    </TwicWrapper>
);

export default TwicSlider;
