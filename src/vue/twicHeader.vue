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
        <img :class="logoClass" :src="logoSrc" :alt="logoAlt" />
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
    framework: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      LOGOS_PATH: `https://assets.twicpics.com/demo/@twicpics-components/logos/`,
      VUE_DOC: `https://github.com/TwicPics/components/blob/main/documentation/vue2.md`,
      NUXT_DOC: `https://github.com/TwicPics/components/blob/main/documentation/nuxt2.md`,
      redirect: ``,
      logoClass: ``,
      logoSrc: ``,
      logoAlt: ``,
    };
  },

  created() {
    if (this.framework === `vue`) {
      this.redirect = this.VUE_DOC;
      this.logoClass = `vue-logo`;
      this.logoSrc = `${this.LOGOS_PATH}vue.png`;
      this.logoAlt = `Vue logo`;
    } else if (this.framework === `nuxt`) {
      this.redirect = this.NUXT_DOC;
      this.logoClass = `nuxt-logo`;
      this.logoSrc = `${this.LOGOS_PATH}nuxt-2.png`;
      this.logoAlt = `Nuxt logo`;
    }
  },
};
</script>
