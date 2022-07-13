import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const timerDuration = 3000;

import styles from "./Slideshow.module.scss";

export const SlideshowItem = ({ children, width }) => (
  <div
    className={styles[`slideshow-item`]}
    style={{
      width,
    }}
  >
    {children}
  </div>
);

const Slideshow = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    const nbElement = React.Children.count(children) - 1;
    let _newIndex = newIndex;
    if (newIndex < 0) {
      _newIndex = nbElement;
    } else if (newIndex >= nbElement) {
      _newIndex = 0;
    }
    setActiveIndex(_newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, timerDuration);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className={styles[`slideshow-container`]}>
      <button
        className={`${styles[`slick-prev`]} ${styles[`slick-arrow`]}`}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        &#8249;
      </button>
      <div className="twic-item">
        <div className={styles[`slideshow-inner-container`]}>
          <div
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={styles.inner}
              style={{
                // eslint-disable-next-line no-magic-numbers
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  width: `100%`,
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <ul className={styles[`slick-dots`]}>
        {React.Children.map(children, (_child, index) => (
          <li className={`${index === activeIndex ? `slick-active` : ``}`}>
            <button
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          </li>
        ))}
      </ul>
      <button
        className={`${styles[`slick-next`]} ${styles[`slick-arrow`]}`}
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Slideshow;
