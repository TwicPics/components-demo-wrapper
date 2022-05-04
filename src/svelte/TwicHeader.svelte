<script>
  export let tags;
  export let framework;

  const LOGOS_PATH = `https://assets.twicpics.com/demo/@twicpics-components/logos/`;
  let redirect = ``;
  let logoClass = ``;
  let logoSrc = ``;
  let logoAlt = ``;

  if (framework === 'svelte') {
    redirect = `https://github.com/TwicPics/components/blob/main/documentation/svelte3.md`;
    logoClass = `svelte-logo`;
    logoSrc = `${LOGOS_PATH}svelte.png`;
    logoAlt = `Svelte logo`;
  } else if (framework === 'sveltekit') {
    redirect = ``;
    logoClass = ``;
    logoSrc = ``;
    logoAlt = `SvelteKit logo`;
  }
</script>

<header id="twic-header">
  <a href="/" title="Home">
    <h1 class="heading-primary">
      <img
        class="twicpics-logo"
        src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg"
        alt="TwicPics logo"
      />
      <span>x</span>
      <img class={logoClass} src={logoSrc} alt={logoAlt} />
    </h1>
  </a>
  <div class="tags-container">
    {#each tags as tag}
      <div class="tag">
        { tag }
      </div>
    {/each}
    <a
      href={redirect}
      target="_blank"
      class="documentation-link tag tag--bg-purple-rain"
      rel="noreferrer"
    >
      Documentation
    </a>
  </div>
</header>