<template>
  <!-- displays a carousel of responsive images -->
  <TwicWrapper>
    <div class="twic-slideshow-container">
      <TwicAbstract
        title="A Picture Carousel"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-vue2-carousel-5zhu43"
        codeSandBoxName="TwicPics x Vue - Picture Carousel"
      >
        <p>
          Use TwicPics for automatic lazy-loading, CLS optimization and art
          direction adaptation.
        </p>
        <p>
          <strong>Change the width of your browser</strong> to see the image
          ratio adapt according to the CSS rules.
        </p>
      </TwicAbstract>
      <Slideshow :images="images"></Slideshow>
    </div>
  </TwicWrapper>
</template>

<script>
import Slideshow from "./Slideshow.vue";
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "TwicSlideshow",
  components: {
    Slideshow,
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      images: [
        {
          url: `components/slideshow/space-1.jpg`,
          focus: ``,
        },
        {
          url: `components/slideshow/space-2.jpg`,
          focus: `50px100p`,
        },
        {
          url: `components/slideshow/space-3.jpg`,
          focus: `50px100p`,
        },
        {
          url: `components/slideshow/space-4.jpg`,
          focus: `50px100p`,
        },
        {
          url: `components/slideshow/space-5.jpg`,
          focus: `50px100p`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.twic-slideshow-container {
  margin: auto;
  width: 75%;
}
</style>
