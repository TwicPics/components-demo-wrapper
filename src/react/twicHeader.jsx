/* eslint-disable react/prop-types */
import React from "react";

const TwicHeader = ( { title = ``,
    tags = [],
    redirect = `https://www.twicpics.com/docs/getting-started/overview` } ) => (
    <header id="twic-header">
        <h1 className="heading-primary">
            <img
                className="twicpics-logo"
                // eslint-disable-next-line max-len
                src="https://assets.website-files.com/5ec5244ea1611d6855cdc471/615dc545a7fa485a4df0ea0a_Horizontal%403x.png"
                alt="TwicPics logo"
            />
            <span>x</span>
            <img
                className="react-logo"
                src="https://assets.twicpics.com/demo/@twicpics-components/framework-logos/react.png"
                alt="React logo"
            />
        </h1>
        <h2 className="heading-secondary">{title}</h2>
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
          TwicPics documentation
            </a>
        </div>
    </header>
);

export default TwicHeader;
