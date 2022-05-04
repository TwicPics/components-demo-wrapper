<script>
  export let title;
  export let codeSandBoxName;
  export let codeSandBoxUrl;

  const alt = codeSandBoxName ? ` Edit ${ codeSandBoxName } ` : ` Edit on CodeSandbox`;
  const href = `${ codeSandBoxUrl }?fontsize=14&hidenavigation=1&theme=dark`;
</script>

<div class="twic-abstract">
  <h1>{ title }</h1>
  <div>
    <div>
      <slot></slot>
    </div>

    {#if codeSandBoxUrl}
      <div class="codesandbox-container">
        <a href={href}>
          <img
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
            alt={alt}
          />
        </a>
      </div>
    {/if}
  </div>
</div>