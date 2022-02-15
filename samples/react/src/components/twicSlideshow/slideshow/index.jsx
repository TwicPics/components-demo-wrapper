import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./index.scss";

const timerDuration = 3000;

export const SlideshowItem = ( { children, width } ) => (
    <div className="slideshow-item" style={ {
        width,
    } }>
        { children }
    </div>
);

const Slideshow = ( { children } ) => {
    const [ activeIndex, setActiveIndex ] = useState( 0 );
    const [ paused, setPaused ] = useState( false );

    const updateIndex = newIndex => {
        const nbElement = React.Children.count( children ) - 1;
        let _newIndex = newIndex;
        if ( newIndex < 0 ) {
            _newIndex = nbElement;
        } else if ( newIndex >= nbElement ) {
            _newIndex = 0;
        }
        setActiveIndex( _newIndex );
    };

    useEffect( () => {
        const interval = setInterval( () => {
            if ( !paused ) {
                updateIndex( activeIndex + 1 );
            }
        }, timerDuration );

        return () => {
            if ( interval ) {
                clearInterval( interval );
            }
        };
    } );

    const handlers = useSwipeable( {
        "onSwipedLeft": () => updateIndex( activeIndex + 1 ),
        "onSwipedRight": () => updateIndex( activeIndex - 1 ),
    } );

    return (
        <div className="slideshow-container">
            <button className="slick-prev slick-arrow" onClick={ () => {
                updateIndex( activeIndex - 1 );
            } }>&#8249;</button>
            <div className="slideshow-inner-container">
                <div
                    {...handlers}
                    onMouseEnter={() => setPaused( true )}
                    onMouseLeave={() => setPaused( false )}
                >
                    <div
                        className="inner"
                        style={{
                            // eslint-disable-next-line no-magic-numbers
                            "transform": `translateX(-${ activeIndex * 100 }%)`,
                        }}
                    >
                        {React.Children.map( children, child => React.cloneElement( child, {
                            "width": `100%`,
                        } ) )}
                    </div>
                    <ul className="slick-dots">
                        {React.Children.map( children, ( _child, index ) => (
                            <li className={`${ index === activeIndex ? `slick-active` : `` }`}>
                                <button onClick={ () => {
                                    updateIndex( index );
                                } } ></button>
                            </li>
                        ) )}
                    </ul>
                </div>
            </div>
            <button className="slick-next slick-arrow" onClick={ () => {
                updateIndex( activeIndex + 1 );
            } }>&#8250;</button>
        </div>
    );
};

export default Slideshow;
