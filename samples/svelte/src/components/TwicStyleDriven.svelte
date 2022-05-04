<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/horse.jpg`;
</script>

<TwicWrapper>
  <div class="twic-style-driven-container">
    <TwicAbstract
      title="CSS style driven"
      codeSandBoxUrl=""
      codeSandBoxName="TwicPics x Svelte - CSS style driven"
    >
      <p>
        You can set up the TwicPics components using pure CSS and the power of
        CSS variables.
      </p>
    </TwicAbstract>
    <h2>1. Display ratio with <span class="twic-code">--twic-ratio</span></h2>
    <div class="twic-grid">
      <div class="twic-item landscape">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class
          <span class="twic-code">landscape</span>
        </span>
      </div>
      <div class="twic-item square">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class
          <span class="twic-code">square</span>
        </span>
      </div>
      <div class="twic-item portrait">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class
          <span class="twic-code">portrait</span>
        </span>
      </div>
    </div>
    <h2>
      2. Class combination: <span class="twic-code">object-fit</span> and
      <span class="twic-code"> position</span> with
      <span class="twic-code">--twic-mode</span> and
      <span class="twic-code"> twic-position</span>
    </h2>
    <div class="twic-grid">
      <div class="twic-item contain left">
        <TwicImg src={ imgUrl } ratio="16/9"></TwicImg>
        <span>class
          <span class="twic-code">contain</span>
          & class
          <span class="twic-code">left</span>
        </span>
      </div>
      <div class="twic-item contain right">
        <TwicImg src={ imgUrl } ratio="16/9"></TwicImg>
        <span>class
          <span class="twic-code">contain</span>
          & class 
          <span class="twic-code">right</span>
        </span>
      </div>
      <div class="twic-item cover">
        <TwicImg src={ imgUrl } focus="50px100p" ratio="16/9"></TwicImg>
        <span>class 
          <span class="twic-code">cover</span>
        </span>
      </div>
    </div>
    <h2>
      3. Other classical settings (here with
      <span class="twic-code">width</span>)
    </h2>
    <div class="twic-grid">
      <div class="twic-item lg">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class 
          <span class="twic-code">lg</span>
        </span>
      </div>
      <div class="twic-item md">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class
          <span class="twic-code">md</span>
        </span>
      </div>
      <div class="twic-item sm">
        <TwicImg src={ imgUrl }></TwicImg>
        <span>class
          <span class="twic-code">sm</span>
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-style-driven-container {
  h2 {
    margin-bottom: 30px;
  }

  .twic-grid {
    margin-bottom: 60px;
  }

  :global(.twic-item .twic-w) {
    background-color: #00ffa3;
    display: block;
  }

  .landscape {
    --twic-ratio: calc(4 / 3);
  }
  .portrait {
    --twic-ratio: calc(3 / 4);
  }
  .square {
    --twic-ratio: calc(1);
  }

  .contain {
    --twic-mode: contain;
  }

  .cover {
    --twic-mode: cover;
  }

  .left {
    --twic-position: left;
  }

  .right {
    --twic-position: right;
  }

  .lg {
    width: 300px;
  }

  .md {
    width: 150px;
  }

  .sm {
    width: 100px;
  }
}
</style>
