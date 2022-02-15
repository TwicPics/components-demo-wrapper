import React from "react";
import styles from "./index.module.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

/**
 * list of unit images
 */
const seed = [
    {
        "url": `codepen/tp-write.jpg`,
        "text": `write`,
    },
    {
        "url": `codepen/tp-snow.jpg`,
        "text": `snow`,
    },
    {
        "url": `codepen/tp-rasp.jpg`,
        "text": `rasp`,
    },
    {
        "url": `codepen/tp-pug.jpg`,
        "text": `pug`,
    },
    {
        "url": `codepen/tp-moth.jpg`,
        "text": `moth`,
    },
    {
        "url": `codepen/tp-lion.jpg`,
        "text": `lion`,
    },
    {
        "url": `codepen/tp-lake.jpg`,
        "text": `lake`,
    },
    {
        "url": `codepen/tp-friend.jpg`,
        "text": `friend`,
    },
    {
        "url": `codepen/tp-cereals.jpg`,
        "text": `cereals`,
    },
    {
        "url": `codepen/tp-castle.jpg`,
        "text": `castle`,
    },
    {
        "url": `codepen/tp-canyon.jpg`,
        "text": `canyon`,
    },
    {
        "url": `codepen/tp-cafe.jpg`,
        "text": `cafe`,
    },
    {
        "url": `codepen/tp-artichoke.jpg`,
        "text": `artichoke`,
    },
];

/**
 * list of images to display
 */
const images = [
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
    ...seed,
];

/**
 * displays images in grid with responsive rules setted on li width
 * Custom behaviour on twic done ( scale 0 to 1 rather than opacity )
 * No placeholder
 */
const TwicResponsiveGrid = () => (
    <TwicWrapper redirect="www.twicpics.com" tags={[ `tag1`, `tag2`, `tag3` ]}>
        <div className={styles[ `responsive-grid-container` ]}>
            <ul>
                { images.map( ( image, i ) => (
                    <li key={ i }>
                        <a href="#">
                            <TwicImg placeholder="none" ratio="4/3" mode="cover" src={ image.url } />
                            <div className={styles.caption}>
                                <h3>{image.text}</h3></div>
                        </a>
                    </li>
                ) ) }
            </ul>
        </div>
    </TwicWrapper>
);
export default TwicResponsiveGrid;
