import React from "react";
import { installTwicPics } from "@twicpics/components/react";
import '@twicpics/components-demo-wrapper/style.css';
import "@twicpics/components/style.css";
import "./_app.css";

installTwicPics( {
    "domain": `https://demo.twic.pics`,
    "anticipation": 0.5,
    "step": 100,
} );

function MyApp( { Component, pageProps } ) {
    return <Component {...pageProps} />;
}

export default MyApp;

