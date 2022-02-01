<template>
  <div :id="name">
    <!-- lightbox thumbnails -->
    <div class="lightbox-thumbnails flex flex-row w-full justify-between">
      <button class="thumb-change prev" @click="changeThumbnails(-1)">
        <!-- &#10094; -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" fill="currentColor"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" /></svg>
      </button>
      <div class="lightbox-thumbnail-row flex flex-row w-full gap-8 overflow-hidden">
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="image.src"
          :alt="image.title"
          class="lightbox-thumbnail cursor-pointer"
          :style="computedStyles"
          @click="openLightboxModal();showLightboxImage(i)"
        >
      </div>
      <button class="thumb-change next" @click="changeThumbnails(1)">
        <!-- &#10094; -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" fill="currentColor"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" /></svg>
      </button>
    </div>
    <!-- lightbox modal -->
    <div class="lightbox-modal" rel="closed">
      <span class="close cursor-pointer" @click="closeLightboxModal">&times;</span>
      <div class="lightbox-content">
        <div
          v-for="(image, i) in images"
          :key="i"
          class="lightbox-slide"
        >
          <div class="slide-number-text">
            {{ i+1 }}/{{ imageCount }}
          </div>
          <img :src="image.src">
          <div v-if="image.title" class="slide-title text-alt text-center">
            {{ image.title }}
          </div>
        </div>
        <a class="slide-change prev cursor-pointer" @click="changeLightboxSlide(-1)">&#10094;</a>
        <a class="slide-change next cursor-pointer" @click="changeLightboxSlide(1)">&#10095;</a>
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
    },
    thumbHeight: {
      type: String,
      default: '96px'
    },
    thumbnailCount: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      firstThumbnail: 0,
      currentSlide: 0
    }
  },
  computed: {
    imageCount () {
      return this.images.length
    },
    computedStyles () {
      return {
        '--thumb-height': this.thumbHeight
      }
    },
    lightboxThumbnails () {
      return document.querySelectorAll('#' + this.name + ' .lightbox-thumbnail')
    },
    lightboxModal () {
      return document.querySelector('#' + this.name + ' .lightbox-modal')
    },
    lightboxSlides () {
      return document.querySelectorAll('#' + this.name + ' .lightbox-slide')
    }
  },
  mounted () {
    this.showThumbnails(0)
    window.addEventListener('keyup', this.handleKeypress)
  },
  destroyed () {
    window.removeEventListener('keyup', this.handleKeypress)
  },
  methods: {
    // thumbnail functions
    showThumbnails (n) {
      // this.firstThumbnail = n
      const thumbs = []
      const thumbnails = this.lightboxThumbnails
      for (let i in [...Array(this.thumbnailCount).keys()]) {
        i = parseInt(i)
        if (n + i > this.imageCount - 1) {
          i = i - this.imageCount
        }
        if (n + i < 0) {
          i = this.imageCount
        }
        thumbs.push(n + i)
        // console.log(n + i)
        thumbnails[n + i].style.display = 'flex'
      }
      console.log(thumbs)
      this.firstThumbnail = thumbs[0]
    },
    hideThumbnails () {
      const thumbnails = this.lightboxThumbnails
      thumbnails.forEach((image) => {
        // console.log(image)
        image.style.display = 'none'
      })
    },
    cycleThumbnails (n) {
      if (n > this.imageCount) {
        n = n - this.imageCount
      }
      if (n < 0) {
        n = this.imageCount - 1
      }
      return n
    },
    changeThumbnails (n) {
      // console.log('changing thumbnail by ', n)
      const first = this.firstThumbnail + n
      console.log(first, n)
      this.hideThumbnails()
      this.showThumbnails(first)
      console.log(this.firstThumbnail, n)
    },
    // lightbox modal functions
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
    showLightboxImage (n) {
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
    changeLightboxSlide (n) {
      const newSlide = this.currentSlide + n
      console.log(`changing slide to ${newSlide} of ${this.name}`)
      this.showLightboxImage(newSlide)
    },
    handleKeypress (e) {
      const isOpen = this.lightboxModal.getAttribute('rel')
      if (isOpen === 'open') {
        if (e.key === 'Escape') {
          this.closeLightboxModal()
        }
        if (e.key === 'ArrowLeft') {
          this.changeLightboxSlide(-1)
        }
        if (e.key === 'ArrowRight') {
          this.changeLightboxSlide(1)
        }
      }
    }
  }
}
</script>

<style scoped>
/* styling for thumbnails */
.thumb-change {
  @apply flex text-center align-middle justify-center leading-8 cursor-pointer;
  @apply h-6 w-7 my-auto mx-2 p-0 rounded-full;
  @apply  bg-black text-alt text-xl opacity-50;
}
.thumb-change svg {
  @apply w-4 h-4 m-auto;
}
.thumb-change.prev svg {
  transform: scaleX(-1);
}
.thumb-change:hover {
  @apply bg-accent-alt opacity-70 text-white;
}
.lightbox-thumbnail {
  height: var(--thumb-height);
  width: var(--thumb-height);
  display: none;
}
/* ************************************************************************* */
/* styling for the lightbox image popup */
.lightbox-modal {
  display: none;
  @apply fixed z-100 pt-24 left-0 top-0 w-full h-full overflow-auto;
  @apply bg-black;
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
.lightbox-slide .slide-number-text {
  @apply text-alt p-3 m-2 absolute -top-16 left-0 rounded bg-black opacity-80;
}
.lightbox-slide img {
  @apply opacity-100;
  @apply max-h-lg w-auto;
}
.lightbox-slide .slide-title {
  @apply pt-4;
}

.slide-change {
  @apply cursor-pointer absolute top-1/2;
  @apply text-alt font-bold text-xl p-4;
  @apply transition-all duration-500;
  @apply select-none;
}
.slide-change.next {
  @apply -right-12 rounded-l;
}
.slide-change.prev {
  @apply -left-12 rounded-r;
}
.slide-change.next:hover,
.slide-change.prev:hover {
  @apply bg-accent-alt opacity-70 text-white;
}
</style>
