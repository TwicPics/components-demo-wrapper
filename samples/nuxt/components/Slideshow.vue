<template>
  <div class="slideshow-container">
    <button
      class="slick-prev slick-arrow"
      v-on:click="updateIndex(activeIndex - 1)"
    >
      &#8249;
    </button>
    <div class="twic-item">
      <div class="slideshow-inner-container">
        <div v-on:mouseenter="setIsPaused" v-on:mouseleave="setIsPaused">
          <div
            class="inner"
            v-bind:style="{
              transform: 'translateX(-' + activeIndex * 100 + '%)',
            }"
          >
            <div class="slideshow-item" v-for="img in images" :key="img.url">
              <TwicImg
                class="twic-slideshow-responsive"
                :src="img.url"
                :focus="img.focus"
              ></TwicImg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="slick-dots">
      <li
        v-for="(img, imgIndex) in images"
        :key="img.url"
        v-bind:class="{ 'slick-active': imgIndex === activeIndex }"
      >
        <button v-on:click="updateIndex(imgIndex)"></button>
      </li>
    </ul>
    <button
      class="slick-next slick-arrow"
      v-on:click="updateIndex(activeIndex + 1)"
    >
      &#8250;
    </button>
  </div>
</template>

<script>
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  mounted() {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.updateIndex(this.activeIndex + 1);
      }
    }, this.timerDuration);
  },
  unmounted() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      isPaused: false,
      timerDuration: 3000,
      interval: "",
    };
  },
  methods: {
    updateIndex(newIndex) {
      const nbElement = this.images.length - 1;
      let _newIndex = newIndex;
      if (newIndex < 0) {
        _newIndex = nbElement;
      } else if (newIndex > nbElement) {
        _newIndex = 0;
      }
      this.activeIndex = _newIndex;
    },
    setIsPaused() {
      this.isPaused = !this.isPaused;
    },
  },
};
</script>

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

.twic-slideshow-responsive {
  --twic-ratio: calc(1);
}

.twic-slideshow-responsive {
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
