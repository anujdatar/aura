<template>
  <img :src="require('~/assets/images/clients/logo' + image + '.jpg')" alt="">
</template>

<script>
export default {
  props: {
    image: {
      type: Number,
      default: 1
    }
  }
}
</script>
