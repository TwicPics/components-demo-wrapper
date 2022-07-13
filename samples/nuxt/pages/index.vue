<template>
  <TwicWrapper framework="nuxt">
    <div class="home-container">
      <div
        v-for="category in categories"
        :key="category.title"
        class="twic-panel"
      >
        <h3>{{ category.title }}</h3>
        <div class="twic-grid">
          <NuxtLink
            v-for="item in category.items"
            :key="item.route"
            :to="item.route"
            ><figure class="twic-item">
              <TwicImg :src="item.imgSrc" focus="auto" ratio="0.95"></TwicImg>
              <figcaption>
                <p>{{ item.title }}</p>
              </figcaption>
            </figure>
          </NuxtLink>
        </div>
      </div>
    </div>
  </TwicWrapper>
</template>

<script>
import { TwicWrapper } from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "HomePage",
  components: {
    TwicWrapper,
  },
  data() {
    return {
      categories: [
        {
          title: `<TwicImg> use cases`,
          items: [
            {
              route: `/art-directions`,
              imgSrc: `components/greece.jpg`,
              title: `Art directions`,
            },
            {
              route: `/basic-example`,
              imgSrc: `https://assets.twicpics.com/examples/football.jpg`,
              title: `Basic example`,
            },
            {
              route: `/flip-cards`,
              imgSrc: `components/flip/orange-1.jpg`,
              title: `Flip cards`,
            },
            {
              route: `/grid-and-zoom`,
              imgSrc: `components/portraits/woman-1.jpg`,
              title: `Grid & zoom`,
            },
            {
              route: `/modal`,
              imgSrc: `components/modal/seagull.jpg`,
              title: `Modal`,
            },
            {
              route: `/slider`,
              imgSrc: `components/slider/pantone.jpg`,
              title: `Slider`,
            },
            {
              route: `/slideshow`,
              imgSrc: `components/slideshow/space-1.jpg`,
              title: `Slideshow`,
            },
            {
              route: `/style-driven`,
              imgSrc: `components/horse.jpg`,
              title: `Style driven`,
            },
          ],
        },
        {
          title: `<TwicImg> properties`,
          items: [
            {
              route: `/focus`,
              imgSrc: `components/puppy.jpg`,
              title: `focus`,
            },
            {
              route: `/mode`,
              imgSrc: `components/fox.jpg`,
              title: `mode`,
            },
            {
              route: `/placeholder`,
              imgSrc: `components/cat.jpg`,
              title: `placeholder`,
            },
            {
              route: `/position`,
              imgSrc: `components/position/horse.jpg`,
              title: `position`,
            },
            {
              route: `/ratio`,
              imgSrc: `components/woman-and-winter.jpg`,
              title: `ratio`,
            },
            {
              route: `/transition`,
              imgSrc: `components/peacock.jpg`,
              title: `transition`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.home-container {
  h3 {
    margin-bottom: 1rem;
  }

  .twic-grid {
    --twic-grid-columns-width: calc(200px);
  }

  .twic-item {
    & img {
      transition: 0.3s all ease-in-out;
    }
    &:hover {
      & img.twic-done {
        transform: scale(1.1);
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
    &:hover {
      cursor: pointer;
      & figcaption {
          bottom: 40%;
      }
    }
  }
}
</style>
