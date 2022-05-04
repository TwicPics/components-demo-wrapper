import { installTwicPics } from "@twicpics/components/svelte3";
import "@twicpics/components/style.css";
import "@twicpics/components-demo-wrapper/style.css";

import App from "./App.svelte";

installTwicPics({
  domain: `https://demo.twic.pics`,
  anticipation: 0.5,
  step: 100,
});

const app = new App({
  target: document.body,
});

export default app;
