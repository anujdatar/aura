<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()
const emit = defineEmits(['close-lightbox'])

const isoLightbox = ref<HTMLElement>()

function closeIsoLightbox() {
  emit('close-lightbox')
}

onMounted(() => {
  isoLightbox.value?.focus()
  const bodyEl = document.querySelector('body') as HTMLBodyElement
  bodyEl!.style.overflow = 'hidden'
})

onUnmounted(() => {
  const bodyEl = document.querySelector('body') as HTMLBodyElement
  bodyEl!.style.overflow = 'auto'
})
</script>

<template>
  <div
    ref="isoLightbox"
    class="iso-lightbox"
    rel="closed"
    tabindex="0"
    @keyup.esc="closeIsoLightbox"
  >
    <div
      class="iso-lightbox-container align-middle items-center justify-center"
      @click.self="closeIsoLightbox"
    >
      <div class="close-container">
        <button class="lightbox-btn close" @click="closeIsoLightbox">
          &times;
        </button>
      </div>
      <div class="iso-image-container">
        <img
          v-for="(image, i) in props.images"
          :key="i"
          :src="image"
          :alt="'iso-cert-page-' + i"
        >
        <div class="bottom-padding" />
      </div>
    </div>
  </div>
</template>

<style>
.iso-lightbox {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* max-height: 90vh; */
  padding: 0;
  margin: 0;
  color: var(--alt);
  overflow: auto;
}
.iso-lightbox::before {
  background-color: black;
  opacity: .95;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  margin: 0;
  padding: 0;
}
.iso-lightbox-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1001;
}
.iso-lightbox-container .close-container {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
.iso-lightbox-container .close {
  position: relative;
  padding: .75rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin-left: auto;

  cursor: pointer;
  z-index: 1002;
  transition-property: color;
  transition-duration: 500ms;
}
.iso-image-container {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-height: 90vh;
}
.iso-image-container img {
  object-fit: contain;
  max-height: 100%;
  padding-bottom: 2rem;
}

.iso-image-container .bottom-padding {
  content: "aaaa";
  width: 100%;
  height: 30rem;
  z-index: 1001;
  margin-left: auto;
  margin-right: auto;
}
</style>
