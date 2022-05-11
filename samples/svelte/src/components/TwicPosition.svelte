<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const landscapeImgUrl = `components/position/horse.jpg`;
const portraitImgUrl = `components/position/forest.jpg`;
const horizontalPositionArray = [`left`, `right`, `center`];
let horizontalPositionIndex = 0;
const verticalPositionArray = [`top`, `bottom`, `center`];
let verticalPositionIndex = 0;

const onChangePosition = () => {
  horizontalPositionIndex =
    (horizontalPositionIndex + 1) %
    horizontalPositionArray.length;
  verticalPositionIndex =
    (verticalPositionIndex + 1) % verticalPositionArray.length;
}
</script>

<TwicWrapper>
  <div class="twic-position-container">
    <TwicAbstract
      title="position property"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-position-property-xynckf"
      codeSandBoxName="TwicPics x Svelte - Position property"
    >
      <p>
        In <span class="twic-code">contain</span> mode, the position property
        changes the location of the image inside the area of the component.
      </p>
      <p>
        The syntax is the same as for CSS position properties (e.g.
        <span class="twic-code"> background-position</span> or
        <span class="twic-code"> object-position</span>).
      </p>
      <p>
        Useful values are <span class="twic-code"> top</span>,
        <span class="twic-code"> bottom</span>,
        <span class="twic-code"> left</span>,
        <span class="twic-code"> right</span> but all valid CSS position
        values are valid.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={ onChangePosition }>
        Click to change the position
      </button>
    </div>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg
          src={ landscapeImgUrl }
          mode="contain"
          placeholder="none"
          position={ verticalPositionArray[verticalPositionIndex] }
        >
        </TwicImg>
        <span>
          <span class="twic-code">position="{ verticalPositionArray[verticalPositionIndex] }"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ portraitImgUrl }
          mode="contain"
          placeholder="none"
          position={ horizontalPositionArray[horizontalPositionIndex] }
        >
        </TwicImg>
        <span>
          <span class="twic-code">position="{ horizontalPositionArray[horizontalPositionIndex] }"</span>
        </span
        >
      </div>
      <div class="twic-item">
        <TwicImg src={ landscapeImgUrl } mode="contain" placeholder="none">
        </TwicImg>
        <span>No position set (<span class="twic-code"> center</span> by default)</span>
      </div>
      <div class="twic-item">
        <TwicImg src={ portraitImgUrl } mode="contain" placeholder="none">
        </TwicImg>
        <span>No position set (<span class="twic-code"> center</span> by default)</span>
      </div>
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-position-container {
  :global(.twic-item .twic-w) {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
