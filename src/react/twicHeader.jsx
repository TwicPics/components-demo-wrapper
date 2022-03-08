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

const TwicHeader = ( { tags = [ `@twicpics-components` ],
    redirect = `https://github.com/TwicPics/components/tree/main/documentation#twicpics-components`,
    framework } ) => (
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
);

export default TwicHeader;
