<script>
  import router from "page";
  import Home from "./components/Home.svelte";
  import ArtDirections from './components/TwicArtDirections.svelte';
  import BasicGrid from './components/TwicBasicGrid.svelte';
  import FlipCards from './components/TwicFlipCards.svelte';
  import Focus from './components/TwicFocus.svelte';
  import GridAndZoom from './components/TwicGridAndZoom.svelte';
  import Modal from './components/twic-modal/TwicModal.svelte';
  import Mode from './components/TwicMode.svelte';
  import Placeholder from './components/TwicPlaceholder.svelte';
  import Position from './components/TwicPosition.svelte';
  import PreTransform from './components/TwicPreTransform.svelte';
  import Ratio from './components/TwicRatio.svelte';
  import Slider from './components/TwicSlider.svelte';
  import Slideshow from './components/twic-slideshow/TwicSlideshow.svelte';
  import StyleDriven from './components/TwicStyleDriven.svelte';
  import PageTemplating from './components/TwicPageTemplating.svelte';
  import Transition from './components/TwicTransition.svelte';

  let page;

  router('/', () => page = Home);
  router('/art-directions', () => page = ArtDirections);
  router('/basic-grid', () => page = BasicGrid);
  router('/flip-cards', () => page = FlipCards);
  router('/focus', () => page = Focus);
  router('/grid-and-zoom', () => page = GridAndZoom);
  router('/modal', () => page = Modal);
  router('/mode', () => page = Mode);
  router('/placeholder', () => page = Placeholder);
  router('/position', () => page = Position);
  router('/pretransform', () => page = PreTransform);
  router('/ratio', () => page = Ratio);
  router('/slider', () => page = Slider);
  router('/slideshow', () => page = Slideshow);
  router('/style-driven', () => page = StyleDriven);
  router('/transition', () => page = Transition);
  router('/page-templating', () => page = PageTemplating);

  router.start();
</script>

<svelte:component this={page} />

<style lang="scss">
</style>
