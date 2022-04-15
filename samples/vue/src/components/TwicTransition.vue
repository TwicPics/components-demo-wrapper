<template>
  <!-- demonstrates transition features -->
  <TwicWrapper>
    <div class="twic-transition-container">
      <TwicAbstract
        title="transition property"
        codeSandBoxUrl=""
        codeSandBoxName="TwicPics x Vue - Transition property"
      >
        <p>
          The <span class="twic-code">transition</span> properties allow you to
          customize the effect used to reveal the image once it has been loaded.
        </p>
        <ul>
          <li>
            <span class="twic-code">transition</span>: determines how image will
            be revealed once loaded : with a <em>fade in</em> effect (`fade`), a
            <em>zoom</em> effect (`zoom`), <em>both</em> (`fade+zoom`) or
            without any transition (`none`). (default:
            <span class="twic-code">fade</span>).
          </li>
          <li>
            <span class="twic-code">transitionDelay</span>: transition delay of
            the transition effect (default: <span class="twic-code">0ms</span>).
          </li>
          <li>
            <span class="twic-code">transitionDuration</span>: duration of the
            transition effect (default: <span class="twic-code">400ms</span>).
          </li>
          <li>
            <span class="twic-code">transitionTimingFunction</span>: CSS timing
            function applied to the transition effect (default:
            <span class="twic-code">ease</span>).
          </li>
        </ul>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" v-on:click="togglePlaceholder">
          {{ togglePlaceholderBtnText }}
        </button>
      </div>
      <div
        class="twic-grid"
        v-bind:class="{ 'show-placeholders': showPlaceholder }"
      >
        <div class="twic-item">
          <TwicImg :src="imgUrl" placeholder="preview"> </TwicImg>
          <span>default</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" transition="none" placeholder="preview">
          </TwicImg>
          <span>transition=`none`</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" transition="zoom"> </TwicImg>
          <span>transition=`zoom`</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" transition="fade"> </TwicImg>
          <span>transition=`fade`</span>
        </div>
        <div class="twic-item">
          <TwicImg :src="imgUrl" transition="fade+zoom"> </TwicImg>
          <span>transition=`fade+zoom`</span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="imgUrl"
            transitionDuration="2000ms"
            placeholder="preview"
          >
          </TwicImg>
          <span>transitionDuration=`2000ms`</span>
        </div>
        <div class="twic-item">
          <TwicImg
            :src="imgUrl"
            transitionDuration="2000ms"
            transitionTimingFunction="linear"
            placeholder="preview"
          >
          </TwicImg>
          <span
            >transitionDuration=`2000ms` and
            transitionTimingFunction=`linear`</span
          >
        </div>
        <div class="twic-item">
          <TwicImg
            :src="imgUrl"
            transitionDelay="2000ms"
            transitionTimingFunction="linear"
            placeholder="preview"
          >
          </TwicImg>
          <span>transitionDelay=`2000ms`</span>
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
      imgUrl: `components/peacock.jpg`,
      showPlaceholder: false,
      togglePlaceholderBtnText: `Click to reveal the transitions`,
    };
  },
  methods: {
    togglePlaceholder() {
      this.showPlaceholder = !this.showPlaceholder;
      if (this.showPlaceholder) {
        this.togglePlaceholderBtnText = `Click to show the images`;
      } else {
        this.togglePlaceholderBtnText = `Click to reveal the transitions`;
      }
    },
  },
};
</script>

<style lang="scss">
.twic-transition-container {
  .show-placeholders {
    .twic-tf {
      & img {
        opacity: 0 !important;
      }
    }
    .twic-tz {
      & img {
        transform: scale(0) !important;
      }
    }
  }
}
</style>
