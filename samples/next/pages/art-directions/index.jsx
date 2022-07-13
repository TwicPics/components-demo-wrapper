/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/greece.jpg`;

/**
 * demonstrates that setting up components using CSS enables hassle-free responsive designs.
 */
const TwicArtDirections = () => (
    <TwicWrapper framework="next">
        <div className={ styles[ `twic-art-directions-container` ] }>
            <TwicAbstract
                title="Art directions with CSS media queries"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-next-art-direction-ps2zj"
                codeSandBoxName="TwicPics x Next - Art Directions"
            >
                <p>Setting up components using CSS enables hassle-free responsive designs.</p>
                <p>You do not need to create a set of images derived from the original.</p>
                <p>
                    You only need to manage a master image in your template:
                    TwicPics understands your CSS and does the rest.
                </p>
                <p>
                    <strong>Change the width of your browser </strong>
                    to see the image ratio adapt according to the CSS rules.
                </p>
            </TwicAbstract>
            <div className={ `${ styles[ `style-driven-responsive` ] } twic-item }`}>
                <TwicImg src={imgUrl} className={ styles[ `style-driven-responsive` ] } focus="48px100p">
                </TwicImg>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicArtDirections;
