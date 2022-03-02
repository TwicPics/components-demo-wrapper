/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/greece.jpg`;

/**
 * demonstrates that setting up components using CSS enables hassle-free responsive designs.
 */
const TwicResponsiveDesign = () => (
    <TwicWrapper>
        <div className="twic-responsive-container">
            <div className="twic-abstract">
                <h1>
                    Responsive design
                </h1>
                <p>Setting up components using CSS enables hassle-free responsive designs.</p>
                <p>
                    You only need to manage one image in the template: TwicPics handles your CSS to do the rest.
                </p>
                <p>
                    <strong>Change the width of your browser</strong> to see the image ratio adapts according to
                    the CSS rules.
                </p>
            </div>
            <div className="twic-item style-driven-responsive">
                <TwicImg src={imgUrl} class="style-driven-responsive" focus="48px100p">
                </TwicImg>
            </div>
        </div>
    </TwicWrapper>
);

export default TwicResponsiveDesign;
