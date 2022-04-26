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
      required: false,
    },
    framework: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      LOGO_PATH: `https://assets.twicpics.com/demo/@twicpics-components/logos/`,
      VUE_DOC: `https://github.com/TwicPics/components/blob/main/documentation/vue2.md`,
      NUXT_DOC: `https://github.com/TwicPics/components/blob/main/documentation/nuxt2.md`,
      redirect: ``,
      class: ``,
      src: ``,
      alt: ``,
    };
  },

  created() {
    if (this.framework === `vue`) {
      this.redirect = this.VUE_DOC;
      this.class = `vue-logo`;
      this.src = `${this.LOGO_PATH}vue.png`;
      this.alt = `Vue logo`;
    } else if (this.framework === `nuxt`) {
      this.redirect = this.NUXT_DOC;
      this.class = `nuxt-logo`;
      this.src = `${this.LOGO_PATH}nuxt-2.png`;
      this.alt = `Nuxt logo`;
    }
  },
};
</script>
