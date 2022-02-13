import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import styles from "./Slideshow.module.scss";

export const SlideshowItem = ( { children, width } ) => {
    return (
        <div className={styles[`slideshow-item`]} style={ { width: width } }>
            { children }
        </div>
    );
};

const Slideshow = ( { children } ) => {
    const [ activeIndex, setActiveIndex ] = useState( 0 );
    const [ paused, setPaused ] = useState( false );

    const updateIndex = ( newIndex ) => {
        if ( newIndex < 0 ) {
            newIndex = React.Children.count( children ) - 1;
        } else if (newIndex >= React.Children.count( children ) ) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    useEffect( () => {
        const interval = setInterval( () => {
            if ( !paused ) {
                updateIndex( activeIndex + 1 );
            }
        }, 3000 );

        return () => {
            if ( interval ) {
                clearInterval( interval );
            }
        };
    });

    const handlers = useSwipeable( {
        onSwipedLeft: () => updateIndex( activeIndex + 1 ),
        onSwipedRight: () => updateIndex( activeIndex - 1 )
    } );

    return (
        <div className={styles[`slideshow-container`]}>
            <button className={ `${ styles[`slick-prev`] } ${ styles[ `slick-arrow` ] }`} onClick={ () => { updateIndex(activeIndex - 1); } }>&#8249;</button>
                <div className={styles[`slideshow-inner-container`]}>
                    <div
                        {...handlers}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div
                            className={styles[`inner`]}
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {React.Children.map(children, (child, index) => {
                                return React.cloneElement(child, { width: "100%" });
                            })}
                        </div>
                        <ul className={styles[`slick-dots`]}>
                            {React.Children.map(children, (_child, index) => {
                                return (
                                    <li className={`${index === activeIndex ? "slick-active" : ""}`}>
                                        <button onClick={ () => { updateIndex(index); } } ></button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <button className={ `${ styles[`slick-next`] } ${ styles[ `slick-arrow` ] }`} onClick={ () => { updateIndex(activeIndex + 1); } }>&#8250;</button>
        </div>
    );
};

export default Slideshow;
