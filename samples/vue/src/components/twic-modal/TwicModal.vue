<template>
  <TwicWrapper>
    <div class="twic-modal-container">
      <TwicAbstract
        title="A modal revealer"
        codeSandBoxUrl="https://codesandbox.io/s/twicpics-x-vue2-modal-b56wtp"
        codeSandBoxName="TwicPics x Vue - Modal"
      >
        <p>Click on the image of your choice to reveal a modal.</p>
      </TwicAbstract>
      <div class="twic-grid">
        <div v-for="(image, imageIndex) in images" :key="image.url">
          <figure
            class="poster-wrapper twic-item"
            v-on:click="openModal(imageIndex)"
          >
            <TwicImg :src="image.url" focus="auto" ratio="0.95"></TwicImg>
            <figcaption>
              <p>Click</p>
            </figcaption>
          </figure>
          <Modal
            :image="image"
            :show="imageIndex === idModalToOpen"
            :onClose="closeModal"
          ></Modal>
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
import Modal from "./Modal.vue";

export default {
  name: "TwicModal",
  components: {
    Modal,
    TwicAbstract,
    TwicWrapper,
  },
  data() {
    return {
      images: [
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
      ],
      idModalToOpen: null,
    };
  },
  methods: {
    openModal(idModalToOpen) {
      this.idModalToOpen = idModalToOpen;
    },
    closeModal() {
      this.idModalToOpen = null;
    },
  },
};
</script>

<style lang="scss">
.twic-modal-container {
  figure.poster-wrapper {
    position: relative;
    & figcaption {
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
    &:hover {
      & img {
        opacity: 0 !important;
      }
      & figcaption {
        opacity: 1;
      }
    }
  }
}
</style>
