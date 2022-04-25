<script setup lang="ts">

import type { industryImageSrc } from '../types'

interface Props {
  name: string
  images: industryImageSrc[]
  thumbHeight?: string
  thumbnailCount?: number
}

const props = withDefaults(defineProps<Props>(), { thumbHeight: '96px', thumbnailCount: 4 })
const imageCount = computed(() => {
  return props.images.length
})

const thumbnailTrack = ref<HTMLDivElement>()
const thumbnails = computed(() => {
  return Array.from(thumbnailTrack.value!.children) as HTMLImageElement[]
})
const thumbnailWidth = computed(() => {
  return thumbnails.value[0].getBoundingClientRect().width
})

function setThumbnailPositions() {
  (thumbnails.value).forEach((image, index) => {
    if (index === 0)
      image.style.left = `${0}px`

    if (index > 0)
      image.style.left = `${(thumbnailWidth.value + 32) * index}px`
  })
}
const firstThumbnail = ref(0)
function changeThumbnail(n: number) {
  const newThumbnail = firstThumbnail.value + n
  if (newThumbnail >= 0 && newThumbnail < imageCount.value - 1) {
    const targetThumbnail = (thumbnails.value)[newThumbnail]
    thumbnailTrack.value!.style.transform = `translateX(-${targetThumbnail.style.left})`
    firstThumbnail.value += n
  }
}

const lightboxImageToShow = ref<number>()

function openLightboxModal(n: number) {
  lightboxImageToShow.value = n
}
function onCloseLightbox() {
  lightboxImageToShow.value = undefined
}

onMounted(() => {
  setThumbnailPositions()
})
</script>

<template>
  <div :id="props.name">
    <div class="thumbnail-container">
      <!-- thumbnails section -->
      <button class="thumbnail-button prev cursor-pointer" @click="changeThumbnail(-1)">
        &#10094;
      </button>
      <div class="thumbnail-track-container">
        <div ref="thumbnailTrack" class="thumbnail-track">
          <img
            v-for="(image, i) in props.images"
            :key="i"
            :src="image.src"
            class="thumbnail-image"
            :alt="props.name + '-image-' + i"
            @click="openLightboxModal(i+1)"
          >
        </div>
      </div>
      <button class="thumbnail-button next cursor-pointer" @click="changeThumbnail(1)">
        &#10095;
      </button>
    </div>
    <!-- lightbox modal -->
    <lightbox
      v-if="lightboxImageToShow"
      :images="props.images"
      :image-to-show="lightboxImageToShow"
      @close-lightbox="onCloseLightbox"
    />
  </div>
</template>

<style>
.thumbnail-container {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
}
.thumbnail-track-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.thumbnail-track {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 6rem;
  max-height: 9rem;
  transition: transform 250ms ease-in;
}
.thumbnail-button {
  padding-left: .5rem;
  padding-right: .5rem;
  margin-left: .5rem;
  margin-right: .5rem;
  color: black;
  opacity: .6;
}
.thumbnail-container:hover .thumbnail-button {
  background-color: black;
  color: var(--alt);
  opacity: .3;
}
.thumbnail-button:hover,
.thumbnail-button.hover {
  background-color: black;
  color: var(--alt);
  opacity: .6 !important;
}

.thumbnail-image {
  min-width: 6rem;
  max-width: 9rem;
  width: 100%;
  min-height: 6rem;
  max-height: 9rem;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: .5rem;
}
</style>
