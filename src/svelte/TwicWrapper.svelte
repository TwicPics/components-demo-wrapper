<script>
  import { default as TwicHeader } from "./TwicHeader.svelte";
  export let tags = [`@twicpics-components`];
  export let framework = `svelte`;
</script>

<div id="twic-demo-wrapper" class="">
  <TwicHeader tags={tags} framework={framework} />
  <main id="twic-demo-container">
    <slot></slot>
  </main>
</div>