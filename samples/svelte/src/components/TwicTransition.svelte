<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/peacock.jpg`;
let showTransitions = false;

const TRANSITIONS_TEXT = `Click to reveal the transitions`;
const IMG_TEXT = `Click to show the images`;
let toggleBtnText = TRANSITIONS_TEXT;

const toggleTransitions = () => {
  showTransitions = !showTransitions;
  if (showTransitions) {
    toggleBtnText = IMG_TEXT;
  } else {
    toggleBtnText = TRANSITIONS_TEXT;
  }
}
</script>

<!-- demonstrates transition features -->
<TwicWrapper>
  <div class="twic-transition-container">
    <TwicAbstract
      title="transition properties"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-transition-property-t97ixk"
      codeSandBoxName="TwicPics x Svelte - Transition property"
    >
      <p>
        The <span class="twic-code">transition</span> properties allow you to
        customize the effect used to reveal the image once it has been loaded.
      </p>
      <ul>
        <li>
          <span class="twic-code">transition</span>: determines how the image
          will be revealed once loaded (default:
          <span class="twic-code">fade</span>). The possible values are:
          <br />
          - <span class="twic-code">fade</span>, for a
          <em>fade in</em> effect<br />
          - <span class="twic-code">zoom</span>, for a
          <em>zoom</em> effect<br />
          - <span class="twic-code">fade+zoom</span>, for both
          <em>fade</em> and <em>zoom</em> effects<br />
          - or <span class="twic-code">none</span>, for no transition
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
      <button class="twic-button" on:click={ toggleTransitions }>
        { toggleBtnText }
      </button>
    </div>
    <div
      class="twic-grid"
      class:show-transitions={ showTransitions }
    >
      <div class="twic-item">
        <TwicImg src={ imgUrl } placeholder="preview"> </TwicImg>
        <span>Default values</span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } transition="none" placeholder="preview">
        </TwicImg>
        <span>
          <span class="twic-code">transition="none"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } transition="zoom"> </TwicImg>
        <span>
          <span class="twic-code">transition="zoom"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } transition="fade"> </TwicImg>
        <span>
          <span class="twic-code">transition="fade"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } transition="fade+zoom"> </TwicImg>
        <span>
          <span class="twic-code">transition="fade+zoom"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          transitionDuration="2000ms"
          placeholder="preview"
        >
        </TwicImg>
        <span>
          <span class="twic-code">transitionDuration="2000ms"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          transitionDuration="2000ms"
          transitionTimingFunction="linear"
          placeholder="preview"
        >
        </TwicImg>
        <span>
          <span class="twic-code">transitionDuration="2000ms"</span>
          and <span class="twic-code">transitionTimingFunction="linear"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          transitionDelay="2000ms"
          transitionTimingFunction="linear"
          placeholder="preview"
        >
        </TwicImg>
        <span>
          <span class="twic-code">transitionDelay="2000ms"</span>
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-transition-container {
  .show-transitions {
    :global(.twic-tf img) {
      opacity: 0 !important;
    }
    :global(.twic-tz img) {
      transform: scale(0) !important;
    }
  }
}
</style>
