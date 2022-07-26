<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/cat.jpg`;
let showPlaceholders = false;

const PLACEHOLDERS_TEXT = `Click to reveal the placeholders`;
const IMG_TEXT = `Click to show the images`;
let toggleBtnText = PLACEHOLDERS_TEXT;

const togglePlaceholder = () => {
  showPlaceholders = !showPlaceholders;
  if (showPlaceholders) {
    toggleBtnText = IMG_TEXT;
  } else {
    toggleBtnText = PLACEHOLDERS_TEXT;
  }
}
</script>

<!-- demonstrates placeholders features -->
<TwicWrapper>
  <div class="twic-placeholder-container">
    <TwicAbstract
      title="placeholder property"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-placeholder-property-yfbeyk"
      codeSandBoxName="TwicPics x Svelte - Placeholder property"
    >
      <p>
        <strong>
          The <dfn title="placeholder property">placeholder</dfn> property helps you optimize user experience, CLS, and implement the LQIP technique.
        </strong>
      </p>
      <p>
        TwicPics Components automatically adds a background placeholder to
        your images: their size are reserved in the page before the images are
        actually loaded.
      </p>
      <p>
        The <span class="twic-code"> placeholder </span> values can be:
        <span class="twic-code">preview</span>,
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
      <button class="twic-button" on:click={ togglePlaceholder }>
        { toggleBtnText }
      </button>
    </div>
    <div
      class="twic-grid"
      class:show-placeholders={ showPlaceholders === true }
    >
      <div class="twic-item">
        <TwicImg src={ imgUrl } placeholder="preview"></TwicImg>
        <span>
          <span class="twic-code">placeholder="preview"</span>
          (default value)
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } placeholder="meancolor"></TwicImg>
        <span>
          <span class="twic-code">placeholder="meancolor"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } placeholder="maincolor"></TwicImg>
        <span>
          <span class="twic-code">placeholder="maincolor"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } placeholder="none"></TwicImg>
        <span>
          <span class="twic-code">placeholder="none"</span>
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-placeholder-container {
  .show-placeholders {
    :global(img) {
      opacity: 0 !important;
    }
  }
}
</style>
