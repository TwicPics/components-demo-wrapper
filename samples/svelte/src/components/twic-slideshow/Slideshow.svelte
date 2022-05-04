<script>
import { onMount, onDestroy } from 'svelte';
import { TwicImg } from "@twicpics/components/svelte3";

export let images;

let activeIndex = 0;
let isPaused = false;
let interval = "";
const timerDuration = 3000;

onMount(() => {
  interval = setInterval(() => {
    if (!isPaused) {
      updateIndex(activeIndex + 1);
    }
  }, timerDuration);
});

onDestroy(() => {
  if (interval) {
    clearInterval(interval);
  }
});

const updateIndex = (newIndex) => {
  const nbElement = images.length - 1;
  let _newIndex = newIndex;
  if (newIndex < 0) {
    _newIndex = nbElement;
  } else if (newIndex > nbElement) {
    _newIndex = 0;
  }
  activeIndex = _newIndex;
};

const setIsPaused = () => {
  isPaused = !isPaused;
};
</script>

<div class="slideshow-container">
  <button
    class="slick-prev slick-arrow"
    on:click={ () => updateIndex(activeIndex - 1) }
  >
    &#8249;
  </button>
  <div class="twic-item">
    <div class="slideshow-inner-container">
      <div on:mouseenter={ setIsPaused } on:mouseleave={ setIsPaused }>
        <div
          class="inner"
          style="
            transform: translateX(-{ activeIndex * 100 }%);
          "
        >
          {#each images as img}
            <div class="slideshow-item">
              <TwicImg
                class="twic-slideshow-responsive"
                src={ img.url }
                focus={ img.focus }
              ></TwicImg>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <ul class="slick-dots">
    {#each images as img, index}
      <li
        class:slick-active={ index === activeIndex }
      >
        <button on:click={ () => updateIndex( index ) }></button>
      </li>
    {/each}
  </ul>
  <button
    class="slick-next slick-arrow"
    on:click={ () => updateIndex(activeIndex + 1) }
  >
    &#8250;
  </button>
</div>

<style lang="scss">
.slideshow-container {
  position: relative;

  .twic-item {
    padding-bottom: 8px !important;
    margin-bottom: 8px;
  }
}

.slideshow-inner-container {
  overflow: hidden;
}

.inner {
  transition: transform 0.9s;
  white-space: nowrap;
}

.slick-dots {
  text-align: center;
  padding: 0;
  & li {
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 5px;
    padding: 0;
    position: relative;
    & button {
      background: 0 0;
      border: 0;
      color: transparent;
      cursor: pointer;
      display: block;
      line-height: 0;
      padding: 5px;
      outline: 0;
      height: 20px;
      width: 20px;
      &:before {
        color: #000;
        content: "•";
        font-family: slick;
        font-size: 30px;
        line-height: 20px;
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        opacity: 0.25;
        -webkit-font-smoothing: antialiased;
      }
    }
    &.slick-active,
    &:hover {
      & button {
        &:before {
          opacity: 0.75;
        }
      }
    }
  }
}

.slick-arrow {
  border: 0;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 2rem;
  position: absolute;
  height: 3rem;
  width: 3rem;
  top: 50%;
  outline: 0;
  opacity: 0.5;
  padding-bottom: 5px;
  &:hover {
    opacity: 0.75;
  }

  &.slick-prev {
    left: -4rem;
  }

  &.slick-next {
    right: -4rem;
  }
}

.slideshow-item {
  align-items: center;
  background-color: transparent;
  display: inline-block;
  justify-content: center;
  width: 100%;
}

:global(.twic-slideshow-responsive) {
  --twic-ratio: calc(1);

  @media (min-width: 768px) {
    --twic-ratio: calc(4 / 3);
  }

  @media (min-width: 1024px) {
    --twic-ratio: calc(16 / 9);
  }

  @media (min-width: 1280px) {
    --twic-ratio: calc(1.85);
  }

  @media (min-width: 1536px) {
    --twic-ratio: calc(21 / 9);
  }
}
</style>
