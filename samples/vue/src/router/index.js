import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../components/Menu.vue";
import TwicArtDirections from "../components/TwicArtDirections.vue";
import TwicBasicGrid from "../components/TwicBasicGrid.vue";
import TwicFlipCards from "../components/TwicFlipCards.vue";
import TwicFocus from "../components/TwicFocus.vue";
import TwicGridAndZoom from "../components/TwicGridAndZoom.vue";
import TwicModal from "../components/twic-modal/TwicModal.vue";
import TwicMode from "../components/TwicMode.vue";
import TwicPlaceholder from "../components/TwicPlaceholder.vue";
import TwicPosition from "../components/TwicPosition.vue";
import TwicRatio from "../components/TwicRatio.vue";
import TwicSlider from "../components/TwicSlider.vue";
import TwicSlideshow from "../components/twic-slideshow/TwicSlideshow.vue";
import TwicStyleDriven from "../components/TwicStyleDriven.vue";
import TwicTransition from "../components/TwicTransition.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Menu,
  },
  {
    path: "/art-directions",
    name: "TwicArtDirections",
    component: TwicArtDirections,
  },
  {
    path: "/basic-grid",
    name: "TwicBasicGrid",
    component: TwicBasicGrid,
  },
  {
    path: "/flip-cards",
    name: "TwicFlipCards",
    component: TwicFlipCards,
  },
  {
    path: "/focus",
    name: "TwicFocus",
    component: TwicFocus,
  },
  {
    path: "/grid-and-zoom",
    name: "TwicGridAndZoom",
    component: TwicGridAndZoom,
  },
  {
    path: "/modal",
    name: "TwicModal",
    component: TwicModal,
  },
  {
    path: "/mode",
    name: "TwicMode",
    component: TwicMode,
  },
  {
    path: "/placeholder",
    name: "TwicPlaceholder",
    component: TwicPlaceholder,
  },
  {
    path: "/position",
    name: "TwicPosition",
    component: TwicPosition,
  },
  {
    path: "/ratio",
    name: "TwicRatio",
    component: TwicRatio,
  },
  {
    path: "/slider",
    name: "TwicSlider",
    component: TwicSlider,
  },
  {
    path: "/slideshow",
    name: "TwicSlideshow",
    component: TwicSlideshow,
  },
  {
    path: "/style-driven",
    name: "TwicStyleDriven",
    component: TwicStyleDriven,
  },
  {
    path: "/transition",
    name: "TwicTransition",
    component: TwicTransition,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
