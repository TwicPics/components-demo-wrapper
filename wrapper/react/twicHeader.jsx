import React from "react";

const TwicHeader = ( { redirect = `https://www.twicpics.com/docs/getting-started/overview`, tags=[] } ) => {
    return (
        <header id="twic-header">
            <img src="https://assets.twicpics.com/videos/demo-twicpics/logo-white.png" alt="TwicPics logo" />
            <button>Redirect to {redirect}</button>
            { tags.map( ( tag, i ) => (<button key={ i }>{ tag }</button> ) )}
        </header>
    );
}

export default TwicHeader;