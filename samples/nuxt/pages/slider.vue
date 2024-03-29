<template>
  <!-- displays images with a horizontal scroll bar -->
  <TwicWrapper framework="nuxt">
    <TwicAbstract
      title="A slider"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-nuxt-slider-8m0ui2"
      codeSandBoxName="TwicPics x Nuxt - Slider sample"
    >
      <p>
        A simple slider that uses TwicPics for automatic lazy-loading, CLS
        optimization and art directions adaptation.
      </p>
      <p>
        <strong>Change the width of your browser</strong> to see the image
        aspect-ratio adapt according to the CSS rules.
      </p>
    </TwicAbstract>
    <div class="twic-slider-container">
      <ul class="slider">
        <li class="slider-item" v-for="img in images" :key="img.url">
          <figure class="card twic-item">
            <TwicImg :src="img.url"></TwicImg>
          </figure>
        </li>
      </ul>
    </div>
  </TwicWrapper>
</template>

<script>
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "SliderPage",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      images: [
        {
          url: `components/slider/pantone.jpg`,
        },
        {
          url: `components/slider/coffee.jpg`,
        },
        {
          url: `components/slider/reading.jpg`,
        },
        {
          url: `components/slider/cat-2.jpg`,
        },
        {
          url: `components/slider/mirror.jpg`,
        },
        {
          url: `components/slider/books.jpg`,
        },
        {
          url: `components/slider/sea.jpg`,
        },
        {
          url: `components/slider/frames.jpg`,
        },
        {
          url: `components/slider/dried-flower.jpg`,
        },
        {
          url: `components/slider/dune.jpg`,
        },
        {
          url: `components/slider/coffee-2.jpg`,
        },
        {
          url: `components/slider/yak.jpg`,
        },
        {
          url: `components/slider/dried-flower-2.jpg`,
        },
        {
          url: `components/slider/guitar.jpg`,
        },
        {
          url: `components/slider/field.jpg`,
        },
        {
          url: `components/slider/woman-and-sand.jpg`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.twic-slider-container {
  .slider {
    display: flex;
    list-style: none;
    overflow-x: scroll;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
  }

  .slider-item {
    flex-grow: 1;
    flex-shrink: 0;
    margin-left: 1.6rem;
    scroll-snap-align: start;
  }

  .card {
    margin: unset;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    height: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(black, 0.5);
    border-radius: 3px;
  }
}

.slider-item {
  flex-basis: 100%;
  --twic-ratio: calc(4 / 5);
}

.slider-item {
  @media (min-width: 768px) {
    flex-basis: 50%;
    --twic-ratio: calc(1);
  }

  @media (min-width: 1024px) {
    --twic-ratio: calc(4 / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: 30%;
  }
}
</style>
