/* eslint-disable react/prop-types */
import React from "react";

const TwicAbstract = ( { title, children, codeSandBoxName, codeSandUrl } ) => (
    <div className="twic-abstract">
        <h1>
            { title }
        </h1>
        <div>
            <div>
                { children }
            </div>
            { codeSandUrl &&
                <div className="codesandbox-container">
                    <a
                        href={`${ codeSandUrl }?fontsize=14&hidenavigation=1&theme=dark`}>
                        <img
                            alt={ codeSandBoxName ? ` Edit ${ codeSandBoxName } ` : ` Edit on CodeSandbox`}
                            src="https://codesandbox.io/static/img/play-codesandbox.svg">
                        </img>
                    </a>
                </div>
            }
        </div>
    </div>
);

export default TwicAbstract;
