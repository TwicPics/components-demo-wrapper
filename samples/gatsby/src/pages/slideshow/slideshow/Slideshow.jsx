import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  inner,
  slideshowItem,
  slideshowContainer,
  slickArrow,
  slickActive,
  slickNext,
  slickPrev,
  slideshowInnerContainer,
  slickDots,
} from "./Slideshow.module.scss";

const timerDuration = 3000;

export const SlideshowItem = ({ children, width }) => (
  <div
    className={slideshowItem}
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
    <div className={slideshowContainer}>
      <button
        className={`${slickPrev} ${slickArrow}`}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        {" "}
        &#8249;{" "}
      </button>
      <div className="twic-item">
        <div className={slideshowInnerContainer}>
          <div
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={inner}
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
      <ul className={slickDots}>
        {React.Children.map(children, (_child, index) => (
          <li className={`${index === activeIndex ? slickActive : ``}`}>
            <button
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          </li>
        ))}
      </ul>
      <button
        className={`${slickNext} ${slickArrow}`}
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        {" "}
        &#8250;{" "}
      </button>
    </div>
  );
};

export default Slideshow;
