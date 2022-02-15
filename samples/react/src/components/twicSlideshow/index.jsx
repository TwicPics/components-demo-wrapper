import './index.scss';
import React from "react";
import Slideshow, { SlideshowItem } from "./slideshow";
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
    <TwicWrapper redirect="www.twicpics.com" tags={[ `tag1`, `tag2`, `tag3` ]}>
        <div className="twic-slideshow-container">
            <Slideshow>
                { images.map( ( image, i ) => (
                    <SlideshowItem key={ i }>
                        <TwicImg
                            className="twic-slideshow-responsive"
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
