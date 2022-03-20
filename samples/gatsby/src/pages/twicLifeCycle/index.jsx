/* eslint-disable max-lines */
import React from "react";
import { twicLifeCycle } from "./index.module.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

/**
 * list of unit images
 */
const seed = [
    {
        "url": `components/portraits/woman-1.jpg`,
        "focus": `50px45p`,
    },
    {
        "url": `components/portraits/man-1.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/woman-2.jpg`,
        "focus": `50px30p`,
    },
    {
        "url": `components/portraits/man-2.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-3.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-3.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-4.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-4.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-5.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-5.jpg`,
        "focus": `50px0p`,
    },
    {
        "url": `components/portraits/woman-6.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-6.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-7.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-7.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-8.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-8.jpg`,
        "focus": `50px100p`,
    },
    {
        "url": `components/portraits/woman-9.jpg`,
        "focus": `50px30p`,
    },
    {
        "url": `components/portraits/man-9.jpg`,
        "focus": `50px30p`,
    },
    {
        "url": `components/portraits/woman-10.jpg`,
        "focus": `50px55p`,
    },
    {
        "url": `components/portraits/man-10.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-11.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/man-11.jpg`,
        "focus": `50px35p`,
    },
    {
        "url": `components/portraits/woman-12.jpg`,
        "focus": `50px30p`,
    },
    {
        "url": `components/portraits/man-12.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-13.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-13.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-14.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/man-14.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-15.jpg`,
        "focus": `50px30p`,
    },
    {
        "url": `components/portraits/man-15.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-16.jpg`,
        "focus": `50px55p`,
    },
    {
        "url": `components/portraits/man-16.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/woman-17.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-17.jpg`,
        "focus": `50px60p`,
    },
    {
        "url": `components/portraits/woman-18.jpg`,
        "focus": ``,
    },
    {
        "url": `components/portraits/man-18.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/woman-19.jpg`,
        "focus": `50px60p`,
    },
    {
        "url": `components/portraits/man-19.jpg`,
        "focus": `50px20p`,
    },
    {
        "url": `components/portraits/woman-20.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/woman-21.jpg`,
        "focus": `50px45p`,
    },
    {
        "url": `components/portraits/woman-22.jpg`,
        "focus": `50px55p`,
    },
    {
        "url": `components/portraits/man-22.jpg`,
        "focus": `50px35p`,
    },
    {
        "url": `components/portraits/woman-23.jpg`,
        "focus": `50px45p`,
    },
    {
        "url": `components/portraits/man-26.jpg`,
        "focus": `50px45p`,
    },
    {
        "url": `components/portraits/woman-25.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/man-24.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/woman-26.jpg`,
        "focus": `50px40p`,
    },
    {
        "url": `components/portraits/man-25.jpg`,
        "focus": `50px40p`,
    },
];

/**
 * list of images to display
 */
const images = [
    ...seed,
    ...seed,
    ...seed,
];

/**
 * displays images in grid with responsive rules set on li width
 * Custom behaviour on twic done ( scale 0 to 1 rather than opacity )
 * No placeholder
 */
const TwicLifeCycle = () => (
    <TwicWrapper framework="gatsby">
        <TwicAbstract
            title="TwicPics Life Cycle"
            codeSandUrl="https://codesandbox.io/s/twicpics-x-gatsby-life-cycle-led4rf"
            codeSandBoxName="TwicPics x Gatsby - Life"
        >
            <p>
                It may be necessary to apply specific behavior to an image depending on its processing state.
            </p>
            <p>
                To help you, the TwicPics script tags elements with specific classes as part of a life cycle
            </p>
            <p>
                In this example, we apply a scale 0 to 1 transition when the image is ready to be displayed
                <span className="twic-code" >class=twic-done</span>.
            </p>
            <p>
                Scroll down to experience lazy loading in action.
            </p>
        </TwicAbstract>
        <div className={ twicLifeCycle }>
            <ul className="">
                { images.map( ( image, i ) => (
                    <li className="twic-item" key={ i }>
                        <a href="#">
                            <TwicImg
                                src={ image.url } focus={ image.focus }
                                placeholder="none" ratio="4/3" mode="cover"
                            />
                        </a>
                    </li>
                ) ) }
            </ul>
        </div>
    </TwicWrapper>
);
export default TwicLifeCycle;
