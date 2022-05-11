<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

let srcIsSet = false;
let action = `set`;

const onChangeSrc = () => {
  srcIsSet = !srcIsSet;
  if ( srcIsSet ) {
    action = `unset`;
  } else {
    action = `set`;
  }
}

const ratioClassArray = [ `ratio-1by1`, `ratio-4by3`, `ratio-3by4` ];
$: ratioClassIndex = 0;

const onChangeAspectRatio = () => {
  ratioClassIndex = (ratioClassIndex + 1) % ratioClassArray.length;
}

const images = [
  `components/src-not-set/woman-1.jpg`,
  `components/src-not-set/boat.jpg`,
  `components/src-not-set/vase.jpg`,
  `components/src-not-set/street.jpg`,
  `components/src-not-set/sea.jpg`,
  `components/src-not-set/flowers.jpg`,
  `components/src-not-set/bird.jpg`,
  `components/src-not-set/feet.jpg`,
  `components/src-not-set/lemons.jpg`,
  `components/src-not-set/swimming-pool.jpg`,
  `components/src-not-set/man.jpg`,
  `components/src-not-set/kodak.jpg`,
]
</script>
  
<!-- demonstrates the default red placeholder when the property src is not set -->
<TwicWrapper>
  <div class="twic-working-without-images-container">
    <TwicAbstract
      title="Prepare your page template"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-working-without-images-n4bq41"
      codeSandBoxName='TwicPics x Svelte - src="undefined"'
    >
      <p>
        When you develop the page template and can't or don't want to integrate your images at this first stage, it is possible
        <br/> not to assign a value to the <span class="twic-code">src</span> property.
      </p>
      <p>
        In this case, TwicPics components will generate a default red placeholder, which displays the dimensions of the image container.
      </p>
    </TwicAbstract>
    <div class="twic-testing-container">
      <button class="twic-button" on:click={ onChangeSrc }>
        Click to { action } the src property
      </button>
      <button class="twic-button" on:click={ onChangeAspectRatio }>
        Click to change the aspect-ratio
      </button>
    </div>
    <div class="twic-grid { ratioClassArray[ ratioClassIndex ] }">
      {#each images as image}
        <div class="twic-item">
          <TwicImg
            src={ srcIsSet ? image : `` }
            focus="auto"
            placeholder="preview"
          ></TwicImg>
        </div>
      {/each}
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-working-without-images-container {
  .twic-grid {
    &.ratio-3by4 {
      --twic-ratio: calc(3 / 4);
    }

    &.ratio-4by3 {
      --twic-ratio: calc(4 / 3);
    } 

    &.ratio-1by1 {
      --twic-ratio: calc(1);
    }
  }
}
</style>
  