import React from "react";
import "./index.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

function TwicBasicGrid() {
    return (
        <TwicWrapper>
            <div className="twic-basic-grid-container">
                <TwicAbstract
                    title="A basic example"
                    codeSandUrl="https://codesandbox.io/s/twicpics-x-react-basic-example-lkdrn"
                    codeSandBoxName="TwicPics x React - A basic example"
                >
                    <p>
                        TwicPics is a Responsive Image Service Solution (SaaS)
                        that enables on-demand responsive image generation.
                    </p>
                    <p>
                        TwicPics Components make it dead easy to unleash the power of TwicPics.
                    </p>

                        Here the properties used in this example:
                    <ul>
                        <li>
                            <span className="twic-code">ratio</span>:{" "}
                            <span>
                              determines the value of the width/height ratio
                              of the image display area.</span>
                        </li>
                        <li>
                            <span className="twic-code">mode</span>:{" "}
                            <span>determines if the image fills or sits inside the area.</span>
                        </li>
                        <li>
                            <span className="twic-code">focus</span>:{" "}
                            <span>changes the focus point coordinates of the image.</span>
                        </li>
                        <li>
                            <span className="twic-code">placeholder</span>:{" "}
                            <span>helps optimize your CLS and implement the LQIP technique.</span>
                        </li>
                    </ul>
                </TwicAbstract>
                <div className="twic-grid">
                  <div className="twic-item">
                      <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
                      <span>
                          Default values
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
                        <span className="twic-code">ratio="16/9"</span> &{" "}
                        <span className="twic-code">mode="cover"</span>: the image fills the area
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
                        <span className="twic-code">ratio="16/9"</span> &{" "}
                        <span className="twic-code">mode="contain"</span>: the image sits inside the area
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
                        <span className="twic-code">ratio="2/3"</span>,{" "}
                        <span className="twic-code">mode="contain"</span> &{" "}
                        <span className="twic-code">focus="auto"</span>
                      </span>
                  </div>
                </div>
            </div>
        </TwicWrapper>
    );
}
export default TwicBasicGrid;
