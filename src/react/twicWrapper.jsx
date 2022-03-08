/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { default as TwicHeader } from "./twicHeader";

import React, { useEffect } from "react";

const TwicWrapper = ( { className, tags, redirect, children, framework = `react` } ) => {

    useEffect( () => {
        const WebFont = require( `webfontloader` );
        WebFont.load( {
            "google": {
                "families": [ `Montserrat:400,600,700` ],
            },
        } );
    }, [] );

    return (
        <div id="twic-demo-wrapper" className={ className }>
            <TwicHeader tags={tags} redirect={redirect} framework={framework}></TwicHeader>
            <main id="twic-demo-container">{children}</main>
        </div>
    );
};

export default TwicWrapper;
