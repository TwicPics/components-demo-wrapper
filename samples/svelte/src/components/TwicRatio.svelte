<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/woman-and-winter.jpg`;
const ratioValues = [`2.39`, `16/9`, `4/3`, ``, `0.75`];
let ratioIndex = 0;
let fullWidthAera = true;
// trick to force reload TwicImg
let show = true;

const onChangeRatio = () => {
  setTimeout(() => (show = false));
  ratioIndex = (ratioIndex + 1) % ratioValues.length;
  setTimeout(() => (show = true));
}

const onChangeAreaWidth = () => {
  fullWidthAera = !fullWidthAera;
}
</script>

<!-- demonstrates ratio features -->
<TwicWrapper>
  <div class="twic-ratio-container">
    <TwicAbstract
      title="ratio property"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-template-vpou86"
      codeSandBoxName="TwicPics x Svelte - Ratio property"
    >
      <p>
        The <span class="twic-code">ratio</span> property determines the value
        of the width/height ratio of the image display area.
      </p>
      <p>Its value can be:</p>
      <ul>
        <li>
          a ratio expression of the form width/height like
          <span class="twic-code">4/3</span>,
          <span class="twic-code">16/9</span>, or
          <span class="twic-code">1/1</span> .
        </li>
        <li>
          a number that is the result of such an expression like
          <span class="twic-code">1.85</span>,
          <span class="twic-code">2</span>, or
          <span class="twic-code">0.5</span>.
        </li>
      </ul>
      <p>
        A square area (<span class="twic-code"> ratio="1"</span>) will be
        created by default.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={ onChangeRatio }>
        Click to change the aspect-ratio
      </button>
      <button class="twic-button" on:click={ onChangeAreaWidth }>
        Click to change the area width
      </button>
    </div>
    <div
      class="twic-grid"
      class:modal-opened={ show }
      class:half-width={ fullWidthAera === false }
    >
      <div class="twic-item">
        {#if show}
          <TwicImg src={ imgUrl } ratio={ ratioValues[ratioIndex] }>
          </TwicImg>
        {/if}
        <span>
          <span class="twic-code">ratio="{
            ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1
          }"</span>
          {#if !ratioValues[ratioIndex]}
            [default ratio]
          {/if}
          (mode is <span class="twic-code">cover</span>)
        </span>
      </div>
      <div class="twic-item">
        {#if show}
          <TwicImg
          src={ imgUrl }
          mode="contain"
          ratio={ ratioValues[ratioIndex] }
        >
        </TwicImg>
        {/if}
        <span>
          <span class="twic-code">ratio="{
            ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1
          }"</span>
          {#if !ratioValues[ratioIndex]}
            [default ratio]
          {/if}
          (mode is <span class="twic-code">contain</span>)
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>



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

  :global(.twic-item .twic-w) {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
