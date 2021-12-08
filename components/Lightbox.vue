<template>
  <div :id="name">
    <!-- row of images to open lightbox -->
    <div
      class="lightbox-container flex flex-row w-full justify-between"
      @keyup.esc="closeLightboxModal()"
    >
      <img
        v-for="(image, i) in images"
        :key="i"
        :src="image.src"
        class="lightbox-image cursor-pointer m-2 w-36 h-36"
        @click="openLightboxModal();showImage(i)"
      >
    </div>
    <!-- light box modal -->
    <div id="lightbox-modal" class="lightbox-modal" rel="closed" @keypress.esc="closeLightboxModal">
      <span class="close cursor-pointer" @click="closeLightboxModal">&times;</span>
      <div class="lightbox-content">
        <div
          v-for="(image, i) in images"
          :key="i"
          class="lightbox-slide"
        >
          <div class="number-text text-alt p-3 m-2 absolute top-0 rounded bg-black opacity-80">
            {{ i+1 }}/{{ imageCount }}
          </div>
          <img :src="image.src">
          <div v-if="image.title" class="slide-title text-alt text-center">
            {{ image.title }}
          </div>
        </div>
        <a class="prev cursor-pointer" @click="changeSlide(-1)">&#10094;</a>
        <a class="next cursor-pointer" @click="changeSlide(1)">&#10095;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'default-lightbox'
    },
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentSlide: 0
    }
  },
  computed: {
    imageCount () {
      return this.images.length
    },
    lightboxModal () {
      return document.querySelector('#' + this.name + ' #lightbox-modal')
    },
    lightboxSlides () {
      return document.querySelectorAll('#' + this.name + ' .lightbox-slide')
    }
  },
  mounted () {
    window.addEventListener('keyup', this.handleKeypress)
  },
  destroyed () {
    window.removeEventListener('keyup', this.handleKeypress)
  },
  methods: {
    openLightboxModal () {
      this.lightboxModal.style.display = 'block'
      this.lightboxModal.setAttribute('rel', 'open')

      console.log(`opening ${this.name}`)
    },
    closeLightboxModal () {
      this.lightboxModal.style.display = 'none'
      this.lightboxModal.setAttribute('rel', 'closed')
      console.log(`closing ${this.name}`)
    },
    showImage (n) {
      const images = this.lightboxSlides
      if (n > this.imageCount - 1) { n = 0 }
      if (n < 0) { n = this.imageCount - 1 }

      images.forEach((image) => {
        image.style.display = 'none'
      })
      this.currentSlide = n

      images[this.currentSlide].style.display = 'block'
      console.log(`showing image ${n} from ${this.name}`)
    },
    changeSlide (n) {
      const newSlide = this.currentSlide + n
      console.log(`changing slide to ${newSlide} of ${this.name}`)
      this.showImage(newSlide)
    },
    handleKeypress (e) {
      const isOpen = this.lightboxModal.getAttribute('rel')
      if (isOpen === 'open') {
        if (e.key === 'Escape') {
          this.closeLightboxModal()
        }
        if (e.key === 'ArrowLeft') {
          this.changeSlide(-1)
        }
        if (e.key === 'ArrowRight') {
          this.changeSlide(1)
        }
      }
    }
  }
}
</script>

<style scoped>
.lightbox-modal {
  display: none;
  @apply fixed z-100 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black;
}

.lightbox-modal .close {
  @apply text-alt font-bold text-3xl text-left;
  @apply absolute top-10 right-8;
}

.lightbox-content {
  @apply relative flex m-auto p-0 w-3/4 h-3/4 align-middle items-center justify-center;
}
.lightbox-slide {
  display: none;
}
.lightbox-slide img {
  @apply opacity-100;
}

.next,
.prev {
  @apply cursor-pointer absolute top-1/2;
  @apply text-alt font-bold text-xl p-4;
  @apply transition-all duration-500;
  @apply select-none;
}
.next {
  @apply -right-12 rounded-l;
}
.prev {
  @apply -left-12 rounded-r;
}
.next:hover,
.prev:hover {
  @apply bg-accent-alt opacity-70 text-white;
}
</style>
