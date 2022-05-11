<script>	
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";
</script>

<TwicWrapper>
  <div class="twic-basic-grid-container">
      <TwicAbstract
          title="A basic example"
          codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-svelte-basic-example-ygqef7"
          codeSandBoxName="TwicPics x Svelte 3 - A basic example"
      >
          <p>
              TwicPics is a Responsive Image Service Solution (SaaS)
              that enables on-demand responsive image generation.
          </p>
          <p>
              TwicPics Components make it dead easy to unleash the power of TwicPics.
          </p>

              Here the properties used in this example :
          <ul>
              <li>
                  <span class="twic-code">ratio</span>:
                  <span>
                    determines the value of the width/height ratio
                    of the image display area.</span>
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
                  <span>helps optimize your CLS and implement the LQIP technique.</span>
              </li>
          </ul>
      </TwicAbstract>
      <div class="twic-grid">
          <div class="twic-item">
              <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
              <span>
                  Default values
              </span>
          </div>
          <div class="twic-item">
              <TwicImg
                  src="/football.jpg"
                  ratio="16/9"
                  mode="cover"
                  placeholder="meancolor"
              />
              <span>
                <span class="twic-code">ratio="16/9"</span> & 
                <span class="twic-code">mode="cover"</span>: the image fills the area
              </span>
          </div>
          <div class="twic-item">
              <TwicImg
                  src="/football.jpg"
                  step="100"
                  mode="contain"
                  ratio="16/9"
              />
              <span>
                <span class="twic-code">ratio="16/9"</span> &
                <span class="twic-code">mode="contain"</span>: the image sits inside the area
              </span>
          </div>
          <div class="twic-item">
              <TwicImg
                  src="/football.jpg"
                  step="100"
                  focus="auto"
                  ratio="2/3"
                  placeholder="maincolor"
              />
              <span>
                <span class="twic-code">ratio="2/3"</span>,
                <span class="twic-code">mode="contain"</span> & <span class="twic-code">focus="auto"</span>
              </span>
          </div>
      </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-basic-grid-container {
  :global(.twic-item .twic-w) {
      background-color: #00FFA3;
      display: block;
  }
}
</style>