import styles from './index.module.scss';
import React from "react";
import Slideshow, { SlideshowItem } from "./slideshow/Slideshow";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
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
    <TwicWrapper framework="next">
        <div className={ styles[ `twic-slideshow-container` ] }>
            <TwicAbstract
                title="A Picture Carousel"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-next-responsive-slideshow-cqqtzk"
                codeSandBoxName="TwicPics x Next - Picture Carousel"
            >
                <p>
                   Lazy-loading, CLS, art direction...
                </p>
                <p>
                    <strong>Change the width of your browser</strong> to see the image ratio adapts according to
                    the CSS rules.
                </p>
            </TwicAbstract>
            <Slideshow>
                { images.map( ( image, i ) => (
                    <SlideshowItem key={ i }>
                        <TwicImg
                            className={ styles[ `twic-slideshow-responsive` ]}
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
