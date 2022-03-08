/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
const imgUrl = `components/greece.jpg`;

/**
 * demonstrates that setting up components using CSS enables hassle-free responsive designs.
 */
const TwicArtDirection = () => (
    <TwicWrapper>
        <div className="twic-art-direction-container">
            <TwicAbstract
                title="Art Direction with CSS Media Queries"
                codeSandUrl="https://codesandbox.io/s/twicpics-x-react-art-direction-nce8p3"
                codeSandBoxName="TwicPics x React - Art Direction"
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
            <div className="twic-item style-driven-responsive">
                <TwicImg src={ imgUrl } class="style-driven-responsive" focus="48px100p">
                </TwicImg>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicArtDirection;
