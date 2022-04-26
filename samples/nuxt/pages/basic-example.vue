<template>
  <TwicWrapper framework="nuxt">
    <div class="twic-basic-grid-container">
      <TwicAbstract
        title="A basic example"
        codeSandBoxUrl=""
        codeSandBoxName="TwicPics x Nuxt - A basic example"
      >
        <p>
          TwicPics is a Responsive Image Service Solution
          <span class="twic-code">SaaS</span>
          that enables on-demand responsive image generation.
        </p>
        <p>
          TwicPics Components make it dead easy to unleash the power of
          TwicPics.
        </p>

        Here the properties used in this example :
        <ul>
          <li>
            <span class="twic-code">ratio</span>:
            <span>
              determines the value of the width/height ratio of the image
              display area.</span
            >
          </li>
          <li>
            <span class="twic-code">mode</span>:
            <span>determines if the image fills or sits inside the area.</span>
          </li>
          <li>
            <span class="twic-code">focus</span>:
            <span>changes the focus point coordinates of the image.</span>
          </li>
          <li>
            <span class="twic-code">placeholder</span>:
            <span
              >helps optimize your CLS and implement the LQIP technique.</span
            >
          </li>
        </ul>
      </TwicAbstract>

      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
          <span> default </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="/football.jpg"
            ratio="16/9"
            mode="cover"
            placeholder="meancolor"
          />
          <span> ratio=16/9, image fills area </span>
        </div>
        <div class="twic-item">
          <TwicImg src="/football.jpg" step="100" mode="contain" ratio="16/9" />
          <span> ratio=16/9, image sits inside area </span>
        </div>
        <div class="twic-item">
          <TwicImg
            src="/football.jpg"
            step="100"
            focus="auto"
            ratio="2/3"
            placeholder="maincolor"
          />
          <span> ratio=2/3, image fills area + focus auto </span>
        </div>
      </div>
    </div>
  </TwicWrapper>
</template>

<script>
import {
  TwicAbstract,
  TwicWrapper,
} from "@twicpics/components-demo-wrapper/vue";

export default {
  name: "BasicExamplePage",
  components: {
    TwicAbstract,
    TwicWrapper,
  },
};
</script>

<style lang="scss">
.twic-basic-grid-container {
  .twic-item .twic-w {
    background-color: #00ffa3;
    display: block;
  }
}
</style>
