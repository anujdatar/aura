<script setup lang="ts">
const heroImage = ref<HTMLDivElement>()

const props = defineProps({
  image: String,
  title: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  content: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam repudiandae eligendi qui nihil esse nisi.',
  },
})

onMounted(() => {
  heroImage.value!.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${props.image})`
})
</script>

<template>
  <div class="hero-container relative flex content-center items-center justify-center bg-alt">
    <div ref="heroImage" class="hero-image-div" />
    <div class="hero-text container relative flex flex-col text-white text-center">
      <h1 class="text-4xl semibold">
        {{ props.title }}
      </h1>
      <h2 class="text-3xl semibold">
        <slot />
      </h2>
      <p class="text-xl text-alt">
        {{ props.content }}
      </p>
    </div>
    <section-separator class="top-auto bottom-24" color="text-alt" />
  </div>
</template>

<style>
.hero-container {
  width: 100%;
  min-height: 37.5rem;
}
.hero-image-div {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
  top: calc(-1 * var(--navbar-height));
  background-position: center;
  background-size: cover;
  /* padding-top: 4rem;
  padding-bottom: 8rem; */
}
.hero-text {
  z-index: 1;
  top: -5rem;
}
.bottom-24 {
  bottom: 6rem;
}
</style>
