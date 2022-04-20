<template>
  <div id="twic-demo-wrapper" class="">
    <TwicHeader :tags="tags" :framework="framework" />
    <main id="twic-demo-container">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { default as TwicHeader } from "./twicHeader";
export default {
  name: "TwicWrapper",
  components: {
    TwicHeader,
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [`@twicpics-components`];
      },
      required: false,
    },
    framework: {
      type: String,
      default: `vue`,
      required: false,
    },
  },
};
</script>
