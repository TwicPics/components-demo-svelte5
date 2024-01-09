<script>
  import router from 'page';
  import Home from './lib/Home.svelte';
  import Anchor from './lib/TwicAnchor.svelte';
  import ArtDirections from './lib/TwicArtDirections.svelte';
  import BasicGrid from './lib/TwicBasicGrid.svelte';
  import Bot from './lib/TwicBot.svelte';
  import BulkLoading from './lib/TwicBulkLoading.svelte';
  import ColorBlindness from './lib/TwicColorBlindness.svelte';
  import CriticalImage from './lib/TwicCriticalImage.svelte';
  import Eager from './lib/TwicEager.svelte';
  import FlipCards from './lib/TwicFlipCards.svelte';
  import Focus from './lib/TwicFocus.svelte';
  import GridAndZoom from './lib/TwicGridAndZoom.svelte';
  import Intrinsic from './lib/TwicIntrinsic.svelte';
  import Hero from './lib/TwicHero.svelte';
  import Modal from './lib/TwicModal.svelte';
  import Mode from './lib/TwicMode.svelte';
  import Placeholder from './lib/TwicPlaceholder.svelte';
  import Position from './lib/TwicPosition.svelte';
  import PreTransform from './lib/TwicPreTransform.svelte';
  import Ratio from './lib/TwicRatio.svelte';
  import Refit from './lib/TwicRefit.svelte';
  import Slider from './lib/TwicSlider.svelte';
  import Slideshow from './lib/TwicSlideshow.svelte';
  import StyleDriven from './lib/TwicStyleDriven.svelte';
  import PageTemplating from './lib/TwicPageTemplating.svelte';
  import State from './lib/TwicState.svelte';
  import Transition from './lib/TwicTransition.svelte';
  import ShortVideos from './lib/TwicShortVideos.svelte';
  import Zoom from './lib/TwicZoom.svelte';

  let page;

  router('/', () => (page = Home));
  router('/anchor', () => (page = Anchor));
  router('/art-directions', () => (page = ArtDirections));
  router('/basic-grid', () => (page = BasicGrid));
  router('/bot', () => (page = Bot));
  router('/bulk-loading', () => (page = BulkLoading));
  router('/color-blindness', () => (page = ColorBlindness));
  router('/critical-image', () => (page = CriticalImage));
  router('/eager', () => (page = Eager));
  router('/flip-cards', () => (page = FlipCards));
  router('/focus', () => (page = Focus));
  router('/grid-and-zoom', () => (page = GridAndZoom));
  router('/hero', () => (page = Hero));
  router('/intrinsic', () => (page = Intrinsic));
  router('/modal', () => (page = Modal));
  router('/mode', () => (page = Mode));
  router('/page-templating', () => (page = PageTemplating));
  router('/placeholder', () => (page = Placeholder));
  router('/position', () => (page = Position));
  router('/pre-transform', () => (page = PreTransform));
  router('/ratio', () => (page = Ratio));
  router('/refit', () => (page = Refit));
  router('/slider', () => (page = Slider));
  router('/slideshow', () => (page = Slideshow));
  router('/state', () => (page = State));
  router('/style-driven', () => (page = StyleDriven));
  router('/transition', () => (page = Transition));
  router('/short-videos', () => (page = ShortVideos));
  router('/zoom', () => (page = Zoom));

  router.start();
</script>

<svelte:component this={page} />
