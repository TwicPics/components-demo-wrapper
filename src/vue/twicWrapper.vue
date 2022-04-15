<template>
  <div id="twic-demo-wrapper" class="">
    <TwicHeader :tags="tags" :redirect="redirect" :framework="framework" />
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
    redirect: {
      type: String,
      default: `https://github.com/TwicPics/components/blob/0.6.3/documentation/vue2.md`,
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
