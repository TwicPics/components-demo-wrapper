<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/fox.jpg`;
const modeValues = [ `cover`, `contain` ];
let modeIndex = 0;

$: finalImgUrl = `${imgUrl}?${modeIndex}`; // trick to force image reload

const onChangeMode = () => {
  modeIndex = (modeIndex + 1) % modeValues.length;
}
</script>

<!-- demonstrates mode features (contain or cover) -->
<TwicWrapper>
  <div class="twic-mode-container">
    <TwicAbstract
      title="mode property"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-mode-property-jdu34q"
      codeSandBoxName="TwicPics x Svelte - Mode property"
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
        <button class="twic-button" on:click={ onChangeMode }>
          Click to change the mode value
        </button>
          <TwicImg
            src={ finalImgUrl }
            mode={ modeValues[modeIndex] }
          ></TwicImg>
        <span>
          <span class="twic-code">mode="{ modeValues[ modeIndex ] }"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>No mode set (<span class="twic-code">cover</span> by default)</span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } mode="cover"></TwicImg>
        <span>
          <span class="twic-code">mode="cover"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } mode="contain"></TwicImg>
        <span>
          <span class="twic-code">mode="contain"</span>
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-mode-container {
  :global(.twic-item .twic-w) {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
