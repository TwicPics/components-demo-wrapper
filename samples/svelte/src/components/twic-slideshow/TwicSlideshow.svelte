<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import Slideshow from "./Slideshow.svelte";

const images = [
  {
    url: `components/slideshow/space-1.jpg`,
    focus: ``,
  },
  {
    url: `components/slideshow/space-2.jpg`,
    focus: `50px100p`,
  },
  {
    url: `components/slideshow/space-3.jpg`,
    focus: `50px100p`,
  },
  {
    url: `components/slideshow/space-4.jpg`,
    focus: `50px100p`,
  },
  {
    url: `components/slideshow/space-5.jpg`,
    focus: `50px100p`,
  },
]
</script>

<!-- displays a carousel of responsive images -->
<TwicWrapper>
  <div class="twic-slideshow-container">
    <TwicAbstract
      title="A Picture Carousel"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-slideshow-28p9mh"
      codeSandBoxName="TwicPics x Svelte - Picture Carousel"
    >
      <p>
        Use TwicPics for automatic lazy-loading, CLS optimization and art
        directions adaptation.
      </p>
      <p>
        <strong>Change the width of your browser</strong> to see the image
        aspect-ratio adapt according to the CSS rules.
      </p>
    </TwicAbstract>
    <Slideshow images={ images }></Slideshow>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-slideshow-container {
  margin: auto;
  width: 75%;
}
</style>
