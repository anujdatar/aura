<script setup lang="ts">

import type { industryImageSrc } from '../types'

interface Props {
  name: string
  images: industryImageSrc[]
  thumbHeight?: string
  thumbnailCount?: number
}

const props = withDefaults(defineProps<Props>(), { thumbHeight: '96px', thumbnailCount: 4 })

const lightboxImageToShow = ref<number>()

function openLightboxModal(n: number) {
  lightboxImageToShow.value = n
}
function onCloseLightbox() {
  lightboxImageToShow.value = undefined
}
</script>

<template>
  <div :id="props.name">
    <div class="thumbnail-container-1">
      <img
        v-for="(image, i) in props.images"
        :key="i"
        :src="image.src"
        class="thumbnail-image-1"
        :alt="props.name + '-image-' + i"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        :data-aos-delay="100 + i*100"
        @click="openLightboxModal(i+1)"
      >
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

<style scoped>
.thumbnail-container-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 100%;
}

.thumbnail-image-1 {
  min-width: 6rem;
  max-width: 9rem;
  min-height: 6rem;
  max-height: 9rem;

  width: 42%;
  height: 100%;

  object-fit: cover;
  border-radius: .5rem;
}
@media (min-width: 768px) {
  .thumbnail-image-1 {
    width: 100%;
    height: 100%;
  }
}
</style>
