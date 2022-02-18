import React from "react";
import styles from "./index.module.scss";
import Slideshow, { SlideshowItem } from "./slideshow/Slideshow";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

/**
 * images list
 */
const images = [
    {
        "url": `codepen/tp-snow.jpg`,
        "focus": `auto`,
    },
    {
        "url": `codepen/tp-cafe.jpg`,
        "focus": `auto`,
    },
    {
        "url": `codepen/tp-castle.jpg`,
        "focus": `auto`,
    },
    {
        "url": `codepen/tp-doggy.jpg`,
        "focus": `200x200`,
    },
    {
        "url": `codepen/tp-lake.jpg`,
        "focus": `auto`,
    },
];

/**
 * displays a carousel of responsive images
 */
const TwicSlideshow = () => (
    <TwicWrapper>
        <div className={styles[ `twic-slideshow-container` ]}>
            <Slideshow>
                { images.map( ( image, i ) => (
                    <SlideshowItem key={ i }>
                        <TwicImg
                            className={styles[ `twic-slideshow-responsive` ]}
                            focus={ image.focus }
                            src={ image.url }
                        ></TwicImg>
                    </SlideshowItem>
                ) ) }
            </Slideshow>
        </div>
    </TwicWrapper>
);

export default TwicSlideshow;
