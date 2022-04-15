<template>
  <div class="twic-abstract">
    <h1>{{ title }}</h1>
    <div>
      <div>
        <slot></slot>
      </div>

      <div v-if="codeSandBoxUrl" className="codesandbox-container">
        <a :href="href">
          <img
            :alt="alt"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwicAbstract",
  props: {
    title: {
      type: String,
      required: true,
    },
    codeSandBoxName: {
      type: String,
      required: false,
    },
    codeSandBoxUrl: {
      type: String,
      required: false,
    },
  },
  computed: {
    alt() {
      this.codeSandBoxName
        ? ` Edit ${this.codeSandBoxName} `
        : ` Edit on CodeSandbox`;
    },
    href() {
      `${this.codeSandBoxUrl}?fontsize=14&hidenavigation=1&theme=dark`;
    },
  },
};
</script>
