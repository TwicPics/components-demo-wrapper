import React from "react";
import styles from "./index.module.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

function TwicBasicGrid() {
    return (
        <TwicWrapper framework="next">
            <div className={styles[ `twic-basic-grid-container` ]}>
                <TwicAbstract
                    title="A basic example"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-next-basic-example-xe9spg"
                    codeSandBoxName="TwicPics x Next - A basic example"
                >
                    <p>
                        TwicPics is a Responsive Image Service Solution <span className="twic-code">SaaS</span>
                        that enables on-demand responsive image generation.
                    </p>
                    <p>
                        TwicPics Components make it dead easy to unleash the power of TwicPics.
                    </p>

                        Here the properties used in this example :
                    <ul>
                        <li>
                            <span className="twic-code">ratio</span>:
                            <span>
                                    determines the value of the height/width ratio
                                    of the image display area.</span>
                        </li>
                        <li>
                            <span className="twic-code">mode</span>:
                            <span>determines if the image fills or sits inside the aera.</span>
                        </li>
                        <li>
                            <span className="twic-code">focus</span>:
                            <span>changes the focus point coordinates of the image.</span>
                        </li>
                        <li>
                            <span className="twic-code">placeholder</span>:
                            <span>helps to optimize your CLS and implement the LQIP technique.</span>
                        </li>
                    </ul>
                </TwicAbstract>
                <div className="twic-grid">
                    <div className={styles[ `twic-item` ]}>
                        <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
                        <span>
                            default
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            ratio="16/9"
                            mode="cover"
                            placeholder="meancolor"
                        />
                        <span>
                             ratio=16/9, image fills aera
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            step="100"
                            mode="contain"
                            ratio="16/9"
                        />
                        <span>
                             ratio=16/9, image sits inside aera
                        </span>
                    </div>
                    <div className="twic-item">
                        <TwicImg
                            src="/football.jpg"
                            step="100"
                            focus="auto"
                            ratio="2/3"
                            placeholder="maincolor"
                        />
                        <span>
                             ratio=2/3, image fills aera + focus auto
                        </span>
                    </div>
                </div>
            </div>
        </TwicWrapper>
    );
}
export default TwicBasicGrid;
