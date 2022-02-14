import { default as TwicHeader } from "./twicHeader";

import React from "react";

const TwicWrapper = ( { redirect, children, tags } ) => {
    return (
        <div id="twic-demo-wrapper">
            <TwicHeader redirect={redirect} tags={tags} ></TwicHeader>
            <main id="twic-demo-container">
                    {children}
            </main>
        </div>
    );
}

export default TwicWrapper;