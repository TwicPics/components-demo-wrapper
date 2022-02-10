import { default as TwicHeader } from "./twicHeader";

import React from "react";

const TwicWrapper = ( { redirect, children, tags } ) => {
    return (
        <div className="twic-demo">
            <TwicHeader redirect={redirect} tags={tags} ></TwicHeader>
            <main className="twic-demo-container">
                    {children}
            </main>
        </div>
    );
}

export default TwicWrapper;