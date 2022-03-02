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
        "url": `components/slideshow/space-1.jpg`,
        "focus": ``,
    },
    {
        "url": `components/slideshow/space-2.jpg`,
        "focus": `50px100p`,
    },
    {
        "url": `components/slideshow/space-3.jpg`,
        "focus": `50px100p`,
    },
    {
        "url": `components/slideshow/space-4.jpg`,
        "focus": `50px100p`,
    },
    {
        "url": `components/slideshow/space-5.jpg`,
        "focus": `50px100p`,
    },
];

/**
 * displays a carousel of responsive images
 */
const TwicSlideshow = () => (
    <TwicWrapper>
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
