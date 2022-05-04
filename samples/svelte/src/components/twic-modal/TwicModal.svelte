<script>
import { TwicWrapper, TwicAbstract } from "@twicpics/components-demo-wrapper/svelte";
import { TwicImg } from "@twicpics/components/svelte3";
import Modal from "./Modal.svelte";
  
const images = [
  {
    url: `components/modal/seagull.jpg`,
    caption: `seagulls`,
  },
  {
    url: `components/modal/shell.jpg`,
    caption: `shell`,
  },
  {
    url: `components/modal/jelly-fish.jpg`,
    caption: `jelly fish`,
  },
  {
    url: `components/modal/turtle.jpg`,
    caption: `turtle`,
  },
];
let idModalToOpen = null;

const openModal = (index) => {
  idModalToOpen = index;
}
const closeModal = () => {
  idModalToOpen = null;
}
</script>

<TwicWrapper>
  <div class="twic-modal-container">
    <TwicAbstract
      title="A modal revealer"
      codeSandBoxUrl=""
      codeSandBoxName="TwicPics x Svelte - Modal"
    >
      <p>Click on the image of your choice to reveal a modal.</p>
    </TwicAbstract>
    <div class="twic-grid">
      {#each images as image, index}
        <div>
          <figure
            class="poster-wrapper twic-item"
            on:click={ () => openModal(index) }
          >
            <TwicImg src={ image.url } focus="auto" ratio="0.95"></TwicImg>
            <figcaption>
              <p>Click</p>
            </figcaption>
          </figure>
          <Modal
            image={ image }
            show={ index === idModalToOpen }
            onClose={ closeModal }
          ></Modal>
        </div>
      {/each}
    </div>
  </div>
</TwicWrapper>

<style lang="scss">
.twic-modal-container {
  figure.poster-wrapper {
    position: relative;
    figcaption {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px;
      font-size: 1.3em;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s;
      cursor: pointer;
    }
    figcaption:hover {
      opacity: 1;
    }
  }
}
</style>
