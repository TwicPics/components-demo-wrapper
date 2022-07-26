<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/puppy.jpg`;
const focusArray = [``, `1920x1282`, `auto`];
let focusIndex = 0;

const onChangeFocus = () => {
  focusIndex = (focusIndex + 1) % focusArray.length;
}
</script>

<TwicWrapper>
  <div class="twic-focus-container">
    <TwicAbstract
      title="focus property"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-focus-property-gz0kp0"
      codeSandBoxName="TwicPics x Svelte - Focus property"
    >
      <p>
        <strong>
          The <dfn title="focus property">focus</dfn> property will change the
          focus point coordinates of the image
        </strong>
         (only useful with
        <span class="twic-code">mode="cover"</span>).
        <br />
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
        <button class="twic-button" on:click={onChangeFocus}>
          Click to change the focus point
        </button>
        <TwicImg
          src={ imgUrl }
          focus={ focusArray[ focusIndex ] }
          ratio="4/5"
          placeholder="preview"
        ></TwicImg>
        {#if focusArray[ focusIndex ]}
          <span>
            <span class="twic-code">focus="{ focusArray[ focusIndex]  }"</span>
          </span>
        {:else}
          <span>
            <span>No focus</span>
            (default)
          </span>
        {/if}
      </div>
      <div class="twic-item">
        <TwicImg src={ imgUrl } ratio="4/5" placeholder="preview"></TwicImg>
        <span>
          <span>No focus</span>
            (default)
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
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
          src={ imgUrl }
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

<style lang="scss"></style>
