<script>
import { TwicWrapper } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";

const categories = [
  {
    "title": `<TwicImg> use cases`,
    "items": [
        {
            "route": `/art-directions`,
            "imgSrc": `components/greece.jpg`,
            "title": `Art directions`,
        },
        {
            "route": `/basic-grid`,
            "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
            "title": `Basic example`,
        },
        {
            "route": `/flip-cards`,
            "imgSrc": `components/flip/orange-1.jpg`,
            "title": `Flip cards`,
        },
        {
            "route": `/grid-and-zoom`,
            "imgSrc": `components/portraits/woman-1.jpg`,
            "title": `Grid & zoom`,
        },
        {
            "route": `/modal`,
            "imgSrc": `components/modal/seagull.jpg`,
            "title": `Modal`,
        },
        {
            "route": `/slider`,
            "imgSrc": `components/slider/pantone.jpg`,
            "title": `Slider`,
        },
        {
            "route": `/slideshow`,
            "imgSrc": `components/slideshow/space-1.jpg`,
            "title": `Slideshow`,
        },
        {
            "route": `/style-driven`,
            "imgSrc": `components/horse.jpg`,
            "title": `Style driven`,
        },
        {
            "route": `/page-templating`,
            "imgSrc": `components/woman.jpg`,
            "title": `Page templating`,
        },
    ],
  },
  {
    "title": `<TwicImg> properties`,
    "items": [
        {
            "route": `/focus`,
            "imgSrc": `components/puppy.jpg`,
            "title": `focus`,
        },
        {
            "route": `/mode`,
            "imgSrc": `components/fox.jpg`,
            "title": `mode`,
        },
        {
            "route": `/placeholder`,
            "imgSrc": `components/cat.jpg`,
            "title": `placeholder`,
        },
        {
            "route": `/position`,
            "imgSrc": `components/position/horse.jpg`,
            "title": `position`,
        },
        {
            "route": `/pretransform`,
            "imgSrc": `components/man-hiding-his-hands.jpg`,
            "title": `preTransform`,
        },
        {
            "route": `/ratio`,
            "imgSrc": `components/woman-and-winter.jpg`,
            "title": `ratio`,
        },
        {
            "route": `/transition`,
            "imgSrc": `components/peacock.jpg`,
            "title": `transition`,
        },
    ],
  },
];
</script>

<TwicWrapper>
  <div class="home-container">
    {#each categories as category}
      <div class="twic-panel">
        <h3>{ category.title }</h3>
        <div class="twic-grid">
          {#each category.items as item}
            <a href={ item.route }>
              <figure class="twic-item">
                <TwicImg
                    src={ item.imgSrc }
                    focus="auto"
                    ratio="0.95">
                </TwicImg>
                <figcaption>
                  <p>{ item.title }</p>
                </figcaption>
              </figure>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</TwicWrapper>

<style lang="scss">
.home-container{
  h3 {
    margin-bottom: 1rem;
  }

  .twic-grid {
    --twic-grid-columns-width: calc(200px);
  }

  :global(.twic-item) {
        & :global(img) {
            transition: .3s all ease-in-out;
        }
       
        &:hover {
            & :global(img.twic-done) {
                transform: scale(1.1) !important;
            }
        }
    }

  figure {
    position: relative;
    & figcaption {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px;
      height: 40px;
      text-align: center;
      font-size: 1em;
      font-weight: 600;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.3s;
    }
    &:hover{
      cursor: pointer;
      & figcaption {
          bottom: 40%;
      }
    }
  }
}
</style>
