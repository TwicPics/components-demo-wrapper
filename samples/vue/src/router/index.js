import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../components/Menu.vue";
import TwicArtDirections from "../components/TwicArtDirections.vue";
import TwicBasicGrid from "../components/TwicBasicGrid.vue";
import TwicFlipCards from "../components/TwicFlipCards.vue";
import TwicFocus from "../components/TwicFocus.vue";
import TwicGridAndZoom from "../components/TwicLifeCycle.vue";
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
    path: "/twicArtDirections",
    name: "TwicArtDirections",
    component: TwicArtDirections,
  },
  {
    path: "/twicBasicGrid",
    name: "TwicBasicGrid",
    component: TwicBasicGrid,
  },
  {
    path: "/twicFlipCards",
    name: "TwicFlipCards",
    component: TwicFlipCards,
  },
  {
    path: "/twicFocus",
    name: "TwicFocus",
    component: TwicFocus,
  },
  {
    path: "/twicGridAndZoom",
    name: "TwicGridAndZoom",
    component: TwicGridAndZoom,
  },
  {
    path: "/twicModal",
    name: "TwicModal",
    component: TwicModal,
  },
  {
    path: "/twicMode",
    name: "TwicMode",
    component: TwicMode,
  },
  {
    path: "/twicPlaceholder",
    name: "TwicPlaceholder",
    component: TwicPlaceholder,
  },
  {
    path: "/twicPosition",
    name: "TwicPosition",
    component: TwicPosition,
  },
  {
    path: "/twicRatio",
    name: "TwicRatio",
    component: TwicRatio,
  },
  {
    path: "/twicSlider",
    name: "TwicSlider",
    component: TwicSlider,
  },
  {
    path: "/twicSlideshow",
    name: "TwicSlideshow",
    component: TwicSlideshow,
  },
  {
    path: "/twicStyleDriven",
    name: "TwicStyleDriven",
    component: TwicStyleDriven,
  },
  {
    path: "/twicTransition",
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
