<template>
  <div class="w-screen relative flex content-center items-center justify-center min-h-screen-150">
    <div class="hero-image absolute inline-block w-full h-full top-0 bg-center bg-cover pt-16 pb-32" :style="heroImage" />
    <div class="container flex flex-col relative">
      <h1 class="text-4xl font-semibold text-white text-center opacity-100">
        {{ title }}
      </h1>
      <h2 class="text-3xl font-semibold text-white text-center opacity-100">
        <slot />
      </h2>
      <p class="text-xl text-blue-gray-200 text-center">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati aliquam laudantium ratione dignissimos quis iusto.'
    },
    imageSrc: {
      type: String,
      default: ''
    },
    textOffset: {
      type: String,
      default: 'top-36'
    },
    imageOffset: {
      type: String,
      default: '50%'
    }
  },
  computed: {
    heroImage () {
      return {
        '--hero-image': 'url(' + this.imageSrc + ')',
        '--hero-offset': this.imageOffset
      }
    },
    textTop () {
      return this.textOffset
    }
  }
}
</script>

<style>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), var(--hero-image);
  background-position-y: var(--hero-offset);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}
</style>
