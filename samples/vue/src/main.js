import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import TwicPics from "@twicpics/components/vue2";
import "@twicpics/components/style.css";
import '@twicpics/components-demo-wrapper/style.css';

Vue.use(TwicPics, {
  domain: `https://demo.twic.pics`,
  anticipation: 0.5,
  step: 100
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
