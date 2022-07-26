/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.scss";
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";

const imgUrl = `components/horse.jpg`;

/**
 * demonstrates how you can set up components using pure CSS and the power of CSS variables.
 */
const TwicStyleDriven = () => (
    <TwicWrapper framework="next">
      <div className={ styles[ `twic-style-driven-container` ] }>
        <TwicAbstract
            title="CSS style driven"
            codeSandUrl="https://codesandbox.io/s/twicpics-x-next-style-driven-oe5bzn"
            codeSandBoxName="TwicPics x Next - Style driven"
        >
          <p>
            You can set up the TwicPics components using pure CSS and the power of CSS variables.
          </p>
        </TwicAbstract>
        <h2>1. Display ratio with <span className="twic-code">--twic-ratio</span></h2>
        <div className="twic-grid">
          <div className={ `${ styles.landscape } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">landscape</span>
            </span>
          </div>
          <div className={ `${ styles.square } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">square</span>
            </span>
          </div>
          <div className={ `${ styles.portrait } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">portrait</span>
            </span>
          </div>
        </div>
        <h2>
          2. Class combination: <span className="twic-code">object-fit</span> and{" "}
          <span className="twic-code"> position</span> with{" "}
          <span className="twic-code">--twic-mode</span> and{" "}
          <span className="twic-code"> twic-position</span>
        </h2>
        <div className="twic-grid">
          <div className={ `${ styles.contain } ${ styles.left } twic-item` }>
            <TwicImg src={ imgUrl } ratio="16/9"></TwicImg>
            <span>class{" "}
              <span className="twic-code">contain</span>{" "}
              & class{" "}
              <span className="twic-code">left</span>
            </span>
          </div>
          <div className={ `${ styles.contain } ${ styles.right } twic-item` }>
            <TwicImg src={ imgUrl } ratio="16/9"></TwicImg>
            <span>class{" "}
              <span className="twic-code">contain</span>{" "}
              & class{" "} 
              <span className="twic-code">right</span>
            </span>
          </div>
          <div className={ `${ styles.cover } twic-item` }>
            <TwicImg src={ imgUrl } focus="50px100p" ratio="16/9"></TwicImg>
            <span>class{" "} 
              <span className="twic-code">cover</span>
            </span>
          </div>
        </div>
        <h2>
          3. Other classical settings (here with
          <span className="twic-code">width</span>)
        </h2>
        <div className="twic-grid">
          <div className={ `${ styles.lg } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">lg</span>
            </span>
          </div>
          <div className={ `${ styles.md } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">md</span>
            </span>
          </div>
          <div className={ `${ styles.sm } twic-item` }>
            <TwicImg src={ imgUrl }></TwicImg>
            <span>class{" "}
              <span className="twic-code">sm</span>
            </span>
          </div>
        </div>
      </div>
    </TwicWrapper>
);

export default TwicStyleDriven;
