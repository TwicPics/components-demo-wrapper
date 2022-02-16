import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

function TwicBasicGrid() {
    return (
        <TwicWrapper redirect="www.twicpics.com" tags={[ `tag1`, `tag2`, `tag3` ]}>
            <div className="twic-grid">
                <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
                <TwicImg
                    src="football.jpg"
                    ratio="16/9"
                    mode="cover"
                    step="100"
                    placeholder="meancolor"
                />
                <TwicImg
                    src="/football.jpg"
                    step="100"
                    focus="auto"
                    ratio="500/800"
                    placeholder="none"
                    alt="custom alt attribute"
                />
                <TwicImg
                    src="/football.jpg"
                    position="top"
                    step="100"
                    mode="contain"
                    ratio="4/3"
                    alt="custom alt attribute"
                />
                <TwicImg
                    src="/football.jpg"
                    position="top"
                    step="100"
                    mode="cover"
                    ratio="4/3"
                    alt="custom alt attribute"
                />
            </div>
        </TwicWrapper>
    );
}
export default TwicBasicGrid;