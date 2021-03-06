/* eslint-disable react/prop-types */
import React from "react";

const LOGOS_PATH = `https://assets.twicpics.com/demo/@twicpics-components/logos/`;

const FrameworkLogo = ( { framework = `react` } ) => {
    const REACT = [
        `react.png`,
        `react-logo`,
        `React logo`,
    ];
    const NEXT = [
        `next.png`,
        `next-logo`,
        `Next logo`,
    ];
    const GATSBY = [
        `gatsby.svg`,
        `gatsby-logo`,
        `Gatsby logo`,
    ];
    let logo = ``;
    let cssClass = ``;
    let alt = ``;
    switch ( framework ) {
        case `react`:
            [ logo, cssClass, alt ] = REACT;
            break;
        case `next`:
            [ logo, cssClass, alt ] = NEXT;
            break;
        case `gatsby`:
            [ logo, cssClass, alt ] = GATSBY;
            break;
        default:
    }
    return (
        <img
            src={`${ LOGOS_PATH }${ logo }`}
            className={cssClass}
            alt={alt}
        />
    );
};

const REACT_DOC = `https://github.com/TwicPics/components/blob/main/documentation/react.md`;
const NEXT_DOC = `https://github.com/TwicPics/components/blob/main/documentation/next.md`;
const GATSBY_DOC = `https://github.com/TwicPics/components/blob/main/documentation/gatsby.md`;

const TwicHeader = ( { tags = [ `@twicpics-components` ], framework } ) => {
    let redirect = "";
    switch (framework) {
        case "react":
            redirect = REACT_DOC;
            break;
        case "next":
            redirect = NEXT_DOC;
            break;
        case "gatsby":
            redirect = GATSBY_DOC;
            break;
        default:
            redirect = REACT_DOC;
    }

    return (
        <header id="twic-header">
            <a href="/" title="Home">
                <h1 className="heading-primary">
                    <img
                        className="twicpics-logo"
                        src={`${ LOGOS_PATH }twicpics.svg`}
                        alt="TwicPics logo"
                    />
                    <span>x</span>
                    <FrameworkLogo framework={ framework } />
                </h1>
            </a>
            <div className="tags-container">
                {tags.map( ( tag, i ) => (
                    <div key={i} className="tag">
                        {tag}
                    </div>
                ) )}
                <a
                    href={redirect}
                    target="_blank"
                    className="documentation-link tag tag--bg-purple-rain" rel="noreferrer"
                >
                    Documentation
                </a>
            </div>
        </header>
)};
export default TwicHeader;
