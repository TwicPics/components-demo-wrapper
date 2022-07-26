<template>
  <TwicWrapper>
    <div class="twic-focus-container">
      <TwicAbstract
        title="focus property"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-vue2-focus-property-f0orcn"
        codeSandBoxName="TwicPics x Vue - Focus"
      >
        <p>
          <strong>
            The <dfn title="focus property">focus</dfn> property changes the
            focus point coordinates of the image
          </strong>
          (only useful with
          <span class="twic-code">mode="cover"</span>).
        </p>
        <p>
          It allows to determine what should be visible when the image is
          cropped.
        </p>
        <p>
          You can set the focus by using coordinates or
          <span class="twic-code">auto</span> values:
        </p>
        <ul>
          <li>
            <strong>Coordinates</strong> represent a point in the image,
            specified as a couple of positive lengths, separated by the
            character <span class="twic-code">x</span>.
            <br />
            As an example, in
            <span class="twic-code">focus="1920x1282"</span>:<br />
            - <span class="twic-code">1920</span> is the coordinate along the
            x-axis (following the width of the image) <br />
            - and <span class="twic-code">1282</span> is the coordinate along
            the y-axis (following the height of the image)
          </li>
          <li>
            If <span class="twic-code">auto</span> is used in place of actual
            coordinates, the focus point will be chosen automagically for you!
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-grid">
        <div class="twic-item">
          <button class="twic-button" v-on:click="onChangeFocus">
            Click to change the focus point
          </button>
          <TwicImg
            :src="imgUrl"
            :focus="focusArray[focusIndex]"
            ratio="4/5"
            placeholder="preview"
          ></TwicImg>
          <span v-if="focusArray[focusIndex]">
            <span class="twic-code">focus="{{ focusArray[ focusIndex] }}"</span>
          </span>
          <span v-else>
            No focus (default)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" ratio="4/5" placeholder="preview"></TwicImg>
          <span>No focus (default)</span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="imgUrl"
            ratio="4/5"
            focus="1920x1282"
            placeholder="preview"
          ></TwicImg>
          <span>
            <span class="twic-code">focus="1920x1282"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="imgUrl"
            ratio="4/5"
            focus="auto"
            placeholder="preview"
          ></TwicImg>
          <span>
            <span class="twic-code">focus="auto"</span>
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
  name: "TwicFocus",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      imgUrl: `components/puppy.jpg`,
      focusArray: [``, `1920x1282`, `auto`],
      focusIndex: 0,
    };
  },
  methods: {
    onChangeFocus: function () {
      this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
    },
  },
};
</script>

<style lang="scss"></style>
