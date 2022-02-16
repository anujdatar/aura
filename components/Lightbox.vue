<template>
  <div :id="name">
    <!-- lightbox thumbnails -->
    <div
      class="thumbnail-container"
      @mouseenter="thumbnailMouseEnter"
      @mouseleave="thumbnailMouseLeave"
    >
      <button class="thumbnail-button prev cursor-pointer" @click="changeThumbnail(-1)">
        &#10094;
      </button>
      <div class="thumbnail-track-container">
        <div class="thumbnail-track">
          <img
            v-for="(image, i) in images"
            :key="i"
            :src="image.src"
            class="thumbnail-image"
            @click="openLightboxModal(i+1)"
          >
        </div>
      </div>
      <button class="thumbnail-button next cursor-pointer" @click="changeThumbnail(1)">
        &#10095;
      </button>
    </div>
    <!-- lightbox modal -->
    <div class="lightbox-modal" rel="closed">
      <div class="lightbox-container">
        <span class="close cursor-pointer" @click="closeLightboxModal">&times;</span>
        <button class="slide-change prev cursor-pointer" @click="changeSlide(-1)">
          &#10094;
        </button>
        <button class="slide-change next cursor-pointer" @click="changeSlide(1)">
          &#10095;
        </button>
        <div class="slide-number-text">
          {{ slideNumber }}/{{ imageCount }}
        </div>
        <div class="slides-container">
          <ul class="slides-track">
            <li
              v-for="(image, i) in modalImages"
              :key="i"
              class="lightbox-slide"
            >
              <img :src="image.src">
            </li>
          </ul>
          <div class="slide-title">
            {{ imageTitleText }}
          </div>
        </div>
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
      currentSlide: 0,
      imageTitleText: '',
      slideWidth: 0,
      slideNumber: 1
    }
  },
  computed: {
    imageCount () {
      return this.images.length
    },
    modalImages () {
      const lastImage = this.images[this.imageCount - 1]
      const firstImage = this.images[0]
      return [lastImage, ...this.images, firstImage]
    },
    thumbnailTrack () {
      return document.querySelector('#' + this.name + ' .thumbnail-track')
    },
    thumbnails () {
      return Array.from(this.thumbnailTrack.children)
    },
    thumbnailWidth () {
      return this.thumbnails[0].getBoundingClientRect().width
    },
    lightboxModal () {
      return document.querySelector('#' + this.name + ' .lightbox-modal')
    },
    lightboxSlideTrack () {
      return document.querySelector('#' + this.name + ' .slides-track')
    },
    lightboxImageTitle () {
      return document.querySelector('#' + this.name + ' .slide-title')
    },
    lightboxSlides () {
      return Array.from(this.lightboxSlideTrack.children)
    }
  },
  mounted () {
    this.setThumbnailPosition()
    this.lightboxSlides[0].setAttribute('id', 'lastClone')
    this.lightboxSlides[this.imageCount + 1].setAttribute('id', 'firstClone')
    this.thumbnailTrack.style.transition = 'transform 250ms ease-in'
    window.addEventListener('keyup', this.handleKeypress)
  },
  destroyed () {
    window.removeEventListener('keyup', this.handleKeypress)
  },
  methods: {
    setThumbnailPosition () {
      this.thumbnails.forEach((image, index) => {
        if (index === 0) {
          image.style.left = 0 + 'px'
        }
        if (index > 0) {
          image.style.left = (this.thumbnailWidth + 32) * index + 'px'
        }
      })
    },
    changeThumbnail (n) {
      const newThumbnail = this.firstThumbnail + n
      if (newThumbnail >= 0 && newThumbnail < this.imageCount - 1) {
        const targetThumbnail = this.thumbnails[newThumbnail]
        this.thumbnailTrack.style.transform = 'translateX(-' + targetThumbnail.style.left + ')'
        this.firstThumbnail += n
      }
    },
    thumbnailMouseEnter () {
      const buttons = document.querySelectorAll('#' + this.name + ' .thumbnail-button')
      const buttonArray = Array.from(buttons)
      buttonArray.forEach((button) => {
        button.classList.add('hover')
      })
    },
    thumbnailMouseLeave () {
      const buttons = document.querySelectorAll('#' + this.name + ' .thumbnail-button')
      const buttonArray = Array.from(buttons)
      buttonArray.forEach((button) => {
        button.classList.remove('hover')
      })
    },
    openLightboxModal (n) {
      this.lightboxModal.style.display = 'block'
      this.lightboxModal.setAttribute('rel', 'open')
      this.lightboxSlideTrack.addEventListener('transitionend', this.handleSlideLoop)
      this.slideWidth = this.lightboxSlides[0].getBoundingClientRect().width
      this.lightboxSlides.forEach(this.setSlidePosition)
      this.moveToSlide(n)
      this.slideNumber = this.currentSlide
    },
    closeLightboxModal () {
      this.lightboxModal.style.display = 'none'
      this.lightboxModal.setAttribute('rel', 'closed')
      this.lightboxSlideTrack.style.transition = 'none'
      this.lightboxSlideTrack.removeEventListener('transitionend', this.handleSlideLoop)
    },
    setSlidePosition (slide, index) {
      slide.style.left = this.slideWidth * index + 'px'
    },
    changeSlide (n) {
      this.lightboxSlideTrack.style.transition = 'transform 250ms ease-in'
      const targetSlide = this.currentSlide + n
      if (targetSlide >= 0 && targetSlide < this.imageCount + 2) {
        this.moveToSlide(targetSlide)
      }
    },
    moveToSlide (targetSlideNumber) {
      const targetSlide = this.lightboxSlides[targetSlideNumber]
      this.lightboxSlides[this.currentSlide].classList.remove('z-1002')
      targetSlide.classList.add('z-1002')
      this.lightboxSlideTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')'
      this.currentSlide = targetSlideNumber
      this.lightboxImageTitle.innerHTML = this.modalImages[targetSlideNumber].title
    },
    handleSlideLoop () {
      if (this.lightboxSlides[this.currentSlide].id === 'lastClone') {
        this.lightboxSlideTrack.style.transition = 'none'
        this.currentSlide = this.imageCount
        this.moveToSlide(this.currentSlide)
      }
      if (this.lightboxSlides[this.currentSlide].id === 'firstClone') {
        this.lightboxSlideTrack.style.transition = 'none'
        this.currentSlide = 1
        this.moveToSlide(this.currentSlide)
      }
      this.slideNumber = this.currentSlide
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
.thumbnail-container {
  @apply w-full h-full flex flex-row relative;
}
.thumbnail-track-container {
  @apply relative h-full w-full overflow-hidden;
}
.thumbnail-track {
  @apply relative w-full min-h-24 max-h-36 h-full;
}
.thumbnail-image {
  @apply min-w-24 max-w-36 w-full min-h-24 max-h-36 h-full object-cover;
  @apply absolute top-0 bottom-0;
}

.thumbnail-button {
  @apply px-2 mx-2 hover:bg-black text-black hover:text-alt opacity-60;
}
.thumbnail-button.hover {
  @apply bg-black text-alt;
}

/* **************************************************************** */
.lightbox-modal {
  @apply text-alt p-0 m-0;
  @apply bg-transparent z-1000 w-full h-full;
  @apply fixed top-0 left-0 overflow-hidden;
  display: none;
}

.lightbox-modal::before {
  @apply bg-black opacity-95 fixed top-0 left-0 w-full h-full;
  content: "";
}

.lightbox-container {
  @apply relative z-1001 h-full w-full m-auto;
  @apply flex flex-col align-middle items-center justify-center;
}

.lightbox-modal .slide-number-text {
  @apply text-alt p-3 m-2 absolute top-5 left-8 rounded bg-black opacity-80;
}

.lightbox-modal .close {
  @apply z-1002;
  @apply font-bold text-4xl text-left;
  @apply absolute top-8 right-8;
}
.slide-change {
  @apply z-1002;
  @apply cursor-pointer absolute top-1/2;
  @apply font-bold text-2xl py-4 px-8 ;
  @apply transition-all duration-500;
  @apply select-none;
  transform: translateY(-50%)
}
.slide-change.prev {
  @apply -left-2;
}
.slide-change.next {
  @apply -right-2;
}

.slides-container {
  @apply z-1001 max-h-2/3 h-full w-full max-w-3/5 m-auto overflow-hidden;
  @apply flex flex-col align-middle items-center justify-center;
}
.slides-track {
  @apply p-0 m-0 list-none w-full h-full relative;
}
.lightbox-slide {
  @apply absolute top-0 bottom-0 overflow-hidden w-full;
}
.lightbox-slide img {
  @apply w-full h-full object-contain;
}
.slide-title {
  @apply z-1001 absolute right-1/2 md:bottom-24 bottom-32;
  @apply text-xl;
  transform: translateX(50%)
}
</style>
