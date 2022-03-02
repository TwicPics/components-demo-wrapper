import React from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

function TwicBasicGrid() {
    return (
        <TwicWrapper>
            <div className="twic-basic-grid-container">
                <div className="twic-abstract">
                    <h1>
                        A basic grid
                    </h1>
                </div>
                <div className="twic-grid">
                    <div className="twic-item">
                        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            ratio="16/9"
                            mode="cover"
                            step="100"
                            placeholder="meancolor"
                        />
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            step="100"
                            focus="auto"
                            ratio="500/800"
                            placeholder="none"
                            alt="custom alt attribute"
                        />
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            position="top"
                            step="100"
                            mode="contain"
                            ratio="4/3"
                            alt="custom alt attribute"
                        />
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            position="top"
                            step="100"
                            mode="cover"
                            ratio="4/3"
                            alt="custom alt attribute"
                        />
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
}
export default TwicBasicGrid;
