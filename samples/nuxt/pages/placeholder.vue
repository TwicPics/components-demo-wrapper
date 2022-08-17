<template>
  <!-- demonstrates placeholders features -->
  <TwicWrapper framework="nuxt">
    <div class="twic-placeholder-container">
      <TwicAbstract
        title="placeholder property"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-nuxt-placeholder-property-lnmldu"
        codeSandBoxName="TwicPics x Nuxt - Placeholder property"
      >
        <p>
          <strong>
            The <dfn title="placeholder property">placeholder</dfn> property helps you optimize user experience,
            CLS, and implement the LQIP technique.
          </strong>
        </p>
        <p>
          TwicPics Components automatically adds a background placeholder to
          your images: their size are reserved in the page before the images are
          actually loaded.
        </p>
        <p>
          The placeholder values can be:
          <span class="twic-code"> preview </span>,
          <span class="twic-code"> meancolor </span>,
          <span class="twic-code"> maincolor </span> or
          <span class="twic-code"> none </span>.
        </p>
        <p>
          The browser is told to load a SVG version as a backgroung image first,
          then to replace it with the full version later on.
        </p>
        <p>
          When set to <span class="twic-code">preview</span> (the default
          value), a blurry version of your image is used as a background image.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" v-on:click="togglePlaceholder">
          {{ togglePlaceholderBtnText }}
        </button>
      </div>
      <div
        class="twic-grid"
        v-bind:class="{ 'show-placeholders': showPlaceholders === true }"
      >
        <div class="twic-item">
          <TwicImg :src="imgUrl" placeholder="preview"></TwicImg>
          <span>
            <span class="twic-code">placeholder="preview"</span>
            (default value)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" placeholder="meancolor"></TwicImg>
          <span>
            <span class="twic-code">placeholder="meancolor"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" placeholder="maincolor"></TwicImg>
          <span>
            <span class="twic-code">placeholder="maincolor"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" placeholder="none"></TwicImg>
          <span>
            <span class="twic-code">placeholder="none"</span>
          </span>
        </div>
      </div>
    </div>
  </TwicWrapper>
</template>

<script>
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "TwicPlaceholder",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      imgUrl: `components/cat.jpg`,
      showPlaceholders: false,
      togglePlaceholderBtnText: `Click to reveal the placeholders`,
    };
  },
  methods: {
    togglePlaceholder() {
      this.showPlaceholders = !this.showPlaceholders;
      if (this.showPlaceholders) {
        this.togglePlaceholderBtnText = `Click to show the images`;
      } else {
        this.togglePlaceholderBtnText = `Click to reveal the placeholders`;
      }
    },
  },
};
</script>

<style lang="scss">
.twic-placeholder-container {
  .show-placeholders {
    img {
      visibility: hidden !important;
    }
    img + div {
      opacity: 1 !important;
    }
    img + div {
      opacity: 1 !important;
    }
  }
}
</style>
