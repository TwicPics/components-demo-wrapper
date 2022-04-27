<template>
  <TwicWrapper framework="nuxt">
    <TwicAbstract
      title="Grid & zoom effect"
      codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-nuxt-grid-zoom-effect-2-9nwtds"
      codeSandBoxName="TwicPics x Nuxt - Grid & zoom effect"
    >
      <p>
        A responsive grid of images enhanced by a
        <span class="twic-code">zoom</span> transition.
      </p>
      <p><strong>Scroll down to experience lazy loading in action</strong>.</p>
    </TwicAbstract>
    <div class="twic-life-cycle">
      <ul>
        <li v-for="(image, index) in images" :key="index" class="twic-item">
          <a href="#">
            <TwicImg
              :src="image.url"
              :focus="image.focus"
              transition="fade+zoom"
              transitionDuration="500ms"
              ratio="4/3"
              mode="cover"
            >
            </TwicImg>
          </a>
        </li>
      </ul>
    </div>
  </TwicWrapper>
</template>

<script>
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "GridAndZoomPage",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      seed: [
        {
          url: `components/portraits/woman-1.jpg`,
          focus: `50px45p`,
        },
        {
          url: `components/portraits/man-1.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/woman-2.jpg`,
          focus: `50px30p`,
        },
        {
          url: `components/portraits/man-2.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-3.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-3.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-4.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-4.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-5.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-5.jpg`,
          focus: `50px0p`,
        },
        {
          url: `components/portraits/woman-6.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-6.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-7.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-7.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-8.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-8.jpg`,
          focus: `50px100p`,
        },
        {
          url: `components/portraits/woman-9.jpg`,
          focus: `50px30p`,
        },
        {
          url: `components/portraits/man-9.jpg`,
          focus: `50px30p`,
        },
        {
          url: `components/portraits/woman-10.jpg`,
          focus: `50px55p`,
        },
        {
          url: `components/portraits/man-10.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-11.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/man-11.jpg`,
          focus: `50px35p`,
        },
        {
          url: `components/portraits/woman-12.jpg`,
          focus: `50px30p`,
        },
        {
          url: `components/portraits/man-12.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-13.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-13.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-14.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/man-14.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-15.jpg`,
          focus: `50px30p`,
        },
        {
          url: `components/portraits/man-15.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-16.jpg`,
          focus: `50px55p`,
        },
        {
          url: `components/portraits/man-16.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/woman-17.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-17.jpg`,
          focus: `50px60p`,
        },
        {
          url: `components/portraits/woman-18.jpg`,
          focus: ``,
        },
        {
          url: `components/portraits/man-18.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/woman-19.jpg`,
          focus: `50px60p`,
        },
        {
          url: `components/portraits/man-19.jpg`,
          focus: `50px20p`,
        },
        {
          url: `components/portraits/woman-20.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/woman-21.jpg`,
          focus: `50px45p`,
        },
        {
          url: `components/portraits/woman-22.jpg`,
          focus: `50px55p`,
        },
        {
          url: `components/portraits/man-22.jpg`,
          focus: `50px35p`,
        },
        {
          url: `components/portraits/woman-23.jpg`,
          focus: `50px45p`,
        },
        {
          url: `components/portraits/man-26.jpg`,
          focus: `50px45p`,
        },
        {
          url: `components/portraits/woman-25.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/man-24.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/woman-26.jpg`,
          focus: `50px40p`,
        },
        {
          url: `components/portraits/man-25.jpg`,
          focus: `50px40p`,
        },
      ],
      /**
       * list of images to display
       */
      images: [],
    };
  },
  created() {
    this.images = [...this.seed, ...this.seed, ...this.seed];
  },
};
</script>

<style lang="scss">
.display-block-pointer {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
}

.twic-life-cycle {
  ul {
    display: grid;
    gap: 1rem;
    list-style: none;
    position: relative;
    width: 100%;
  }

  a {
    @extend .display-block-pointer;
    padding-bottom: 75%;
    position: relative;
    &:hover {
      & img.twic-done {
        transform: scale(1.2) !important;
      }
    }
    & img {
      @extend .display-block-pointer;
    }
    & .twic-w {
      position: absolute;
    }
  }
}

.twic-life-cycle ul {
  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
