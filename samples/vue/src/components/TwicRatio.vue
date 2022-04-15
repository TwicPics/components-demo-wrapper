<template>
  <!-- demonstrates ratio features -->
  <TwicWrapper>
    <div class="twic-ratio-container">
      <TwicAbstract
        title="ratio property"
        codeSandBoxUrl=""
        codeSandBoxName="TwicPics x Vue - Ratio property"
      >
        <p>
          The <span class="twic-code">ratio</span> property determines the value
          of the width/height ratio of the image display area.
        </p>
        <p>Value can be:</p>
        <ul>
          <li>
            a ratio expression of the form width/height like 4/3, 16/9 or 1/1.
          </li>
          <li>
            a number that is the result of such an expression like 1.85, 2 or
            0.5.
          </li>
        </ul>
        <p>
          A square area (<span class="twic-code"> ratio=`1`</span>) will be
          created by default.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" v-on:click="onChangeRatio">
          Click to change the aspect-ratio
        </button>
        <button class="twic-button" v-on:click="onChangeAreaWidth">
          Click to change the area width
        </button>
      </div>
      <div
        class="twic-grid"
        v-bind:class="{
          'modal-opened': show,
          'half-width': fullWidthAera === false,
        }"
      >
        <div class="twic-item">
          <TwicImg v-if="show" :src="imgUrl" :ratio="ratioValues[ratioIndex]">
          </TwicImg>
          <span>
            ratio={{
              ratioValues[ratioIndex] ? ratioValues[ratioIndex] : "1 [default]"
            }}
            (cover)
          </span>
        </div>
        <div class="twic-item">
          <TwicImg
            v-if="show"
            :src="imgUrl"
            mode="contain"
            :ratio="ratioValues[ratioIndex]"
          >
          </TwicImg>
          <span>
            ratio={{
              ratioValues[ratioIndex] ? ratioValues[ratioIndex] : "1 [default]"
            }}
            (contain)
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
      imgUrl: `components/woman-and-winter.jpg`,
      ratioValues: [`2.39`, `16/9`, `4/3`, ``, `0.75`],
      ratioIndex: 0,
      fullWidthAera: true,
      // trick to force reload TwicImg
      show: true,
    };
  },
  methods: {
    onChangeRatio() {
      setTimeout(() => (this.show = false));
      this.ratioIndex = (this.ratioIndex + 1) % this.ratioValues.length;
      setTimeout(() => (this.show = true));
    },

    onChangeAreaWidth() {
      this.fullWidthAera = !this.fullWidthAera;
    },
  },
};
</script>

<style lang="scss">
.twic-ratio-container {
  .twic-grid {
    --twic-grid-columns-width: 40%;
    &.full-width {
      .twic-item {
        width: 100%;
      }
    }

    &.half-width {
      .twic-item {
        width: 50%;
        margin: auto;
      }
    }
  }

  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
