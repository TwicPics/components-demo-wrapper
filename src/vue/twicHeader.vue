<template>
  <header id="twic-header">
    <a href="/" title="Home">
      <h1 class="heading-primary">
        <img
          class="twicpics-logo"
          src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg"
          alt="TwicPics logo"
        />
        <span>x</span>
        <img :class="this.class" :src="this.src" :alt="this.alt" />
      </h1>
    </a>
    <div class="tags-container">
      <div v-for="tag in tags" :key="tag" class="tag">
        {{ tag }}
      </div>
      <a
        :href="redirect"
        target="_blank"
        class="documentation-link tag tag--bg-purple-rain"
        rel="noreferrer"
      >
        Documentation
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TwicHeader",
  props: {
    tags: {
      type: Array,
      required: true,
    },
    redirect: {
      type: String,
      required: true,
    },
    framework: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      redirect: ``,
      LOGO_PATH: `https://assets.twicpics.com/demo/@twicpics-components/logos/`,
      class: ``,
      src: ``,
      alt: ``,
    };
  },

  created() {
    if (this.framework === `vue`) {
      this.redirect = `https://github.com/TwicPics/components/blob/main/documentation/vue2.md`;
      this.class = `vue-logo`;
      this.src = `${this.LOGO_PATH}vue.png`;
      this.alt = `Vue logo`;
    } else if (this.framework === `nuxt`) {
      this.redirect = `https://github.com/TwicPics/components/blob/main/documentation/nuxt2.md`;
      this.class = `nuxt-logo`;
      this.src = `${this.LOGO_PATH}nuxt-2.png`;
      this.alt = `Nuxt logo`;
    }
  },
};
</script>
