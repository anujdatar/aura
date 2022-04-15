<script setup lang="ts">
import type { industryImageSrc } from '../types'

interface Props {
  imageToShow: number | null
  images: industryImageSrc[]
}

const props = defineProps<Props>()

const emit = defineEmits(['close-lightbox'])

const imageCount = computed(() => {
  return props.images.length
})
const isSingleImage = computed(() => {
  return imageCount.value === 1
})

const lightboxModal = ref<HTMLDivElement>()
const imageTitleText = ref<HTMLDivElement>()
const currentSlideNumber = ref<number>(0)
const slideNumberText = ref<number>()

const modalImages = computed (() => {
  const lastImage = props.images[imageCount.value - 1]
  const firstImage = props.images[0]
  return [lastImage, ...props.images, firstImage]
})

const slideTrack = ref<HTMLUListElement>()
const lightboxSlides = computed(() => {
  return Array.from(slideTrack.value!.children) as HTMLLIElement[]
})
const slideWidth = ref()

function setSlidePositions(slides: HTMLElement[]) {
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth.value * index}px`
  })
}

function setSlideText(targetSlideNumber: number) {
  slideNumberText.value = targetSlideNumber
  imageTitleText.value!.innerHTML = modalImages.value[targetSlideNumber].title
}

function moveToSlide(targetSlideNumber: number) {
  // if (lastSlide.value !== undefined) lightboxSlides.value[lastSlide.value].classList.remove('z-1002')
  // targetSlide.classList.add('z-1002')
  const targetSlide = lightboxSlides.value[targetSlideNumber]
  slideTrack.value!.style.transform = `translateX(-${targetSlide.style.left})`
}

function closeLightboxModal() {
  emit('close-lightbox')
}

function changeLightboxSlide(n: number) {
  if (isSingleImage.value) return
  slideTrack.value!.style.transition = 'transform 250ms ease-in'
  const targetSlideNumber = currentSlideNumber.value! + n
  currentSlideNumber.value = targetSlideNumber
  if (targetSlideNumber >= 0 && targetSlideNumber <= imageCount.value + 1) moveToSlide(targetSlideNumber)
}

function handleSlideLoop() {
  if (lightboxSlides.value[currentSlideNumber.value].id === 'lastClone') {
    slideTrack.value!.style.transition = 'none'
    currentSlideNumber.value = imageCount.value
    moveToSlide(currentSlideNumber.value)
  }
  if (lightboxSlides.value[currentSlideNumber.value].id === 'firstClone') {
    slideTrack.value!.style.transition = 'none'
    currentSlideNumber.value = 1
    moveToSlide(currentSlideNumber.value)
  }
  setSlideText(currentSlideNumber.value!)
}

onMounted(() => {
  currentSlideNumber.value = props.imageToShow as number
  lightboxModal.value?.focus()

  const bodyEl = document.querySelector('body') as HTMLBodyElement
  bodyEl!.style.overflow = 'hidden'

  lightboxSlides.value[0].setAttribute('id', 'lastClone')
  lightboxSlides.value[imageCount.value + 1].setAttribute('id', 'firstClone')
  slideWidth.value = lightboxSlides.value[0].getBoundingClientRect().width

  setSlidePositions(lightboxSlides.value)
  moveToSlide(currentSlideNumber.value)
  setSlideText(currentSlideNumber.value)
})
onUnmounted(() => {
  const bodyEl = document.querySelector('body') as HTMLBodyElement
  bodyEl!.style.overflow = 'auto'
})
</script>

<template>
  <div
    ref="lightboxModal"
    class="lightbox-modal"
    rel="closed"
    tabindex="0"
    @keyup.right="changeLightboxSlide(1)"
    @keyup.left="changeLightboxSlide(-1)"
    @keyup.esc="closeLightboxModal"
  >
    <div class="lightbox-container align-middle items-center justify-center" @click.self="closeLightboxModal">
      <div class="slide-number-text">
        {{ slideNumberText }} / {{ imageCount }}
      </div>
      <button class="lightbox-btn close" @click="closeLightboxModal">
        &times;
      </button>
      <button class="lightbox-btn prev" :disabled="isSingleImage" @click="changeLightboxSlide(-1)">
        &#10094;
      </button>
      <button class="lightbox-btn next" :disabled="isSingleImage" @click="changeLightboxSlide(1)">
        &#10095;
      </button>
      <div class="slides-container align-middle items-center justify-center">
        <ul ref="slideTrack" class="slides-track" @transitionend="handleSlideLoop">
          <li
            v-for="(image, i) in modalImages"
            :key="i"
            class="lightbox-slide"
          >
            <img :src="image.src" alt="">
          </li>
        </ul>
        <div ref="imageTitleText" class="slide-title" />
      </div>
    </div>
  </div>
</template>

<style>
.lightbox-modal {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  color: var(--alt);
}
.lightbox-modal::before {
  background-color: black;
  opacity: .95;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
}
.lightbox-container {
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 1001;
}

.lightbox-modal .slide-number-text {
  position: absolute;
  top: 1.25rem;
  left: 2rem;
  background-color: black;
  opacity: .8;
  border-radius: .25rem;
  padding: .75rem;
  margin: .5rem;
}
.lightbox-btn {
  cursor: pointer;
  z-index: 1002;
  transition-property: color;
  transition-duration: 500ms;
  font-weight: 600;
}
.lightbox-btn:hover:not(:disabled) {
  color: var(--accent-alt);
}
.lightbox-btn:disabled {
  cursor: not-allowed;
}

.lightbox-btn.close {
  position: absolute;
  top: 1.25rem;
  right: 2rem;

  font-size: 2.25rem;
  line-height: 2.5rem;
  padding: .75rem;
  /* margin: .5rem; */
}
.lightbox-btn.next,
.lightbox-btn.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
.lightbox-btn.prev {
  left: -0.5rem;
}
.lightbox-btn.next {
  right: -0.5rem;
}

.slides-container {
  display: flex;
  flex-direction: column;
  max-height: calc(200% / 3);
  height: 100%;
  max-width: 60%;
  width: 100%;
  margin: auto;
  overflow: hidden;
}
.slides-track {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.lightbox-slide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.lightbox-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.slide-title {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 8rem;

  font-size: 1.25rem;
  line-height: 1.75rem;
}
@media (min-width: 768px) {
  .slide-title {
    bottom: 6rem;
  }
}
.z-1002 {
  z-index: 1002;
}
</style>
