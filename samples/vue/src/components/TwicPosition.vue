<template>
  <TwicWrapper>
    <div class="twic-position-container">
      <TwicAbstract
        title="position property"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-vue2-position-property-bqwcdn"
        codeSandBoxName="TwicPics x Vue - Position property"
      >
        <p>
          In <span class="twic-code">contain</span> mode,
          <strong>
            the <dfn title="position property">position</dfn> property
            changes the location of the image inside the area of the component.
          </strong>
        </p>
        <p>
          The syntax is the same as for CSS position properties (e.g.
          <span class="twic-code"> background-position</span> or
          <span class="twic-code"> object-position</span>).
        </p>
        <p>
          Useful values are <span class="twic-code"> top</span>,
          <span class="twic-code"> bottom</span>,
          <span class="twic-code"> left</span>, and
          <span class="twic-code"> right</span>, but all valid CSS position
          values are valid.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" v-on:click="onChangePosition">
          Click to change the position
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg
            :src="landscapeImgUrl"
            mode="contain"
            placeholder="none"
            :position="verticalPositionArray[verticalPositionIndex]"
          >
          </TwicImg>
          <span>
            <span class="twic-code">position="{{ verticalPositionArray[verticalPositionIndex] }}"</span>
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="portraitImgUrl"
            mode="contain"
            placeholder="none"
            :position="horizontalPositionArray[horizontalPositionIndex]"
          >
          </TwicImg>
          <span>
            <span class="twic-code">position="{{ horizontalPositionArray[horizontalPositionIndex] }}"</span>
          </span
          >
        </div>
        <div class="twic-item">
          <TwicImg :src="landscapeImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span>No position set (<span class="twic-code"> center</span> by default)</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="portraitImgUrl" mode="contain" placeholder="none">
          </TwicImg>
          <span>No position set (<span class="twic-code"> center</span> by default)</span>
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
  name: "TwicPosition",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      landscapeImgUrl: `components/position/horse.jpg`,
      portraitImgUrl: `components/position/forest.jpg`,
      horizontalPositionArray: [`left`, `right`, `center`],
      horizontalPositionIndex: 0,
      verticalPositionArray: [`top`, `bottom`, `center`],
      verticalPositionIndex: 0,
    };
  },
  methods: {
    onChangePosition() {
      this.horizontalPositionIndex =
        (this.horizontalPositionIndex + 1) %
        this.horizontalPositionArray.length;
      this.verticalPositionIndex =
        (this.verticalPositionIndex + 1) % this.verticalPositionArray.length;
    },
  },
};
</script>

<style lang="scss">
.twic-position-container {
  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
