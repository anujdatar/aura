<template>
  <div class="flex flex-row flex-wrap items-center justify-center mt-4">
    <!-- <img :src="require('~/assets/images/clients/logo' + image + '.jpg')" alt=""> -->
    <img
      v-for="(image, i) in images"
      :key="i"
      :src="image"
      alt="image"
      class="p-2 h-18"
    >
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
