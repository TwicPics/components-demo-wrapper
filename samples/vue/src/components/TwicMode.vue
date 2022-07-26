<template>
  <!-- demonstrates mode features (contain or cover) -->
  <TwicWrapper>
    <div class="twic-mode-container">
      <TwicAbstract
        title="mode property"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-vue2-mode-property-k8trl9"
        codeSandBoxName="TwicPics x Vue - Mode property"
      >
        <p>
          <strong>
            The
            <dfn title="mode property">mode</dfn>
            property determines if the image fills or sits inside the
            area.
          </strong>
        </p>
        <p>Here are the two accepted values:</p>
        <ul>
          <li>
            <span class="twic-code">cover</span>:
            <span> the image fills the area and is cropped accordingly.</span>
          </li>
          <li>
            <span class="twic-code">contain</span>:
            <span> the image sits inside the area with no cropping.</span>
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <button class="twic-button" v-on:click="onChangeMode">
            Click to change the mode value
          </button>
          <TwicImg
            v-if="show"
            :src="imgUrl"
            :mode="modeValues[modeIndex]"
          ></TwicImg>
          <span>
            <span class="twic-code">mode="{{ modeValues[ modeIndex ] }}"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl"></TwicImg>
          <span>No mode set (<span class="twic-code">cover</span> by default)</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" mode="cover"></TwicImg>
          <span>
            <span class="twic-code">mode="cover"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" mode="contain"></TwicImg>
          <span>
            <span class="twic-code">mode="contain"</span>
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
  name: "TwicMode",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      imgUrl: `components/fox.jpg`,
      modeValues: [`cover`, `contain`],
      modeIndex: 0,
      // trick to force reload TwicImg
      show: true,
    };
  },
  methods: {
    onChangeMode() {
      setTimeout(() => (this.show = false));
      this.modeIndex = (this.modeIndex + 1) % this.modeValues.length;
      setTimeout(() => (this.show = true));
    },
  },
};
</script>

<style lang="scss">
.twic-mode-container {
  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
