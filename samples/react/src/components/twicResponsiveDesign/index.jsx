/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `leila_bekhti.jpg`;

/**
 * demonstrates that setting up components using CSS enables hassle-free responsive designs.
 */
const TwicResponsiveDesign = () => (
    <TwicWrapper>
        <div className="twic-responsive-container">
            <div className="twic-abstract">
                <h1>
                    Setting up components using `CSS` enables hassle-free responsive designs.
                </h1>
                <p>
                    You manage only one image in the template: TwicPics and the `CSS` do the rest.
                </p>
                <p>
                    <b>Change your browser's width</b>: the image ratio adapts according to the `CSS` rules.
                </p>
            </div>
            <div className="twic-item style-driven-responsive">
                <TwicImg src={imgUrl} class="style-driven-responsive" focus="auto">
                </TwicImg>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicResponsiveDesign;
