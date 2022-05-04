<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const imgUrl = `components/man-hiding-his-hands.jpg`;
</script>
  
<!-- demonstrates the preTransform property -->
<TwicWrapper>
  <div class="twic-pretransform-container">
    <TwicAbstract 
      title="preTransform property"
      codeSandBoxUrl=""
      codeSandBoxName="TwicPics x Svelte - preTransform property"
    >
      <p>
        <span class="twic-code">preTransform</span> is a slash-separated list of
        TwicPics API transformations that perform before the automatic resizing of the image.
      </p>
      <p>  
        You can check the
        <a href="https://www.twicpics.com/docs/api/transformations" target="_blank">
          TwicPics documentation
        </a>
        to see the list of API transformations.
      </p>
      <p>
        If you set the <span class="twic-code">focus</span> property, it will apply before all transformations of the <span class="twic-code">preTransform</span> property.  
      </p>
      <p>
        Be aware that using <span class="twic-code">preTransform</span> can lead to unexpected results, so use
        with caution!
      </p>
    </TwicAbstract>
    <div class="twic-grid">
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
        ></TwicImg>
        <span>
          No <span class="twic-code">preTransform</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          preTransform="crop=600x400"
        ></TwicImg>
        <span>
          <span class="twic-code">preTransform="crop=600x400"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          focus="100px100p"
          preTransform="crop=1400x1200"
        ></TwicImg>
        <span>
          <span class="twic-code">focus="100px100p"</span>
           and <span class="twic-code">preTransform="crop=1400x1200"</span>
        </span>
      </div>
      <div class="twic-item">
        <TwicImg
          src={ imgUrl }
          preTransform="flip=x"
        ></TwicImg>
        <span>
          <span class="twic-code">preTransform="flip=x"</span>
        </span>
      </div>
    </div>
  </div>
</TwicWrapper>
  
<style lang="scss">
</style>
  